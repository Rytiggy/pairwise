import { getAuth } from "firebase/auth";
import {
    collection,
    addDoc,
    getFirestore,
    query,
    where,
    getCountFromServer,
} from "firebase/firestore";

export function useVotes() {
    const db = getFirestore();

    async function createVote(questionId) {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
            alert("you need to login");
            throw "Unauthenticated";
        }
        try {
            const docRef = await addDoc(collection(db, "votes"), {
                questionId,
                userId: user.uid,
                userEmail: user.email,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    async function fetchVotesForQuestion(questionId) {
        // Create a reference to the cities collection
        const citiesRef = collection(db, "votes");
        // Create a query against the collection.
        const q = query(citiesRef, where("questionId", "==", questionId));
        const querySnapshot = await getCountFromServer(q);
        return querySnapshot.data().count;
    }

    return { createVote, fetchVotesForQuestion };
}
