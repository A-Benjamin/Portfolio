import BandImg from '../../../../Components/BandImg';
import styles from '../../index.module.css';
import {java, junit} from '../../../../img/langages';
import {gitlab, discord} from '../../../../img/outils';
import InfoBlock from '../../../../Components/InfoBlock';

export function Competition() {

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
                                Ce projet avait pour objectif de développer une <strong>simulation de compétition</strong> entièrement jouable dans le <strong>shell Linux</strong> 🐧.
                                Pour cela, plusieurs fonctionnalités clés ont été mises en place :
                            </p>
                            <ul>
                                <li>👥 La sélection du <strong>nombre de participants</strong>, permettant de personnaliser la compétition.</li>
                                <li>⚔️ La gestion précise des <strong>victoires et défaites</strong> pour suivre l’évolution des joueurs.</li>
                                <li>📊 Un affichage clair et synthétique des <strong>résultats</strong> à la fin de la compétition.</li>
                            </ul>
                            <p>
                                Ce projet m’a permis d’approfondir mes compétences en gestion d’état, logique de compétition et affichage dynamique dans un environnement terminal.
                            </p>
                        </>
                        }
                    />
                    <div className={styles.bandImg}>
                        <BandImg title='Le contexte' liste_img={["groupe de 2 ", "1h30 / semaine", "3 mois"]} image={false} />
                        <BandImg title='Les langages utilisés' liste_img={[java, junit]} image={true} />
                        <BandImg title='Les outils utilisés' liste_img={[gitlab, discord]} image={true} />
                    </div>
                </div>
            </div>

            <div className={styles.Realisation}>
                <h2>Les réalistions</h2>
                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="Modélisation des participants"
                        texte={<>
                            <p>Les participants sont définis par plusieurs caractéristiques essentielles :</p>
                            <ul>
                                <li>🏷️ Un <strong>nom</strong></li>
                                <li>🏆 Le <strong>nombre de victoires</strong></li>
                                <li>⭐ Le <strong>nombre de points</strong></li>
                            </ul>
                        </>
                        }
                    />
                    <InfoBlock
                        cliquable={false}
                        btn_title="Modélisation des matchs"
                        texte={<>
                            <p>Chaque match est caractérisé par :</p>
                            <ul>
                                <li>👤 Le participant 1</li>
                                <li>👤 Le participant 2</li>
                                <li>🎯 Le score du participant 1</li>
                                <li>🎯 Le score du participant 2</li>
                                <li>🏅 Le vainqueur</li>
                            </ul>
                        </>
                        }
                    />
                </div>

                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="Les intéractions"
                        texte={<>
                            <p>Nous avons mis en place plusieurs interactions avec le terminal Linux pour gérer la compétition :</p>
                            <ul>
                                <li>🎮 Sélection du <strong>nombre de joueurs</strong></li>
                                <li>📝 Attribution des <strong>noms aux joueurs</strong> (manuellement ou de façon aléatoire)</li>
                                <li>📊 Affichage des <strong>résultats</strong></li>
                            </ul>
                        </>
                        }
                    />

                    <InfoBlock
                        cliquable={false}
                        btn_title="Les intéractions"
                        texte={<>
                            <p>Nous avons mis en place plusieurs affichages dans le terminal Linux :</p>
                            <ul>
                                <li>📋 Résultats de chaque match (score participant 1 – score participant 2)</li>
                                <li>🏁 Affichage du parcours complet de la compétition</li>
                                <li>🥇 Affichage du classement final des participants</li>
                            </ul>
                        </>
                        }
                    />
                </div>

                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="Les tests unitaires"
                        texte={<>
                            <p>Nous avons mis en place différents tests unitaires pour garantir la robustesse du projet :</p>
                            <ul>
                                <li>🔍 Vérification des méthodes des objets <strong>Participant</strong></li>
                                <li>🧩 Validation de la génération des <strong>participants</strong></li>
                                <li>⚔️ Test de la simulation des <strong>matchs</strong></li>
                                <li>🖥️ Contrôle des différents <strong>affichages</strong></li>
                            </ul>
                        </>
                        }
                    />
                </div>

            </div>
        </>
    )
}

export default Competition;