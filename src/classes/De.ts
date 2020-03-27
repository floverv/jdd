export class De {
    private _valeur: number;

    constructor () {
        this._valeur = 0;
    }

    get valeur() {
        return this._valeur;
    }

    lancer() {
        this._valeur = Math.floor(Math.random() * (7 - 1) + 1);
    }
}