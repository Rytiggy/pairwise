import { getAuth } from "firebase/auth";
import { collection, getDocs, addDoc, query, where, getFirestore, doc, getDoc } from "firebase/firestore";

import { ref } from "vue";

export function useQuestions() {
    const db = getFirestore();
    const questions = ref([])

    async function fetchQuestions() {
        questions.value = []
        const querySnapshot = await getDocs(collection(db, "questions"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, JSON.stringify(doc.data()));
            questions.value.push(doc.data())
        });
    }

    async function fetchQuestion(id) {
        const docRef = doc(db, "questions", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data()
        } else {
            console.log("No such document!");
            throw "Document does not exist"
        }
    }

    async function createQuestion(title, body) {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user)
            alert("you need to login")
        try {
            const docRef = await addDoc(collection(db, "questions"), {
                title,
                body,
                votes: 0,
                createdBy: user.uid
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return { questions, createQuestion, fetchQuestion, fetchQuestions };
}
