# Meine Webseite

Statische HTML-Seite, gehostet auf one.com. Jeder Push auf `main` wird per GitHub Action automatisch hochgeladen.

## Struktur

- `public/`: alles hier drin landet auf dem Server
- `.github/workflows/deploy.yml`: der Deploy-Workflow

## Lokal ansehen

```bash
cd public && python3 -m http.server 8000
```

Danach http://localhost:8000 öffnen.

## Einrichtung (einmalig)

Im GitHub-Repo unter **Settings → Secrets and variables → Actions** diese drei Secrets anlegen:

| Secret         | Wert (aus dem one.com Control Panel) |
|----------------|--------------------------------------|
| `FTP_SERVER`   | FTP-Hostname                         |
| `FTP_USERNAME` | FTP-Benutzername                     |
| `FTP_PASSWORD` | FTP-Passwort                         |

## Veröffentlichen

```bash
git add .
git commit -m "Beschreibung der Änderung"
git push
```

Den Status siehst du im Repo unter **Actions**.

## Relaunch smilesafricacharity.com

- Requirements-Dokument (lebendes Dokument): https://claude.ai/code/artifact/4691d909-567c-43ef-bd10-1d89bcb6cd00
- `assets/smilesafrica/`: gesicherte Medien der alten Website (Stand 05.10.2026)
  - `bilder/`: 139 Bilder aus der WordPress-Mediathek (Originalgröße)
  - `instagram/`: 11 Bilder der neuesten Instagram-Beiträge von @smilesafricacharity_de
  - `youtube-links.md`: 10 eingebettete YouTube-Videos mit Fundstelle
  - `media.tsv`, `bild_urls.txt`: Index der Mediathek (Datum, Typ, URL, Alt-Text)

`assets/` liegt außerhalb von `public/` und wird deshalb nicht hochgeladen.
