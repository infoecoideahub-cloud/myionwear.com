/* ION: the single place to set the crowdfunding campaign page address.
   Paste the full campaign URL between the quotes. Every "Support" button on every page uses it. */
window.ION_CAMPAIGN_URL = '';

(function () {
  var url = window.ION_CAMPAIGN_URL;
  var toast, timer;

  var css = document.createElement('style');
  css.textContent = '.ion-toast{position:fixed;left:50%;bottom:28px;transform:translate(-50%,20px);opacity:0;pointer-events:none;z-index:9999;max-width:calc(100vw - 32px);background:#1d1d1f;color:#fff;font:500 14px/1.45 -apple-system,BlinkMacSystemFont,"Inter",sans-serif;padding:13px 20px;border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,.25);transition:opacity .25s ease,transform .25s ease;text-align:center}.ion-toast.show{opacity:1;transform:translate(-50%,0)}';
  document.head.appendChild(css);

  function showToast() {
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'ion-toast';
      toast.setAttribute('role', 'status');
      toast.textContent = 'Our campaign page is not live yet. Please check back soon.';
      document.body.appendChild(toast);
    }
    toast.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(function () { toast.classList.remove('show'); }, 3500);
  }

  document.querySelectorAll('.js-support').forEach(function (a) {
    if (url) {
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener';
    } else if (a.hasAttribute('data-toast')) {
      a.addEventListener('click', function (e) { e.preventDefault(); showToast(); });
    }
    /* No URL yet and no data-toast: the link simply scrolls to the support section. */
  });
})();
