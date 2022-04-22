import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCWKU7WWNN_vJwSJmPMJDY6snm8nJToFtM",
    authDomain: "financial-blog-f8037.firebaseapp.com",
    databaseURL: "https://financial-blog-f8037-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = getFirestore(firebaseApp)

export { firebaseApp };
export default base;