import './App.css';
import NavBar from './components/NavBar';
import InfoBlock from './components/InfoBlock';
import panda from './img/panda.jpg';
import Contact from './texte/Contact';
import Presentation from './texte/Presentation';

import django from './img/langages/django.png';
import java from './img/langages/java.png';
import js from './img/langages/js.png';
import py from './img/langages/py.png';
import react from './img/langages/react.png';
import spring from './img/langages/spring.png';
import ts from './img/langages/ts.png';

import mongo from './img/bdd/mongo.png';
import mySql from './img/bdd/mySql.png';
import postG from './img/bdd/postG.png';

import bash from './img/outils/bash.png';
import gitlab from './img/outils/gitlab.png';
import github from './img/github.png';
import jira from './img/outils/jira.png';
import teams from './img/outils/teams.png';

import fusee from './img/gif/fusee.gif';
import pc from './img/gif/pc.gif';

import BandImg from './components/BandImg';
import Timeline from './components/Timeline';

import Slider from './components/Slider';

import test from './img/test.jpg';

function App() {

  let cards = [{
    title: "Jeu de labyrinthe",
    date: "Jan. 2022  Mai. 2022",
    img: test,
  }, {
    title: "Compétition en java",
    date: "Sept. 2022  Déc. 2022",
    img: test,
  }, {
    title: "Entreprise de vente de jouets",
    date: "Sept. 2023  Dec. 2023",
    img: test
  }, {
    title: "Bomberman",
    date: "Nov. 2023  Janv. 2024",
    img: test
  }, {
    title: "Application d'assurance",
    date: "Sept. 2024  Mars. 2025",
    img: test
  }
  ];

  let stageCards = [{
    title: "Stage développeur web",
    date: "Avr. 2023  Juil. 2023",
    img: test,
  }, {
    title: "Stage développeur web",
    date: "Avr. 2025  Sept. 2025",
    img: test,
  }
  ];

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

      <div className='div'>
        <h1 className='parte-titre'>Présentation</h1>
        <div className='Moi'>
          <InfoBlock btn_title='Qui suis-je vraiment ?' img_src={panda} texte={<Presentation />} />
          <InfoBlock btn_title='Restons connectés' texte={<Contact />} />
        </div>

        <div className='Moi'>
          <InfoBlock btn_title='Ce qui me passionne' img_src={panda} texte={<Presentation />} />
          <InfoBlock btn_title='Mes projets et rêves' texte={<Contact />} />
        </div>
      </div>

      <div className='div'>
        <h1 className='parte-titre'>Mon parcours scolaire</h1>
        <div className='parcours'>
          <Timeline />
          <InfoBlock btn_title='Mon job étudiant' texte={<Contact />} />
        </div>
      </div>

      <div className='div'>
        <h1 className='parte-titre'>Mes compétences technique</h1>
        <div className='technique'>
          <BandImg title='Mes langages de programmation' image={true} liste_img={[py, java, js, ts]} />
          <BandImg title='Mes Frameworks' image={true} liste_img={[django, spring, react]} />
          <BandImg title='Mes bases de données' image={true} liste_img={[mongo, postG, mySql]} />
        </div>
        <div className='technique'>
          <BandImg title='Mes outils' image={true} liste_img={[gitlab, github, jira, teams, bash]} />
          <BandImg title='Mes outils' liste_img={["Agilité", "Test Driven Development", "Clean code"]} />
        </div>
      </div>

      <div className='div'>
        <h1 className='parte-titre'>Mes projets universitaire</h1>
        <Slider liste_card={cards} />
      </div>

      <div className='div'>
        <h1 className='parte-titre'>Mes projets de stages</h1>
        <Slider liste_card={stageCards} />
      </div>

    </div>
  );
}

export default App;
