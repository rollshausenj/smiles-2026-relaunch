# Smiles Africa – Relaunch 2026

Neue Website für [smilesafricacharity.com](https://smilesafricacharity.com), gebaut mit [Astro](https://astro.build) als statische, zweisprachige Seite (DE/EN) im dunklen, reduzierten Design. Jeder Push auf `main` wird per GitHub Action gebaut und auf one.com hochgeladen (vorerst Testdomain).

- Requirements-Dokument: https://claude.ai/code/artifact/4691d909-567c-43ef-bd10-1d89bcb6cd00

## Lokal starten

Voraussetzung: Node.js 22 oder neuer.

```bash
npm install
```

```bash
npm run dev
```

Danach http://localhost:4321 öffnen. Mit `npm run build` entsteht die fertige Seite in `dist/`.

## Struktur

| Pfad | Inhalt |
| --- | --- |
| `src/pages/` | Eine Datei pro URL; deutsche Seiten im Wurzelverzeichnis (gleiche URLs wie die alte Seite), englische unter `en/` |
| `src/views/` | Seiteninhalte für beide Sprachen; die Dateien in `pages/` binden sie nur ein |
| `src/components/` | Header, Footer, Seitenkopf, YouTube-Einbettung (Zwei-Klick), Platzhalter |
| `src/styles/global.css` | Designsystem: Farben, Schriften, Buttons, Abstände |
| `src/i18n/ui.ts` | URLs je Sprache, Navigation, Texte, Kontaktdaten, Bankverbindung |
| `src/content/team-kenya/index.md` | Abschnitt des kenianischen Teams auf der Team-Seite – pflegt das Team in Nairobi selbst |
| `src/assets/` | Bilder und Team-Porträts, die Astro beim Build optimiert (WebP, mehrere Größen) |
| `assets/smilesafrica/` | Archiv der alten Website: 139 Bilder, 11 Instagram-Bilder, YouTube-Links. Wird nicht ausgeliefert |

## Platzhalter

Noch fehlende Inhalte sind auf der Seite als gelb gestrichelte Kästen markiert („Inhalt folgt“). Im Code: `<Todo>` in `src/views/`. Vor dem Relaunch müssen alle entfernt sein.

## Deployment

`.github/workflows/deploy.yml` baut die Seite und lädt `dist/` per SFTP zu one.com hoch. Es läuft nur, wenn sich `src/`, `public/` oder die Build-Konfiguration ändert. Alte Dateien auf dem Server werden nicht gelöscht.

Benötigte Secrets unter **Settings → Secrets and variables → Actions** (Werte aus dem one.com Control Panel → Advanced settings → SSH & SFTP):

| Secret | Wert |
| --- | --- |
| `SFTP_HOST` | SFTP-Host |
| `SFTP_USERNAME` | SFTP-Benutzername |
| `SFTP_PASSWORD` | SSH/SFTP-Passwort |
| `SFTP_PORT` | Port, nur falls nicht 22 |
| `SFTP_REMOTE_DIR` | Webroot der Testdomain, z. B. `webroots/5dfa4a5d` (Control Panel → Subdomains → Folder) |

Den Status siehst du im Repo unter **Actions**.
