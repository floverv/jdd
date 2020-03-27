import { Gobelet } from "./Gobelet";

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

    /**
     * Le joueur joue avec le gobelet
     * @param gobelet 
     */
    jouer(gobelet: Gobelet) {
        gobelet.lancer();
        gobelet.afficher_score();
        this._score += gobelet.valeur;
    }

    /**
     * Affiche le nombre de points du joueur
     */
    afficher_score() {
        console.log(`${this._nom} a un total de ${this._score} points`);
    }
}