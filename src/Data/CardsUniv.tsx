import Projet from "../Type/Projet";
import {laby, compet, jouet, bombe, assurance} from '../img/projets';
import {Labyrinthe, Competition, Vente, Bomber, Assurance} from '../Documents/Projets/Univ';

export const cardsUniv: Projet[] = [{
    title: "Jeu de labyrinthe",
    date: "Jan. 2022  Mai. 2022",
    img: laby,
    page: Labyrinthe(),
}, {
    title: "Compétition en java",
    date: "Sept. 2022  Déc. 2022",
    img: compet,
    page: Competition(),
}, {
    title: "Entreprise de vente de jouets",
    date: "Sept. 2023  Dec. 2023",
    img: jouet,
    page: Vente(),
}, {
    title: "Bomberman",
    date: "Nov. 2023  Janv. 2024",
    img: bombe,
    page: Bomber(),
}, {
    title: "Application d'assurance",
    date: "Sept. 2024  Mars. 2025",
    img: assurance,
    page: Assurance(),
}
];

export default cardsUniv;