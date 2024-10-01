import {Chronometre} from './chronometre.js'

/**
 * Gestion de l'affichage des Chronomètres (du DOM)
 * @class Document
 */
export class Document {
  /** @type {Chronometre} */
  #chrono
  /** @type {Element} */
  #container
  /** @type {Element} */
  #boutonAjouterChrono
  /** @type {HTMLTemplateElement} */
  #chronoVide
  /** @type {boolean} */
  static #chronoInitialise = false;

  constructor() {
    this.#container = document.querySelector('#container');
    this.#boutonAjouterChrono = document.querySelector('#ajouter');
    this.#chronoVide = document.querySelector('#horloge-vide');
  }

  /**
   * @return {Element}
   */
  get container() {
    return this.#container
  }

  /**
   * @return {Element}
   */
  get boutonAjouterChrono() {
    return this.#boutonAjouterChrono
  }

  /**
   * @return {Chronometre}
   */
  get chrono() {
    return this.#chrono
  }

  /**
   * @return {HTMLTemplateElement}
   */
  get chronoVide() {
    return this.#chronoVide
  }

  /**
   * Effectue la mise à jour de l'affichage pour un
   * @param idChrono
   */
  renderChrono(idChrono) {
    const element = document.querySelector(`#${idChrono}`);
    const [minute, seconde, dixieme] = this.chrono.horaireFromDixieme();

    element.querySelector('.minute').textContent = minute.toString().padStart(2, '0');
    element.querySelector('.seconde').textContent = seconde.toString().padStart(2, '0');
    element.querySelector('.dixieme').textContent = dixieme.toString();
  }

  /**
   * Ajoute l'affichage d'un Chronomètre dans le DOM au niveau
   * de l'élément HTML .container.
   */
  ajouterChrono() {
    if (Document.#chronoInitialise)
      alert("Un seul chronomètre autorisé à l'étape 1.")
    else {
      Document.#chronoInitialise = true;
      this.#chrono = new Chronometre();
      const chronoElement = this.chronoVide.content.cloneNode(true);
      chronoElement.querySelector('.chronometre').id = this.chrono.idChrono
      this.container.append(chronoElement);
      this.renderChrono(this.#chrono.idChrono);
    }
  }
}
