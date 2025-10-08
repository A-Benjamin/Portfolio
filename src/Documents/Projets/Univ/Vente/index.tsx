import BandImg from '../../../../Components/BandImg';
import styles from '../../index.module.css';
import {excel} from '../../../../img/outils';
import InfoBlock from '../../../../Components/InfoBlock';

export function Vente() {

    return (
        <>
            <div className={styles.introduction}>
                <h2>Mise en place du projet</h2>
                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="L'objectif du projet"
                        texte={<>
                            <p>
                                Ce projet consistait à développer un <strong>jeu de simulation économique</strong>, dans lequel les joueurs devait
                                <strong> gérer une entreprise de jouets</strong> face à ses concurrents, sur une période de <strong>8 ans</strong>.
                                L’objectif était de prendre des décisions stratégiques pour assurer la croissance de l’entreprise.
                            </p>
                            <p>Nous avons dû gérer plusieurs aspects clés :</p>
                            <ul>
                                <li>📊 L’<strong>analyse du marché</strong>, pour adapter les décisions à la demande</li>
                                <li>🕵️‍♂️ L’<strong>analyse des concurrents</strong>, pour anticiper leurs mouvements</li>
                                <li>🏭 L’<strong>achat d’usines</strong> dans différents pays, selon les opportunités</li>
                                <li>⚙️ Le <strong>choix du nombre d’unités à produire</strong>, en fonction de la stratégie</li>
                                <li>💰 L’<strong>analyse des finances</strong>, avec intégration de <strong>prédictions économiques</strong></li>
                            </ul>
                            <p>
                                Ce projet nous a permis de combiner <strong>analyse de données</strong>, <strong>prise de décision stratégique</strong>,
                                et <strong>gestion multi-variables dans le temps</strong>.
                            </p>
                        </>
                        }
                    />
                    <div className={styles.bandImg}>
                        <BandImg title='Le contexte' liste_img={["groupe de 3", "3h / semaine", "8 semaines"]} image={false} />
                        <BandImg title='Les outils utilisés' liste_img={[excel]} image={true} />
                    </div>
                </div>
            </div>

            <div className={styles.Realisation}>
                <h2>Les réalistions</h2>
                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="Analyse du marché"
                        texte={<>
                            <p>
                                Chaque année, nous devions analyser le marché afin d’orienter nos décisions stratégiques :
                            </p>
                            <ul className={styles.objectifList}>
                                <li>📄 Analyse basée sur des documents et les tendances du secteur</li>
                                <li>📊 Analyse comparative avec l’année précédente à partir de nos résultats et de ceux des concurrents</li>
                            </ul>
                        </>
                        }
                    />
                    <InfoBlock
                        cliquable={false}
                        btn_title="Choix à éffectuer chaque année"
                        texte={<>
                            <p>
                                Chaque année, nous devions prendre des décisions stratégiques pour développer l’entreprise :
                            </p>
                            <ul className={styles.objectifList}>
                                <li>⚙️ <strong>Choix du nombre d’unités à produire</strong></li>
                                <li>🏭 <strong>Création d’usines</strong> selon les opportunités du marché</li>
                                <li>🔬 <strong>Investissement en recherche et développement</strong></li>
                            </ul>
                        </>
                        }
                    />
                </div>

                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="Les différents calcule"
                        texte={<>
                            <p>
                                Nous avons réalisé différents calculs pour évaluer la viabilité de nos décisions :
                            </p>
                            <ul className={styles.objectifList}>
                                <li>💸 <strong>Calcul du coût total</strong> en fonction des choix (production, usines, R&D)</li>
                                <li>📈 <strong>Calcul du chiffre d’affaires (CA)</strong> en fonction de la production et du nombre de ventes prévues</li>
                            </ul>
                        </>
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default Vente;