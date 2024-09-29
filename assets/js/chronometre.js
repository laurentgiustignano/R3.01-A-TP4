class Chronometre {
    #dixieme;
    #idChrono;
    static #nbChrono = 0;

    constructor() {
        Chronometre.#nbChrono++;
        this.#idChrono = `chrono${Chronometre.#nbChrono}`;

    }


    #horaireFromDixieme() {
        const minutes = Math.floor(this.#dixieme / 600);
        const secondes = Math.floor((this.#dixieme % 600) / 10);
        const dixieme = (this.#dixieme % 10);

        return [minutes, secondes, dixieme];
    }

    #render() {
        const element = document.querySelector(`#${this.#idChrono}`);
        const [minute, seconde, dixieme] = this.#horaireFromDixieme();

        element.querySelector('.minute').textContent = minute.toString().padStart(2, '0');
        element.querySelector('.seconde').textContent = seconde.toString().padStart(2, '0');
        element.querySelector('.dixieme').textContent = dixieme.toString();
    }

}

const ajouterChrono = document.querySelector('#ajouter');
ajouterChrono.addEventListener('click', () => {
    const chrono = new Chronometre();
});
