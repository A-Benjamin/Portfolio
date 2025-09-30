import CV from '../Documents/CV.pdf';

export const Contact = () => (
    <div>
        <p>💬 Envie d’échanger à propos de mon profil et de mes motivations ?</p>
        <p>
            📄 Téléchargez mon CV : {" "}
            <a href={CV} download="CV_ALEXANDRE_Benjamin.pdf" target="_blank" rel="noopener noreferrer">
                CV 
            </a>
        </p>
        <p>📞 Mon numéro de téléphone: 06 19 03 41 19</p>
        <p>📧 Mon adresse mail: benjamin.alexandre.pro@gmail.com</p>
        <p>Mon github : <a href='https://github.com/A-Benjamin'>clique ici</a></p>
        <p>Mon linkedin : <a href='https://www.linkedin.com/in/benjamin-alexandre-557590254/'>clique ici</a></p>
    </div>
);

export default Contact;

