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

import fusee from './img/gif/fusee.gif';
import pc from './img/gif/pc.gif';

import BandImg from './components/BandImg';
import Timeline from './components/Timeline';

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
        <h1 className='parte-titre'>Mes compétences technique</h1>
        <BandImg title='Mes langages de programmation préféré' liste_img={[py, django, java, spring, js, ts, react]} />
      </div>

      <div className='div'>
        <Timeline />
      </div>
    </div>
  );
}

export default App;
