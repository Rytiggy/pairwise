import { getAuth } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { ref } from "vue";

export function useAnswers() {
    const db = getFirestore();


    async function createAnswer(questionId) {
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
            alert("you need to login")
            throw "Unauthenticated"
        }
        try {
            const docRef = await addDoc(collection(db, "answers"), {
                questionId,
                userId: user.uid,
                userEmail: user.email,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return { createAnswer };
}
