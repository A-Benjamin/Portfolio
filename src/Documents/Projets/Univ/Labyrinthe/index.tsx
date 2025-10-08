import BandImg from '../../../../Components/BandImg';
import styles from '../../index.module.css';
import {java, junit} from '../../../../img/langages';
import {gitlab, discord} from '../../../../img/outils';
import InfoBlock from '../../../../Components/InfoBlock';

export function Labyrinthe() {

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
                                Le projet avait pour objectif de développer un <strong>jeu de labyrinthe</strong>, jouable directement dans le <strong>shell Linux</strong> 🐧.
                                Pour cela, plusieurs étapes clés ont été réalisées :
                            </p>
                            <ul>
                                <li>👤 Création d’un <strong>objet Utilisateur</strong> pour gérer les informations du joueur.</li>
                                <li>🧱 Mise en place des <strong>objets représentant les différentes cases</strong> du plateau.</li>
                                <li>🛠️ Développement de <strong>deux générateurs de labyrinthes</strong> aléatoires.</li>
                                <li>⚡ Intégration d’<strong>objets bonus et malus</strong> pour enrichir le gameplay.</li>
                                <li>💻 Gestion des <strong>interactions avec le terminal Linux</strong> (affichage ASCII, mouvements clavier, etc.).</li>
                            </ul>
                            <p>
                                Ce projet m’a permis de renforcer mes compétences en programmation orientée objet, en logique de jeu, ainsi qu’en interaction terminale sur un système Unix.
                            </p>
                        </>
                        }
                    />
                    <div className={styles.bandImg}>
                        <BandImg title='Le contexte' liste_img={["groupe de 4", "2h / semaine", "12 semaines"]} image={false} />
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
                        btn_title="Générateur de labyrinthe"
                        texte={<>
                            <p>Nous avons développé <strong>deux générateurs de labyrinthes parfaits</strong> :</p>
                            <ul>
                                <li>Un algorithme de <strong>parcours en profondeur</strong> (Depth-First Search)</li>
                                <li>L’<strong>algorithme de Prim</strong></li>
                            </ul>
                            <p>
                                Ces méthodes garantissent la création de labyrinthes sans cycles, assurant un seul chemin entre deux points.
                            </p>
                        </>
                        }
                    />
                    <InfoBlock
                        cliquable={false}
                        btn_title="Le joueur"
                        texte={<>
                            <p>Le joueur est défini par plusieurs caractéristiques essentielles :</p>
                            <ul>
                                <li>🆔 Son <strong>pseudo</strong></li>
                                <li>🎒 Sa <strong>liste d’objets</strong></li>
                                <li>📍 Sa <strong>position</strong> dans le labyrinthe</li>
                            </ul>
                        </>
                        }
                    />
                </div>

                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="Les cases"
                        texte={<>
                            <p>Nous avons implémenté différents types de cases pour le plateau :</p>
                            <ul>
                                <li>◻️ Case basique</li>
                                <li>🚩 Case de départ</li>
                                <li>🏁 Case d’arrivée</li>
                                <li>⚠️ Cases pièges</li>
                            </ul>
                        </>
                        }
                    />
                    <InfoBlock
                        cliquable={false}
                        btn_title="Les bonnus"
                        texte={<>
                            <p>Nous avons mis en place différents objets bonus pour aider le joueur :</p>
                            <ul>
                                <li>⏩ Saut de case</li>
                                <li>🛡️ Protection contre les cases pièges</li>
                            </ul>
                        </>
                        }
                    />
                </div>

                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="Les malus"
                        texte={<>
                            <p>Nous avons mis en place différents malus présents sur certaines cases du plateau :</p>
                            <ul>
                                <li>⏮️ Recul d'une case</li>
                                <li>❌ Partie perdue</li>
                                <li>🔙 Retour à la case de départ</li>
                                <li>🎲 Téléportation aléatoire sur le plateau</li>
                            </ul>
                        </>
                        }
                    />
                    <InfoBlock
                        cliquable={false}
                        btn_title="Les intéractions"
                        texte={<>
                            <p>Nous avons mis en place plusieurs interactions avec le terminal Linux pour rendre le jeu jouable :</p>
                            <ul>
                                <li>🎲 Sélection du type de générateur de labyrinthe</li>
                                <li>🆔 Saisie du pseudo du joueur</li>
                                <li>⬅️➡️ Déplacements sur le plateau</li>
                                <li>🎁 Utilisation d’objets</li>
                                <li>🔄 Affichage du nombre de tours effectués</li>
                            </ul>
                        </>
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default Labyrinthe;