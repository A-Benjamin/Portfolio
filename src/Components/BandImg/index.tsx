import styles from './index.module.css';

interface BandImgProps {
    title: string;
    image: boolean;
    liste_img: string[];
}

export default function BandImg(props: BandImgProps) {

    return (
        <div className={styles.band}>
            <h4>{props.title}</h4>
            <div className={styles.images}>
                {props.liste_img.map((e) => (
                    <div className={props.image === true ? styles.imageCard : styles.texteCard}>
                        {props.image === true ? (
                            <img src={e}></img>
                        )
                            :
                            (
                                <p>{e}</p>
                            )
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}
