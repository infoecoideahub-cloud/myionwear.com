# ION Hoodie

Static site (no build step), deployed with GitHub Pages.

- `index.html` — main page with the "Support ION" reward blocks
- `campaign.js` — **set the campaign page URL here** (`window.ION_CAMPAIGN_URL`). All "Support" buttons use it.
  While it is empty, the reward buttons show "Our campaign page is not live yet", and the other buttons scroll to the support section.
- `assets/` — reward images
- `terms.html`, `privacy.html` — legal pages
- `store.html` — old purchase page, now only redirects to `index.html#support`
- `hoodie-frames/` — animation frames and GIF for use on the campaign page
