# Smiles Africa – Relaunch 2026

Neue Website für [smilesafricacharity.com](https://smilesafricacharity.com), gebaut mit [Astro](https://astro.build) als statische Seite mit integriertem Blog. Jeder Push auf `main` wird per GitHub Action gebaut und auf one.com hochgeladen (vorerst Testdomain).

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
| `src/pages/` | Eine Datei pro URL; deutsche Seiten im Wurzelverzeichnis, englische unter `en/` |
| `src/views/` | Seiteninhalte für beide Sprachen; die Dateien in `pages/` binden sie nur ein |
| `src/components/` | Header, Footer, Karten, YouTube-Einbettung (Zwei-Klick), Platzhalter |
| `src/i18n/ui.ts` | URLs je Sprache, Navigation, Texte, Kontaktdaten, Bankverbindung |
| `src/content/blog/de/` | Blogbeiträge als Markdown (englische Beiträge unter `en/`) |
| `src/content/team-kenya/index.md` | Seite des kenianischen Teams – pflegt das Team in Nairobi selbst |
| `src/assets/img/` | Bilder, die Astro beim Build optimiert (WebP, mehrere Größen) |
| `assets/smilesafrica/` | Archiv der alten Website: 139 Bilder, 11 Instagram-Bilder, YouTube-Links. Wird nicht ausgeliefert |
| `scripts/import-wordpress.mjs` | Einmaliger Import der alten WordPress-Beiträge |

## Neuen Blogbeitrag anlegen

Neue Datei `src/content/blog/de/mein-beitrag.md`, Bilder in einen gleichnamigen Ordner daneben:

```markdown
---
title: "Titel des Beitrags"
date: 2026-10-05
author: "Vorname Nachname"
description: "Ein Satz für Vorschau und Suchmaschinen."
cover: "./mein-beitrag/titelbild.jpg"
coverAlt: "Was auf dem Bild zu sehen ist"
category: "Meilensteine"   # Meilensteine | Aktionen | Bildungswissen | Vereinsleben
---

Text in Markdown …
```

Der Dateiname wird zur URL: `/aktuelles/mein-beitrag/`.

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
