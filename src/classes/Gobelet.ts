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

    lancer(nom: string) {
        this._valeur = 0;
        console.log(`${nom} lance le gobelet.`);
        for (let i = 1; i <= this._des; i++) {
            let de: De = new De();
            de.lancer();
            console.log(`${nom} fait ${de.valeur}`);
            this._valeur += de.valeur;
        }
    }

    afficher_score() {
        console.log(`Le total du gobelet est ${this._valeur}`);
    }
}