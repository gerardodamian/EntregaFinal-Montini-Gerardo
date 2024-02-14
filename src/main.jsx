import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXU5kuT7eOZBEC0pHzvvwOpQLwRqdSJb0",
    authDomain: "e-commerce2024-c29d8.firebaseapp.com",
    projectId: "e-commerce2024-c29d8",
    storageBucket: "e-commerce2024-c29d8.appspot.com",
    messagingSenderId: "796519975571",
    appId: "1:796519975571:web:53e71dcac684ac46f31b66",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
