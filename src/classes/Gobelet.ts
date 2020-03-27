import { De } from "./De";

export class Gobelet {
    private _valeur: number;
    private _des: number;

    constructor(nb_des: number) {
        this._valeur = 0;
        this._des = nb_des;
    }

    get valeur() {
        return this._valeur;
    }

    get des() {
        return this._des;
    }

    /**
     * Lance les dés du gobelet
     */
    lancer() {
        this._valeur = 0;
        for (let i = 1; i <= this._des; i++) {
            let leDe: De = new De();
            leDe.lancer();
            this._valeur += leDe.valeur;
        }
    }

    /**
     * Retourne les points obtenu avec le gobelet
     */
    afficher_score() {
        return `fait ${this._valeur}`;
    }
}