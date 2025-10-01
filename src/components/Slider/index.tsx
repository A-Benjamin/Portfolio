import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './index.module.css';
import test from '../../img/test.jpg';

interface Card {
    title: string;
    date: string;
    img: string;
}

interface SliderProps {
    liste_card: Card[];
}

export default function Slider(props: SliderProps) {
    return (
        <div className={styles.sliderContainer}>
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={false}
                showStatus={false}
                emulateTouch={true}
            >
                {props.liste_card.map((e) =>
                    <div className={styles.slide} key={e.title}>
                        <div className={styles.title}>
                            <h2>{e.title}</h2>
                            <p>{e.date}</p>
                        </div>
                        <div className={styles.test}>
                            <img src={e.img}></img>
                        </div>
                    </div>
                )}
            </Carousel>
        </div>
    );
}