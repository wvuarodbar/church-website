import { getFirestore } from "firebase/firestore";

const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Firestore
