import { Gobelet } from "./gobelet";

export class Joueur {
    private _nom: string;
    private _score: number;

    constructor(nom: string) {
        this._nom = nom;
        this._score = 0;
    }

    get nom() {
        return this._nom;
    }

    get score() {
        return this._score;
    }

    jouer(gobelet: Gobelet) {
        gobelet.lancer(this._nom);
        this._score += gobelet.valeur;
        gobelet.afficher_score();
    }

    afficher_score() {
        console.log(`${this._nom} a un total de ${this._score} points`);
    }
}