import { initializeApp, FirebaseOptions } from "firebase/app";

const firebaseConfig: FirebaseOptions = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
export default app;
