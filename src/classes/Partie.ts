import { Gobelet } from "./gobelet";
import { Joueur } from "./joueur";

export class Partie {
    private _joueurs: Joueur[];
    private _nb_tours: number;
    private gobelet: Gobelet;

    constructor(nb_tours: number, nb_des: number) {
        this._nb_tours = nb_tours;
        this.gobelet = new Gobelet(nb_des);
        this._joueurs = [];
    }

    initialiser() {
        let j1 = new Joueur('Florian');
        this._joueurs.push(j1);

        let j2 = new Joueur('Melissa');
        this._joueurs.push(j2);

        this.afficherJoueurs();
    }

    afficherJoueurs() {
        console.log('Les joueurs présents sont :');
        this._joueurs.forEach(joueur => {
            console.log(joueur.nom);
        });
    }

    lancer() {
        console.log('Que la partie commence !');

        //Nombre de tous
        for (let i = 1; i <= this._nb_tours; i++) {
            console.log(`Tour numero : ${i}`);
            //Pour chaque joueurs
            this._joueurs.forEach(joueur => {
                joueur.jouer(this.gobelet);
                joueur.afficher_score();
            });
        }
    }

    afficher_gagnant() {
        let scoreGagnant = 0;
        let nomGagnant = '';

        this._joueurs.forEach(joueur => {
            if (joueur.score > scoreGagnant) {
                scoreGagnant = joueur.score;
                nomGagnant = joueur.nom;
            }
        });

        console.log(`Le grand gagant est ${nomGagnant}, avec ${scoreGagnant} points.`);
    }
}