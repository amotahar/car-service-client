// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk3kIlFfvIpysrY-2j4gUDf_u-DxtNmhk",
  authDomain: "car-service-dba71.firebaseapp.com",
  projectId: "car-service-dba71",
  storageBucket: "car-service-dba71.appspot.com",
  messagingSenderId: "367804713447",
  appId: "1:367804713447:web:36213d4099948ce0959542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;