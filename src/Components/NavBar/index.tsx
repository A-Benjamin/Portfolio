import style from './index.module.css';
import {linkedin, github} from '../../img/outils';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };  

    return (
        <nav className={style.navbar}>
            <div className={style.blockTitle}>
                <h4 className={style.titre}>Portfolio</h4>

                <button
                    className={`${style.menuToggle} ${isMenuOpen ? style.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <CloseIcon className={style.menuIcon} /> : <MenuIcon className={style.menuIcon} />}
                </button>
            </div>

            <ul className={`${style.lien} ${isMenuOpen ? style.active : ''}`}>
                <li><a href='#presentation' onClick={closeMenu}>Présentation</a></li>
                <li><a href='#parcours' onClick={closeMenu}>Parcours scolaire</a></li>
                <li><a href='#technique' onClick={closeMenu}>Compétences technique</a></li>
                <li><a href='#universitaire' onClick={closeMenu}>Projets universitaire</a></li>
                <li><a href='#stages' onClick={closeMenu}>Projets de stages</a></li>
            </ul>

            <div className={style.reseaux}>
                <a href="https://www.linkedin.com/in/benjamin-alexandre-557590254/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="https://github.com/A-Benjamin" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" />
                </a>
            </div>
        </nav>
    );
}
