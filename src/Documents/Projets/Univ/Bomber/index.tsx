import BandImg from '../../../../Components/BandImg';
import styles from '../../index.module.css';
import {github, discord} from '../../../../img/outils';
import {pharo} from '../../../../img/langages';
import InfoBlock from '../../../../Components/InfoBlock';

export function Bomber() {

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
                                Ce projet avait pour objectif de concevoir un <strong>jeu vidéo</strong> simple en utilisant un langage que nous ne connaissions pas : <strong>Pharo</strong> 🧠.
                                Nous avions une grande liberté sur le type de jeu à réaliser, tant que nous respections les contraintes de l’environnement.
                            </p>
                            <p>
                                Pour cela, plusieurs étapes clés ont été nécessaires :
                            </p>
                            <ul>
                                <li>📘 L’<strong>apprentissage</strong> du langage Pharo et de son environnement de développement.</li>
                                <li>🎮 La <strong>conception du jeu</strong> : gameplay, objets, logique de fonctionnement.</li>
                                <li>🛠️ La <strong>réalisation complète</strong> du jeu avec gestion des interactions et affichage.</li>
                            </ul>
                            <p>
                                Ce projet nous a permis de découvrir un paradigme différent de programmation (Smalltalk),
                                tout en mettant en place un jeu fonctionnel avec des mécaniques simples mais efficaces.
                            </p>
                        </>
                        }
                    />
                    <div className={styles.bandImg}>
                        <BandImg title='Le contexte' liste_img={["groupe de 3", "4h / semaine", "8 semaines"]} image={false} />
                        <BandImg title='Les langages utilisés' liste_img={[pharo]} image={true} />
                        <BandImg title='Les outils utilisés' liste_img={[github, discord]} image={true} />
                    </div>
                </div>
            </div>

            <div className={styles.Realisation}>
                <h2>Les réalistions</h2>
                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="Modélisation du jeux"
                        texte={<>
                            <p>Plusieurs objets ont été modélisés pour structurer le jeu :</p>
                            <ul>
                                <li>🧱 Le <strong>plateau</strong> (cases, murs, sols...)</li>
                                <li>🕹️ Le <strong>joueur</strong></li>
                                <li>👾 Les <strong>ennemis</strong></li>
                                <li>🎁 Les <strong>objets</strong> récupérables</li>
                                <li>✨ Les <strong>bonus</strong></li>
                            </ul>
                        </>
                        }
                    />
                    <InfoBlock
                        cliquable={false}
                        btn_title="La génération du plateau"
                        texte={<>
                            <p>La génération automatique du plateau comprend :</p>
                            <ul>
                                <li>🧱 Les <strong>murs</strong></li>
                                <li>🟫 Le <strong>sol</strong></li>
                                <li>🕹️ Le <strong>joueur</strong></li>
                                <li>📦 Les <strong>boîtes destructibles</strong></li>
                                <li>🚪 La <strong>porte de sortie</strong></li>
                            </ul>
                        </>
                        }
                    />
                </div>

                <div className={styles.BlockContent}>
                    <InfoBlock
                        cliquable={false}
                        btn_title="Les interactions"
                        texte={<>
                            <p>Le jeu est entièrement jouable dans l’environnement Pharo. Voici les principales interactions :</p>
                            <ul>
                                <li>▶️ <strong>Lancement du jeu</strong></li>
                                <li>↔️ <strong>Déplacements du joueur</strong></li>
                                <li>⏹️ Possibilité de <strong>relancer ou quitter</strong> la partie</li>
                            </ul>
                        </>
                        }
                    />

                    <InfoBlock
                        cliquable={false}
                        btn_title="Les tests unitaires"
                        texte={<>
                            <p>Des tests ont été mis en place pour garantir le bon fonctionnement du jeu :</p>
                            <ul>
                                <li>🔍 Vérification des méthodes des objets</li>
                                <li>✅ Test des cas de <strong>victoire et défaite</strong></li>
                                <li>🧩 Validation de la <strong>génération du plateau</strong></li>
                            </ul>
                        </>
                        }
                    />

                </div>
            </div>
        </>
    )
}

export default Bomber;