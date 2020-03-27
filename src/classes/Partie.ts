import { Gobelet } from "./Gobelet";
import { Joueur } from "./Joueur";

export class Partie {
    private _joueurs: Joueur[];
    private _nb_tours: number;
    private _gobelet: Gobelet;

    constructor(nb_tours: number, nb_des: number) {
        this._nb_tours = nb_tours;
        this._gobelet = new Gobelet(nb_des);
        this._joueurs = [];
    }

    /**
     * Création des participants
     */
    initialiser() {
        let participants :string[] = ['Nicole', 'Manu', 'Michel'];

        participants.forEach(participant => {
            let joueur = new Joueur(participant);
            this._joueurs.push(joueur)
        });

        this.afficherJoueurs();
    }

    /**
     * Affiche les joueurs participant à la partie
     */
    afficherJoueurs() {
        console.log('Les joueurs présents sont :');
        this._joueurs.forEach(joueur => {
            console.log(joueur.nom);
        });
    }

    /**
     * Lance la partie
     */
    lancer() {
        console.log(`\nQue la partie commence / En ${this._nb_tours} tours avec ${this._gobelet.des} dés !`);

        //Nombre de tours
        for (let i = 1; i <= this._nb_tours; i++) {
            console.log(`\nTour numero : ${i}`);
            //Pour chaque joueurs
            this._joueurs.forEach(joueur => {
                console.log(`\n${joueur.nom} lance le gobelet.`);
                joueur.jouer(this._gobelet);
                console.log(`${joueur.nom} ${this._gobelet.afficher_score()}`);
                joueur.afficher_score();
            });
        }
    }

    /**
     * Affiche le nom et le score du gagant
     */
    afficher_gagnant() {
        let scoreGagnant = 0;
        let nomGagnant = '';

        this._joueurs.forEach(joueur => {
            if (joueur.score > scoreGagnant) {
                scoreGagnant = joueur.score;
                nomGagnant = joueur.nom;
            }
        });

        console.log(`\nLe grand gagant est ${nomGagnant}, avec ${scoreGagnant} points.`);
    }
}