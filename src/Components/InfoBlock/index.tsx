import { ReactNode, useState } from 'react';
import styles from './index.module.css';

interface InfoBlockProps {
    btn_title: string;
    img_src?: string;
    texte: ReactNode;
    cliquable?: boolean;
}

export default function InfoBlock(props: InfoBlockProps) {

    const [open, SetOpen] = useState(props.cliquable === false ? true : false);

    return (
        <div className={styles.infoBlock}>
            <button className={open ? styles.infoBtn : styles.infoBtnClose} onClick={() =>  props.cliquable === false ? "" : SetOpen(!open)}>{props.btn_title}</button>
            {open && (
                <div className={styles.infoContenu}>
                    {props.img_src && (
                        <img className={styles.infoImg} src={props.img_src}></img>
                    )}
                    <div className={styles.infoTexte}>{props.texte}</div>
                </div>
            )}

        </div>
    );
}