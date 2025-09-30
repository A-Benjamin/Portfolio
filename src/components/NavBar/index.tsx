import style from './index.module.css';
import linkedin from '../../img/linkedin.png';
import github from '../../img/github.png';

export default function NavBar() {

    return (
        <nav className={style.navbar}>
            <h4 className={style.titre}>Portfolio</h4>
            <ul className={style.lien}>
                <li><a href='#'>Lien 1</a></li>
                <li><a href='#'>Lien 2</a></li>
                <li><a href='#'>Lien 3</a></li>
                <li><a href='#'>Lien 4</a></li>
                <li><a href='#'>Lien 5</a></li>
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
    )

}