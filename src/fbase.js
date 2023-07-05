import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1u8SZPRqPk0PjIwipM38rn2i43YxBkfw",
  authDomain: "udemy-6d9f5.firebaseapp.com",
  projectId: "udemy-6d9f5",
  storageBucket: "udemy-6d9f5.appspot.com",
  messagingSenderId: "395143251242",
  appId: "1:395143251242:web:40018433c2ee963dacca53",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
