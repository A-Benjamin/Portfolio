import './App.css';

import NavBar from './Components/NavBar';
import InfoBlock from './Components/InfoBlock';
import Timeline from './Components/Timeline';
import BandImg from './Components/BandImg';
import Slider from './Components/Slider';

import { mongo, mySql, postG } from './img/bdd';
import { django, java, js, py, react, spring, ts, Mui, pharo } from './img/langages';
import { github, jira, teams, bash, gitlab, excel, figma } from './img/outils';
import { pc, fusee } from './img/gif';
import { Presentation, Contact, Projet, Passion, Etudiant } from './Documents/Texte';

import moi from './img/moi.jpg';


function App() {
  return (
    <div className="App">

      <NavBar />

      <div className="titre-section">
        <img src={fusee}></img>
        <div className='titre-desc'>
          <h1 className="titre">Benjamin ALEXANDRE</h1>
          <p>Bienvenue sur le portfolio d'un développeur Full Stack</p>
        </div>
        <img src={pc}></img>
      </div>

      <div className='block'>
        <h1 id="presentation" className='parte-titre'>Présentation</h1>
        <div className='alignItem'>
          <InfoBlock btn_title='Qui suis-je ?' img_src={moi} texte={<Presentation />} />
          <InfoBlock btn_title='Restons connectés' texte={<Contact />} />
        </div>

        <div className='alignItem'>
          <InfoBlock btn_title='Ce qui me passionne' texte={<Passion />} />
          <InfoBlock btn_title='Mes projets et rêves' texte={<Projet />} />
        </div>
      </div>

      <div className='block'>
        <h1 id='parcours' className='parte-titre'>Mon parcours scolaire</h1>
        <div className='parcours'>
          <Timeline />
          <InfoBlock btn_title='Mon job étudiant' texte={<Etudiant />} cliquable={false} />
        </div>
      </div>

      <div className='block'>
        <h1 id='technique' className='parte-titre'>Mes compétences techniques</h1>
        <div className='technique'>
          <BandImg title='Mes langages de programmation' image={true} liste_img={[py, java, js, ts, pharo]} />
          <BandImg title='Mes Frameworks & Bibliothèques' image={true} liste_img={[django, spring, react, Mui]} />
          <BandImg title='Mes bases de données' image={true} liste_img={[mongo, postG, mySql]} />
        </div>
        <div className='technique'>
          <BandImg title='Mes outils' image={true} liste_img={[gitlab, github, jira, teams, bash, excel, figma]} />
          <BandImg title='Autres compétences' liste_img={["Agilité", "Test Driven Development", "Clean code", "Design patterns", "UML", "Architecture SI", "Accessibilité", "Sécurité"]} />
        </div>
      </div>

      <div className='block'>
        <h1 id='universitaire' className='parte-titre'>Mes projets universitaires</h1>
        <Slider type="univ" />
      </div>

      <div className='block'>
        <h1 id='stages' className='parte-titre'>Mes projets de stages</h1>
        <Slider type="stage" />
      </div>

    </div>
  );
}

export default App;
