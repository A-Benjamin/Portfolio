import styles from '../../index.module.css';
import BandImg from '../../../../Components/BandImg';
import InfoBlock from '../../../../Components/InfoBlock';
import {docs,myAdmin,next} from '../../../../img/outils';
import {php} from '../../../../img/langages';

export function IAE() {

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
                                Ce projet de stage avait pour objectif de concevoir une <strong>application de gestion d’inscriptions</strong> 📋,
                                destinée initialement aux <strong>Journées Portes Ouvertes</strong> de l’établissement, mais pensée pour pouvoir être réutilisée
                                pour d'autres événements organisés par le service communication.
                            </p>
                            <p>
                                Pour cela, plusieurs objectifs ont été définis dès le début du stage :
                            </p>
                            <ul>
                                <li>🧠 Comprendre les <strong>besoins spécifiques</strong> du service communication</li>
                                <li>📄 Élaborer un <strong>cahier des charges</strong> complet</li>
                                <li>🗃️ Concevoir et implémenter les <strong>bases de données</strong></li>
                                <li>💻 Développer l’<strong>application web</strong> avec un frontend adapté</li>
                            </ul>
                            <p>
                                Le projet a été réalisé en <strong>binôme</strong>, avec des échanges réguliers avec le service concerné pour assurer une adéquation fonctionnelle optimale.
                            </p>
                        </>
                        }
                    />
                    <div className={styles.bandImg}>
                        <BandImg title='Le contexte' liste_img={["équipe de 3", "4 mois"]} image={false} />
                        <BandImg title='Les langages utilisés' liste_img={[php]} image={true} />
                        <BandImg title='Les outils utilisés' liste_img={[docs, myAdmin, next]} image={true} />
                    </div>
                </div>
            </div>

            <div className={styles.Realisation}>
                <h2>Les réalistions</h2>
                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="Réunions avec le service communication"
                        texte={<>
                            <p>
                                Des réunions régulières ont été organisées avec le service communication pour guider la réalisation du projet :
                            </p>
                            <ul className={styles.objectifList}>
                                <li>🔍 Compréhension précise des objectifs et attentes</li>
                                <li>📋 Recueil des besoins fonctionnels</li>
                                <li>🧪 Présentation de l’avancement</li>
                                <li>🔄 Adaptation continue selon les retours</li>
                            </ul>
                        </>
                        }
                    />
                    <InfoBlock
                        cliquable={false}
                        btn_title="Mise en place du cahier des charges"
                        texte={<>
                            <p>
                                Un <strong>cahier des charges</strong> détaillé a été rédigé pour cadrer le projet :
                            </p>
                            <ul className={styles.objectifList}>
                                <li>📝 Présentation du projet et de ses enjeux</li>
                                <li>📌 Définition claire des besoins utilisateurs</li>
                                <li>⏱️ Estimation du temps de développement pour chaque fonctionnalité</li>
                                <li>✅ Suivi des validations et ajustements en fonction des retours</li>
                            </ul>
                        </>
                        }
                    />
                </div>

                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="Mise en place des bases de données"
                        texte={<>
                            <p>
                                Une base de données relationnelle a été conçue pour gérer efficacement les données des événements :
                            </p>
                            <ul className={styles.objectifList}>
                                <li>📐 Réalisation de plusieurs <strong>schémas UML</strong> pour modéliser les entités et leurs relations</li>
                                <li>✅ Validation des modèles en réunion</li>
                                <li>🛠️ Implémentation finale dans <strong>phpMyAdmin</strong></li>
                            </ul>
                        </>
                        }
                    />

                    <InfoBlock
                        cliquable={false}
                        btn_title="Le frontend"
                        texte={<>
                            <p>
                                Le frontend de l'application a été développé pour répondre aux besoins des différents utilisateurs :
                            </p>
                            <ul className={styles.objectifList}>
                                <li>📄 Création des différentes <strong>pages du site</strong> (accueil, inscription, liste des participants...)</li>
                                <li>🔐 Mise en place de <strong>rôles</strong> avec gestion des droits d'accès</li>
                                <li>🔗 Connexion du frontend aux <strong>bases de données</strong> pour affichage et enregistrement des données</li>
                            </ul>
                        </>
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default IAE;