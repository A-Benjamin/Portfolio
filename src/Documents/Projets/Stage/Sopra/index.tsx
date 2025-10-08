import styles from '../../index.module.css';
import BandImg from '../../../../Components/BandImg';
import InfoBlock from '../../../../Components/InfoBlock';
import {gitlab, figma, teams, storyB} from '../../../../img/outils';
import {ts, react, py, django} from '../../../../img/langages';

export function Sopra() {

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
                                Ce projet de stage avait pour objectif de concevoir une <strong>nouvelle version d’un outil interne</strong> permettant le <strong>suivi de production</strong> des différents domaines d’activité du client.
                                Pour cela, plusieurs missions concrètes m’ont été confiées :
                            </p>
                            <ul>
                                <li>🔍 La <strong>compréhension de l’environnement</strong> technique et fonctionnel du projet</li>
                                <li>🧩 La création de <strong>composants front-end</strong> réutilisables et modulaires</li>
                                <li>🖼️ La mise en place de <strong>plusieurs pages</strong> de l’application</li>
                                <li>⚙️ La <strong>modification du back-end</strong> pour répondre aux nouveaux besoins</li>
                                <li>📢 Une <strong>communication régulière</strong> avec l’équipe et le client pour assurer un bon suivi</li>
                            </ul>
                            <p>
                                Ce projet m’a permis de renforcer mes compétences en <strong>développement full-stack</strong>, tout en évoluant dans un contexte professionnel et collaboratif stimulant.
                            </p>    
                        </>
                        }
                    />
                    <div className={styles.bandImg}>
                        <BandImg title='Le contexte' liste_img={["equipe de 3", "6 mois"]} image={false} />
                        <BandImg title='Les langages utilisés' liste_img={[ts, react, py, django]} image={true} />
                        <BandImg title='Les outils utilisés' liste_img={[gitlab, figma, teams, storyB]} image={true} />
                    </div>
                </div>
            </div>

            <div className={styles.Realisation}>
                <h2>Les réalisations</h2>
                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="La compréhension du projet"
                        texte={<>
                            <p>Pour bien démarrer, j’ai consacré du temps à comprendre l’environnement du projet :</p>
                            <ul>
                                <li>📄 Présentation de l’outil par un collègue</li>
                                <li>🔁 Découverte de l’ancienne version de l’outil</li>
                                <li>🎨 Étude de la maquette de la nouvelle version</li>
                                <li>🛠️ Présentation des outils de développement utilisés</li>
                                <li>🤝 Rencontre avec le client pour mieux cerner les besoins</li>
                            </ul>
                        </>
                        }
                    />
                    <InfoBlock
                        cliquable={false}
                        btn_title="Mise en place de certains composants"
                        texte={<>
                            <p>J’ai développé plusieurs composants réutilisables pour le front-end :</p>
                            <ul>
                                <li>🔧 Utilisation de la bibliothèque <strong>MUI</strong></li>
                                <li>📑 Création d’un <strong>composant Select</strong> générique</li>
                                <li>🧭 Développement de la <strong>NavBar</strong> et du <strong>Menu de navigation</strong></li>
                                <li>🧱 Mise en place d’autres composants spécifiques au projet</li>
                            </ul>
                        </>
                        }
                    />
                </div>

                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="Mise en place de certaines pages"
                        texte={<>
                            <p>J’ai également conçu et intégré plusieurs pages de l’application :</p>
                            <ul>
                                <li>⚙️ Intégration des composants précédemment créés</li>
                                <li>🎯 Respect strict des maquettes fournies (Figma)</li>
                                <li>🎨 Mise en page avec CSS</li>
                                <li>🔗 Intégration des appels API</li>
                            </ul>
                        </>
                        }
                    />

                    <InfoBlock
                        cliquable={false}
                        btn_title="Travail sur le back-end"
                        texte={<>
                            <p>Une partie du projet m’a permis de découvrir et d’intervenir sur le back-end avec Django :</p>
                            <ul>
                                <li>📘 Apprentissage rapide de <strong>Django</strong></li>
                                <li>🧱 Création et modification des <strong>modèles</strong></li>
                                <li>🧬 Mise en place des <strong>serializers</strong></li>
                                <li>📡 Création de <strong>vues</strong> pour les appels API</li>
                                <li>🧠 Ajout de méthodes spécifiques pour traiter des données complexes</li>
                            </ul>
                        </>
                        }
                    />
                </div>

                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="Communication avec le client"
                        texte={<>
                            <p>Tout au long du projet, nous avons assuré une communication régulière avec le client :</p>
                            <ul>
                                <li>📆 Réunions hebdomadaires</li>
                                <li>📣 Présentation des avancements</li>
                                <li>🧱 Analyse des blocages et recherche de solutions</li>
                                <li>🔄 Ajustements en fonction des retours du client</li>
                            </ul>
                        </>
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default Sopra;