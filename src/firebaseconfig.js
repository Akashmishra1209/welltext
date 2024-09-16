import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCU1KZ_gn5WxXGmGk2jjZyRr9g9cyZkgj0",
  authDomain: "welltext-3eb36.firebaseapp.com",
  projectId: "welltext-3eb36",
  storageBucket: "welltext-3eb36.appspot.com",
  messagingSenderId: "224324531882",
  appId: "1:224324531882:web:61de45a4091a19988f82d3",
  measurementId: "G-KRPJ2C4J3R"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);