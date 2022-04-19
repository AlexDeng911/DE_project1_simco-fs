// import reBase from 're-base';
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';
// import { initializeApp } from 'firebase/app'; 

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCWKU7WWNN_vJwSJmPMJDY6snm8nJToFtM",
    authDomain: "financial-blog-f8037.firebaseapp.com",
    databaseURL: "https://financial-blog-f8037-default-rtdb.europe-west1.firebasedatabase.app",
})

// const base = reBase.createClass(firebaseApp.database())
const base = getFirestore(firebaseApp)

export { firebaseApp };
export default base;