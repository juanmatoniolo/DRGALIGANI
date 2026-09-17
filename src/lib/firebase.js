// lib/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Inicializar Firebase solo una vez (evita errores en desarrollo con HMR)
let app;
if (!getApps().length) {
	app = initializeApp(firebaseConfig);
} else {
	app = getApps()[0];
}

// Exportar la instancia de la base de datos
export const database = getDatabase(app);
