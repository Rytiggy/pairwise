import { getAuth } from "firebase/auth";
import { collection, getDocs, addDoc, getFirestore, doc, getDoc } from "firebase/firestore";

import { ref } from "vue";

export function useQuestions() {
    const db = getFirestore();
    const questions = ref({})

    async function fetchQuestions() {
        questions.value = {}
        const querySnapshot = await getDocs(collection(db, "questions"));
        querySnapshot.forEach((doc) => {
            questions.value[doc.id] = doc.data()
        });
    }

    async function fetchQuestion(id) {
        const docRef = doc(db, "questions", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            throw "Document does not exist"
        }
    }

    async function createQuestion(title, body) {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user)
            alert("you need to login")
        try {
            await addDoc(collection(db, "questions"), {
                title,
                body,
                createdBy: user.uid
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return { questions, createQuestion, fetchQuestion, fetchQuestions };
}
