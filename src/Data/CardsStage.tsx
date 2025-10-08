import Projet from "../Type/Projet";
import {IAE, sopra} from '../img/stages'
import {IAE_page, Sopra} from '../Documents/Projets/Stage';


export const CardsStage: Projet[] = [{
    title: "Stage développeur web",
    date: "Avr. 2023  Juil. 2023",
    img: IAE,
    page: IAE_page(),
}, {
    title: "Stage développeur web",
    date: "Avr. 2025  Sept. 2025",
    img: sopra,
    page: Sopra(),
}
];

export default CardsStage;
