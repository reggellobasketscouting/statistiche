/**
 * Esempio configurazione tenant. Rinomina in tenant.js e personalizza.
 * Per ogni squadra cliente: copia, modifica, deploya.
 */
window.APP_CONFIG = {
  teamName: "Nome Squadra",
  teamNameShort: "Squadra",
  teamSubtitle: "Categoria",
  appTitleStats: "STATS",
  appTitleViewer: "Partite",
  logoPath: "logo.png",

  primaryColor: "#ff9800",
  themeColor: "#0b0b0f",
  backgroundColor: "#0b0b0f",

  firebaseScouting: {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com",
    projectId: "your-project",
    storageBucket: "your-project.firebasestorage.app",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123",
    measurementId: "G-XXXXXXXXXX"
  },

  firebaseViewer: {
    apiKey: "YOUR_VIEWER_API_KEY",
    authDomain: "viewer-project.firebaseapp.com",
    projectId: "viewer-project",
    storageBucket: "viewer-project.firebasestorage.app",
    messagingSenderId: "987654321",
    appId: "1:987654321:web:xyz789"
  },

  adminUids: ["uid1", "uid2"],
  baseUrl: ""
};
