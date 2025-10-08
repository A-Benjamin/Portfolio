import InfoBlock from '../InfoBlock';
import styles from './index.module.css';
import { TimeLineData } from '../../Data/TimeLineData';

export default function Timeline() {

    return (
        <div className={styles.timelinecontainer}>
            {TimeLineData.map((event, index) => (
                <div key={index} className={styles.timelineblock}>
                    <div className={styles.blockcontent}>
                        <div className={styles.blockdate}>{event.date}</div>
                        <h3 className={styles.blocktitle}>{event.title}</h3>
                        <InfoBlock btn_title={'Plus de détailles :'} texte={event.page} />
                    </div>

                    {index !== TimeLineData.length - 1 && (
                        <div className={styles.flechecontainer}>
                            <div className={styles.fleche}></div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}