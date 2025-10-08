import styles from '../../index.module.css';
import BandImg from '../../../../Components/BandImg';
import InfoBlock from '../../../../Components/InfoBlock';
import {github, jira, docker, sonar, discord} from '../../../../img/outils';
import {java, js, react, spring} from '../../../../img/langages';

export function Assurance() {

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
                                Ce projet avait pour objectif de développer un <strong>site web pour une assurance</strong> en partant de zéro 🏗️.
                                Nous étions en charge de l’ensemble du processus de développement, de la <strong>compréhension des besoins</strong> jusqu’à la <strong>réalisation technique</strong> du site.
                            </p>
                            <p>
                                Pour cela, plusieurs objectifs ont été fixés tout au long du projet :
                            </p>
                            <ul>
                                <li>🧠 Comprendre les <strong>besoins du client</strong> et des futurs utilisateurs à partir de textes, exemples et échanges directs.</li>
                                <li>📝 Rédiger les <strong>user stories</strong> et mettre en place une <strong>backlog complète</strong> dans Jira.</li>
                                <li>👥 Organiser efficacement le <strong>travail d’équipe</strong> à 5 personnes.</li>
                                <li>💻 Concevoir et développer le <strong>site web</strong> avec ses différents services et interfaces.</li>
                                <li>📆 Présenter <strong>régulièrement l'avancement</strong> du projet au client (une fois par mois).</li>
                            </ul>
                            <p>
                                Ce projet nous a permis de travailler dans un <strong>cadre agile</strong> proche d’un environnement professionnel, avec une forte dimension organisationnelle et technique.
                            </p>
                        </>
                        }
                    />
                    <div className={styles.bandImg}>
                        <BandImg title='Le contexte' liste_img={["groupe de 5", "+ 4h / semaine", "2 semestres"]} image={false} />
                        <BandImg title='Les langages & frameworks utilisés' liste_img={[java, spring, js, react]} image={true} />
                        <BandImg title='Les outils utilisés' liste_img={[github, docker, sonar, discord, jira]} image={true} />
                    </div>
                </div>
            </div>

            <div className={styles.Realisation}>
                <h2>Les réalistions</h2>

                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="Création des users stories"
                        texte={<>
                            <p>
                                Pour bien démarrer le projet, nous avons établi les <strong>user stories</strong> qui ont permis de structurer la conception du site :
                            </p>
                            <ul>
                                <li>📞 Discussions avec le client pour comprendre les attentes</li>
                                <li>👤 Identification des besoins utilisateurs</li>
                                <li>🧠 Mise en commun des idées de chaque membre de l’équipe</li>
                                <li>✍️ Rédaction des user stories claires et détaillées</li>
                                <li>📋 Création de la <strong>backlog</strong> dans Jira avec tous les tickets</li>
                            </ul>
                        </>
                        }
                    />
                    <InfoBlock
                        cliquable={false}
                        btn_title="Choix des langages & de l'architecture"
                        texte={<>
                            <p>
                                Un choix d’architecture et de technologies a été fait pour répondre au mieux aux besoins du projet :
                            </p>
                            <ul>
                                <li>🧩 Architecture en <strong>microservices</strong></li>
                                <li>📦 Chaque microservice suit le modèle <strong>MVC</strong></li>
                                <li>🎨 Le frontend est développé en <strong>React</strong> (JavaScript)</li>
                                <li>🔧 Les microservices sont développés en <strong>Java avec Spring Boot</strong></li>
                            </ul>
                        </>
                        }
                    />
                </div>

                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="Les différents microservices"
                        texte={<>
                            <p>Nous avons développé plusieurs microservices spécialisés :</p>
                            <ul>
                                <li>👥 Gestion des utilisateurs et des rôles</li>
                                <li>🚗 Gestion des sinistres</li>
                                <li>💳 Gestion des paiements</li>
                                <li>✉️ Gestion de la messagerie</li>
                                <li>🌱 Calcul des <strong>émissions de CO2</strong></li>
                            </ul>
                        </>
                        }
                    />

                    <InfoBlock
                        cliquable={false}
                        btn_title="Présentation aux clients"
                        texte={<>
                            <p>Des réunions mensuelles ont été organisées pour présenter l’état d’avancement :</p>
                            <ul>
                                <li>🎨 Présentation de l’<strong>interface utilisateur</strong></li>
                                <li>📈 Présentation de la <strong>couverture de tests</strong></li>
                                <li>📅 Planification des <strong>prochaines étapes</strong></li>
                                <li>💬 Échange avec le client sur la <strong>satisfaction</strong> et les améliorations à venir</li>
                            </ul>
                        </>
                        }
                    />

                </div>

                <div className={styles.BlockContent}>

                    <InfoBlock
                        cliquable={false}
                        btn_title="Le frontend"
                        texte={<>
                            <p>
                                Le frontend du site regroupe plusieurs pages et fonctionnalités selon le rôle de l’utilisateur :
                            </p>
                            <ul>
                                <li>🏠 <strong>Accueil</strong> : Présentation générale de l’assurance (accessible sans compte)</li>
                                <li>📝 <strong>Inscription</strong> : Création de compte</li>
                                <li>🔐 <strong>Connexion</strong> : Accès sécurisé au compte</li>
                                <li>🌍 <strong>Émission de CO2</strong> : Calcul des émissions selon le transport utilisé</li>
                                <li>📄 <strong>Contrats</strong> : Souscription à un contrat (véhicule ou voyage)</li>
                                <li>👨‍💼 <strong>Gestion des utilisateurs</strong> : Réservée aux administrateurs</li>
                                <li>📁 <strong>Gestion des clients</strong> : Pour les conseillers</li>
                                <li>🆘 <strong>Demandes d’assistance</strong> : Suivi par les conseillers</li>
                                <li>📃 <strong>Contrats clients</strong> : Gérés par les conseillers</li>
                                <li>📂 <strong>Mes dossiers</strong> : Pour les médecins, partenaires et conseillers</li>
                                <li>👤 <strong>Mes informations</strong> : Consultation et modification</li>
                                <li>📜 <strong>Mes contrats</strong> : Visualisation des contrats souscrits</li>
                                <li>🚧 <strong>Mes sinistres</strong> : Suivi des sinistres</li>
                                <li>💬 <strong>Messagerie</strong> : Communication entre client, médecin et conseiller</li>
                            </ul>
                        </>
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default Assurance;