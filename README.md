# ION Hoodie

Static site (no build step).

- `index.html` — main page, including the "Support ION" section (two voluntary-contribution buttons)
- `terms.html` — Terms & Refund Policy
- `privacy.html` — Privacy & Data Policy
- `store.html` — old purchase page, now only redirects to `index.html#support`

To activate a contribution button later, put a Stripe Payment Link into its `data-stripe` attribute in `index.html`
(`data-support="fixed-25"` and `data-support="custom"`). Until then the buttons only show "Contributions are temporarily unavailable..."

Deploy with GitHub Pages: Settings → Pages → Deploy from branch → `main` / root.
