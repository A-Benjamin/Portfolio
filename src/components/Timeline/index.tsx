import styles from './index.module.css';

export default function Timeline() {

    const events = [
        {
            id: 1,
            date: "Sept. 2023 - Sept. 2025",
            title: "Master MIAGE (Méthodes informatiques appliquées à la gestion des entreprises)",
            description: "Ajouter description"
        },
        {
            id: 2,
            date: "Sept. 2021 - Août 2023",
            title: "Licence informatique",
            description: "Ajouter description"
        },
        {
            id: 3,
            date: "Sept. 2020 - Juin 2021",
            title: "Licence 1 Sciences Exactes et Sciences de l'Ingénieur",
            description: "Ajouter description"
        },
        {
            id: 4,
            date: "Sept. 2017 - Juin 2020",
            title: "Baccalauréat Scientifique",
            description: "Ajouter description"
        }
    ];

    return (
        <div className={styles.timelinefleches}>
            <h2>Mon parcours scolaire</h2>
            <div className={styles.timelinecontainer}>
                {events.map((event, index) => (
                    <div key={event.id} className={styles.timelineblock}>
                        <div className={styles.blockcontent}>
                            <div className={styles.blockdate}>{event.date}</div>
                            <h3 className={styles.blocktitle}>{event.title}</h3>
                            <p className={styles.blockdescription}>{event.description}</p>
                        </div>

                        {index !== events.length - 1 && (
                            <div className={styles.flechecontainer}>
                                <div className={styles.fleche}></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}