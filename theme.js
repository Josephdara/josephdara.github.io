(() => {
  const root = document.documentElement;
  const select = document.querySelector('#appearance');
  if (!select) return;
  const allowed = ['system', 'light', 'dark'];
  let preference = root.dataset.themePreference || 'system';
  const apply = (value) => {
    preference = allowed.includes(value) ? value : 'system';
    root.dataset.themePreference = preference;
    if (preference === 'system') delete root.dataset.theme;
    else root.dataset.theme = preference;
    select.value = preference;
  };
  apply(preference);
  select.closest('.theme-control').hidden = false;
  select.addEventListener('change', () => {
    apply(select.value);
    try { localStorage.setItem('jd-appearance', preference); } catch (_) { /* Storage can be disabled. */ }
  });
  window.addEventListener('storage', (event) => {
    if (event.key === 'jd-appearance' || event.key === null) apply(event.newValue);
  });
})();
