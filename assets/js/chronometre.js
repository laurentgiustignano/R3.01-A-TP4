/**
 * Gestion de la logique du Chronometre
 * comme le démarrage du timer, la pause et le reset
 * @class Chronometre
 */
export class Chronometre {
    /** @type {number} */
    #dixieme;
    /** @type {string} */
    #idChrono;
    /** @type {number} */
    static #nbChrono = 0;

    constructor() {
        this.#dixieme = 0;
        Chronometre.#nbChrono++;
        this.#idChrono = `chrono${Chronometre.#nbChrono}`;

    }

    /**
     * getter pour la propriété idChrono
     * @return {string}
     */
    get idChrono() {
        return this.#idChrono;
    }

    /**
     * Converti un temps en dixième de secondes en sa
     * représentation mm:ss:d dans un tableau
     * @return {number[]}
     */
    horaireFromDixieme() {
        const minutes = Math.floor(this.#dixieme / 600);
        const secondes = Math.floor((this.#dixieme % 600) / 10);
        const dixieme = (this.#dixieme % 10);

        return [minutes, secondes, dixieme];
    }

}
