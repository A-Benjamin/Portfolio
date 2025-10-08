import TimeLine from "../Type/TimeLine";
import {Bac, Sesi, Licence, Master} from '../Documents/Texte/TimeLine';

export const TimeLineData: TimeLine[] = [
    {
        date: "Sept. 2017 - Juin 2020",
        title: "Baccalauréat Scientifique",
        page: Bac(),
    },
    {
        date: "Sept. 2020 - Juin 2021",
        title: "Licence 1 Sciences Exactes et Sciences de l'Ingénieur",
        page: Sesi(),
    },
    {
        date: "Sept. 2021 - Août 2023",
        title: "Licence informatique",
        page: Licence(),
    },
    {
        date: "Sept. 2023 - Sept. 2025",
        title: "Master MIAGE (Méthodes informatiques appliquées à la gestion des entreprises)",
        page: Master(),
    },
];