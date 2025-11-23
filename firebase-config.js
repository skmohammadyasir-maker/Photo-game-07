// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Firebase Config (তোমারটা 그대로)
const firebaseConfig = {
  apiKey: "AIzaSyBFbfVCHzWS9ZfsI_R7G5L95lIdsaAjqhM",
  authDomain: "membership-007.firebaseapp.com",
  databaseURL: "https://membership-007-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "membership-007",
  storageBucket: "membership-007.firebasestorage.app",
  messagingSenderId: "260769258496",
  appId: "1:260769258496:web:948c596e84f14c0c7f4ce5",
  measurementId: "G-PHW10NPS0B"
};

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Realtime Database Init
export const db = getDatabase(app);
