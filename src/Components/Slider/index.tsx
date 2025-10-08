import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './index.module.css';
import ProjetModal from "../ProjetModal";
import { useState } from "react";
import Projet from "../../Type/Projet";

import carsUniv from '../../Data/CardsUniv';
import carsStage from '../../Data/CardsStage';

interface SliderProps {
    type: "univ" | "stage",
}

export default function Slider(props: SliderProps) {
    
    const [allCards, setAllCards] = useState<Projet[]>(props.type === "univ" ? carsUniv : carsStage);

    const [open, setOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState<Projet | null>(null);

    const handleOpen = (card: Projet) => {
        setSelectedCard(card);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedCard(null);
    };

    const [currendCard, setCurrendCard] = useState<Projet | undefined>(undefined); 

    return (
        <div className={styles.sliderContainer}>
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={false}
                showStatus={false}
                emulateTouch={true}
                swipeable={false}
            >
                {allCards.map((e) =>
                    <div
                        className={styles.slide}
                        key={e.title}
                        onClick={() => {
                            setCurrendCard(e);
                            handleOpen(e);
                        }}
                    >
                        <div className={styles.title}>
                            <h2>{e.title}</h2>
                            <p>{e.date}</p>
                        </div>
                        <div className={styles.test}>
                            <img src={e.img} />
                        </div>
                    </div>
                )}
            </Carousel>

            <ProjetModal open={open} onClose={handleClose} projet={currendCard ?? undefined} />
          
        </div>
    );
}
