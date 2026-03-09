# Guida: Deploy per nuova squadra cliente

Questa guida spiega come configurare e vendere l'app a una nuova squadra di basket.

## 1. Firebase (per ogni cliente)

Crea un progetto Firebase (o usa uno condiviso con regole multi-tenant):

1. [Firebase Console](https://console.firebase.google.com) → Nuovo progetto
2. Abilita **Realtime Database** (per scouting)
3. Abilita **Firestore** (per viewer partite)
4. Abilita **Authentication**:
   - Google (per scouting)
   - Email/Password (per admin viewer)
5. Registra le app web e ottieni la config

## 2. Configurazione tenant

1. Copia `config/tenant.example.js` → `config/tenant.js`
2. Compila:

```javascript
teamName: "Nome Squadra",
teamSubtitle: "UNDER 17",  // es. categoria
firebaseScouting: { /* config Realtime DB */ },
firebaseViewer: { /* config Firestore */ },
adminUids: ["uid_firebase_auth"],  // UID dell'admin
primaryColor: "#ff9800",
logoPath: "logo.png"
```

3. Per ottenere `adminUids`: l'admin deve fare login nel viewer; in Firebase Console → Authentication → Users → copia l'UID.

## 3. Branding

- Carica `logo.png` nella root (192×192 px consigliato)
- Modifica `manifest.webmanifest` e `manifest-scouting.webmanifest`: `name`, `short_name`
- (Opzionale) Crea icone PWA in `icons/` (192, 512 px)

## 4. Deploy

- **Firebase Hosting**: `firebase deploy`
- **GitHub Pages**: push sulla branch `main`/`gh-pages`
- **Altro hosting statico**: carica tutti i file mantenendo la struttura

## 5. Regole Firebase

```bash
firebase deploy --only database
firebase deploy --only firestore
```

Le regole in `database.rules.json` e `firestore.rules` devono essere adattate se usi multi-tenant con `orgId` nei path.

## 6. Checklist pre-lancio

- [ ] `config/tenant.js` compilato
- [ ] Logo caricato
- [ ] Admin UID inserito
- [ ] Regole Firebase deployate
- [ ] Test: login, scouting, export, viewer
- [ ] Privacy e Termini verificati (modifica `privacy.html` con dati titolare se necessario)
