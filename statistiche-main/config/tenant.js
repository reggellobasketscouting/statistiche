/**
 * Configurazione tenant per white-label.
 * Ogni squadra/organizzazione può personalizzare branding e Firebase.
 * Per vendere ad altre squadre: copia questo file e modifica i valori.
 */
window.APP_CONFIG = window.APP_CONFIG || {
  // Branding
  teamName: "Basket Reggello",
  teamNameShort: "Basket Reggello",
  teamSubtitle: "UNDER 17",
  appTitleStats: "STATS",
  appTitleViewer: "Partite",
  logoPath: "logo.png",

  // Colori (CSS vars)
  primaryColor: "#ff9800",
  themeColor: "#0b0b0f",
  backgroundColor: "#0b0b0f",

  // Firebase Scouting (Realtime Database)
  firebaseScouting: {
    apiKey: "AIzaSyAtJVAixoUVY3GMhoza7-UBnHMuKjLZjmE",
    authDomain: "basket-reggello-scout.firebaseapp.com",
    databaseURL: "https://basket-reggello-scout-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "basket-reggello-scout",
    storageBucket: "basket-reggello-scout.firebasestorage.app",
    messagingSenderId: "395815946220",
    appId: "1:395815946220:web:68c00b4c7f2da1754722c9",
    measurementId: "G-8DFL77TB65"
  },

  // Firebase Viewer (Firestore)
  firebaseViewer: {
    apiKey: "AIzaSyBhzea5-JQnlWhY9jMo3WH9v5dQOFGxolI",
    authDomain: "basket-viewer.firebaseapp.com",
    projectId: "basket-viewer",
    storageBucket: "basket-viewer.firebasestorage.app",
    messagingSenderId: "543075658747",
    appId: "1:543075658747:web:e0baba9479aac2b8bcf95e"
  },

  // Admin UIDs (sostituire con ruoli Firestore in produzione)
  adminUids: ["bpeheJ4AgOYyuTJKAzKWAtI5nRr1"],

  // URL base per link (opzionale, default = location.origin)
  baseUrl: ""
};
