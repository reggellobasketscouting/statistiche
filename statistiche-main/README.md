# Statistiche Basket — App Scouting & Viewer

App professionale per statistiche di partite di basket: scouting in tempo reale, viewer partite, export Excel, live sync. Progetto white-label: configurabile per squadre e organizzazioni.

## Funzionalità

- **Scouting** (`index.html`, `tablet.html`): registrazione partite, tiri, falli, sostituzioni, timeline eventi
- **Viewer** (`viewer.html`): elenco partite con link statistiche e YouTube
- **Hub** (`hub.html`): feed live partite da Firebase RTDB
- **Export**: JSON, Excel (MiaSquadra, Tiri, Avversari, Eventi)
- **PWA**: installabile su smartphone/tablet
- **Live sync**: statistiche in tempo reale tra scout e viewer

## White-label: configurazione per altre squadre

1. Copia `config/tenant.example.js` in `config/tenant.js`
2. Modifica i valori:
   - `teamName`, `teamNameShort`, `teamSubtitle` — branding
   - `firebaseScouting` — progetto Firebase per scouting (Realtime Database)
   - `firebaseViewer` — progetto Firebase per viewer (Firestore)
   - `adminUids` — UID degli admin (Firebase Auth)
   - `primaryColor`, `logoPath` — aspetto
3. Aggiorna `manifest.webmanifest` e `manifest-scouting.webmanifest` con nome squadra
4. Carica `logo.png` nella root

## Tecnologie

- HTML/CSS/JS (vanilla)
- Firebase (Realtime Database + Firestore + Auth)
- SheetJS (XLSX)

## Deploy

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init  # se non già fatto
firebase deploy
```

### Regole database

```bash
firebase deploy --only database
firebase deploy --only firestore
```

## Struttura file

```
├── index.html          # Scouting (mobile)
├── tablet.html         # Scouting (tablet)
├── viewer.html         # Viewer partite
├── hub.html            # Hub live
├── install-scouting.html
├── privacy.html        # Privacy Policy
├── terms.html          # Termini di utilizzo
├── config/
│   ├── tenant.js       # Config tenant (creare da example)
│   └── tenant.example.js
├── database.rules.json # Firebase RTDB rules
├── firestore.rules     # Firestore rules
└── firebase.json
```

## Privacy & Termini

- [privacy.html](privacy.html) — Informativa sulla privacy (GDPR)
- [terms.html](terms.html) — Termini di utilizzo

## Firebase

- **Scouting**: Realtime Database (games, users, presence, hubs)
- **Viewer**: Firestore (games)
- **Auth**: Google Sign-In (scouting), email/password (viewer admin)

## Licenza

Proprietario. Per uso commerciale/ridistribuzione contattare il titolare.
