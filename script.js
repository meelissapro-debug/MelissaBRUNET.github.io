/* Sélecteur de langue FR / EN
   Chaque texte du site porte deux attributs : data-fr et data-en.
   Pour modifier un texte, édite les deux. */

(function () {
  var boutons = document.querySelectorAll('.langue button');

  function appliquer(langue) {
    document.documentElement.lang = langue;

    document.querySelectorAll('[data-' + langue + ']').forEach(function (el) {
      el.textContent = el.getAttribute('data-' + langue);
    });

    /* Liens dont l'adresse change avec la langue (le CV, par exemple) */
    document.querySelectorAll('[data-' + langue + '-href]').forEach(function (el) {
      el.setAttribute('href', el.getAttribute('data-' + langue + '-href'));
    });

    boutons.forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.langue === langue ? 'true' : 'false');
    });

    try { localStorage.setItem('langue', langue); } catch (e) {}
  }

  boutons.forEach(function (b) {
    b.addEventListener('click', function () {
      appliquer(b.dataset.langue);
    });
  });

  var choisie;
  try { choisie = localStorage.getItem('langue'); } catch (e) {}

  if (!choisie) {
    choisie = (navigator.language || 'fr').toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en';
  }

  if (choisie === 'en') appliquer('en');
})();
