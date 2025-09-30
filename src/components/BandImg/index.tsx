import styles from './index.module.css';

interface BandImgProps {
    title: string;
    liste_img: string[];
}

export default function BandImg(props: BandImgProps) {

    return (
        <div className={styles.band}>
            <h4>{props.title}</h4>
            <div className={styles.images}>
                {props.liste_img.map((e) => (
                    <div className={styles.card}>
                        <img src={e}></img>
                    </div>
                ))}
            </div>
        </div>
    );
}
