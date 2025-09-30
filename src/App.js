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

import BandImg from './components/BandImg';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className='Moi'>
        <InfoBlock btn_title='Tu souhaite me connaître ? Clique ici !' img_src={panda} texte={<Presentation />} />
        <InfoBlock btn_title='Tu souhaite me contacter ? clique ici ! ' texte={<Contact />} />
      </div>

      <div className='langages'>
        <BandImg title='Mes langages de programmation préféré' liste_img={[py, django, java, spring, js, ts, react]} />
      </div>

      <div>
        <Timeline />
      </div>
    </div>
  );
}

export default App;
