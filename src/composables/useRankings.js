import {
    collection,
    getDocs,
    addDoc,
    getFirestore,
    doc,
    getDoc,
    updateDoc
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { ref } from "vue";
export function useRankings() {
    const db = getFirestore();
    const rankings = ref([]);

    async function fetchRankings() {
        rankings.value = []
        const querySnapshot = await getDocs(collection(db, "rankings"));
        querySnapshot.forEach((doc) => {
            rankings.value.push(doc.data());
        });
    }

    async function getRanking(id) {
        console.log(rankings.value)
        const cachedRanking = rankings.value.find((ranking) => ranking.id === id);
        if (cachedRanking) return cachedRanking;
        return await fetchRanking(id)

    }

    async function fetchRanking(id) {
        // Api call
        const docRef = doc(db, "rankings", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            return { ...data, id };
        } else {
            throw "Document does not exist";
        }
    }

    async function updateRanking(id, updates) {
        await updateDoc(doc(db, "rankings", id), updates);
        return await fetchRanking(id)
    }

    async function createRanking() {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
            alert("you need to login")
            throw "unauthenticated"
        }
        try {
            await addDoc(collection(db, "ranking"), {
                name: "New Ranking",
                userId: user.uid,
                items: []
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return {
        rankings,
        getRanking,
        fetchRankings,
        updateRanking,
        createRanking
    };
}
