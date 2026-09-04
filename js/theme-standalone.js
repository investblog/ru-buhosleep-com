// Sync theme loader — prevents flash of wrong theme
(function () {
  var t = localStorage.getItem('buho-theme');
  if (!t) t = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', t);
})();
