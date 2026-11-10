# Colony adoption site

A static site that reads the cat list from a Google Sheet. Volunteers edit the sheet, and the site updates within about 5 minutes. No build step and no server.

## Files

- `index.html`: page structure
- `styles.css`: all styling
- `app.js`: settings at the top (sheet link, Lumi's email, Instagram), site text in English and Spanish, and the code that loads the cats
- `images/`: cat photos

## 1. Set up the Google Sheet

1. Create a new Google Sheet. Rename the first tab to **Cats**.
2. In row 1, type these headers exactly (lowercase):

   `name | status | sex | est_age | est_age_es | blurb | blurb_es | photo_1 | video`

   - `status`: Available, Reserved or Adopted (Spanish works too: Disponible, Reservado, Adoptado)
   - `sex`: Girl or Boy (also accepts F/M, Hembra/Macho)
   - `est_age` / `blurb`: English text. `est_age_es` / `blurb_es`: Spanish text (optional; English shows if blank)
   - `photo_1`: a filename in the `images/` folder (e.g. `mochi-1.jpg`) or a full image URL. Don't use Google Drive links; they don't display reliably.
   - `video`: a full Instagram or YouTube link (optional)
3. Make `status` a dropdown: select column B, **Data → Data validation → Dropdown**, and add Available, Reserved and Adopted.
4. Lock the header row: select row 1, **Data → Protect sheets and ranges**, and allow only yourself to edit.
5. Add a second tab called **Private notes** for anything that shouldn't be public.
6. Share the sheet (Editor access) with Lumi and the volunteers who will update it.

## 2. Publish the Cats tab

1. **File → Share → Publish to web**
2. Under *Link*, choose the **Cats** tab (not "Entire document") and **Comma-separated values (.csv)**.
3. Click **Publish** and copy the link.

Only that tab becomes public. Private notes stay private.

## 3. Fill in the settings

Open `app.js` and edit `CONFIG` at the top:

```js
sheetCsvUrl: 'https://docs.google.com/spreadsheets/d/e/.../pub?gid=0&single=true&output=csv',
lumiEmail: 'her-real-email@example.com',
instagramHandle: 'colony_handle'
```

While `sheetCsvUrl` is empty, the site shows six sample cats so you can preview it.

Also replace the bracketed placeholders: `[Colony name]` in `index.html`, the disclaimer details in the footer of `index.html`, and the requirements, fostering, supplies and About text in the `TEXT` section of `app.js` (in both `en` and `es`).

## 4. Preview locally (optional)

From this folder, run `python3 -m http.server` and open http://localhost:8000.

## 5. Put it on GitHub Pages

1. Create a separate GitHub account or organization for the colony, not your personal one, so it can be handed over later.
2. Create a new **public** repository (e.g. `gatos`).
3. On the repo page, click **Add file → Upload files**, drag in `index.html`, `styles.css`, `app.js` and the `images` folder, then click **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then click **Save**.
5. After a minute or two the site is live at `https://<account>.github.io/<repo>/`. If you name the repo `<account>.github.io`, it lives at the root address instead.

## Day-to-day updates

- **Status, ages, blurbs, videos:** edit the sheet. Nothing to do on GitHub.
- **New cat photos:** resize to about 1200px wide (under ~300 KB), upload to `images/` via **Add file → Upload files**, then put the filename in the sheet.
- **Site text:** edit `app.js` (TEXT) or `index.html` on GitHub with the pencil icon, then commit.

Anything typed into the sheet is shown as plain text, so a sheet editor can't break or inject code into the page. A renamed or deleted header column will stop that field from showing, which is why the header row is locked.
