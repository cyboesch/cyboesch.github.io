// [Abstract] toggles. Without JavaScript every abstract is simply shown.
document.addEventListener('DOMContentLoaded', () => {
  for (const button of document.querySelectorAll('.abstract-toggle')) {
    button.addEventListener('click', () => {
      const abstract = document.getElementById(button.getAttribute('aria-controls'));
      const open = button.getAttribute('aria-expanded') !== 'true';
      abstract.hidden = !open;
      button.setAttribute('aria-expanded', String(open));
    });
  }
});
