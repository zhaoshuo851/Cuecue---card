# CueCue homepage visual upgrade

This is a static front-end prototype for the CueCue homepage refresh.

## Files

- `index.html` - page structure and rewritten homepage copy
- `styles.css` - visual system, responsive layout, animations, and component styling
- `app.js` - scroll reveal, card-stack switching, pointer parallax, and button motion
- `scripts/qa-check.cjs` - optional Playwright screenshot and overflow check
- `assets/template-card-sheet.jpg` - generated template-wall artwork, compressed for page performance
- `qa-screenshots/` - generated desktop, tablet, and mobile review screenshots

## Direction

The design positions CueCue as an interactive card website studio for overseas creators and small businesses. It borrows the visual logic of modular design toolkits: layered cards, energetic blocks, dense interaction details, and template-like compositions.

## Run

Open `index.html` directly in a browser. No build step or package install is required.

For local preview with a URL:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

To run the QA script against a local file instead of the server, set `QA_URL`:

```bash
QA_URL=file:///absolute/path/to/index.html node scripts/qa-check.cjs
```
