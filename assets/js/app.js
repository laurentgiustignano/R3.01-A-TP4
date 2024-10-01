import {Document} from './document.js';

const docu = new Document();

docu.boutonAjouterChrono.addEventListener('click', () => {
  docu.ajouterChrono();
});
