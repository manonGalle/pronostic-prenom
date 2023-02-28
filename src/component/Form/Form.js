import {useRef} from "react";
import emailjs from '@emailjs/browser';

import './Form.css';
import { Link, useNavigate } from "react-router-dom";

function Form ({ setFirstname, firstname }) {

    const form = useRef()
    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2b4f5zz', 'template_5o1w3xq', form.current, 'KTBwexTNTF4olfJkb')
          .then((result) => {
              console.log(result.text);
              console.log({firstname});
              setFirstname(firstname)
              navigate("/thanks")
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
      

    return (
        <div className="Container">
            <h1>Bienvenu</h1>
            <div className="Form">
                <form 
                    ref={form} 
                    className="Form-div"
                    onSubmit={sendEmail}
                >
                    <input
                        className="Form-input"
                        type="text"
                        placeholder="Ton prénom/nom"
                        name="user_name"
                        value={firstname} required 
                        onChange={(event) => {
                            setFirstname(event.target.value)
                        }}
                    />
                    <input
                        className="Form-input"
                        type="text"
                        placeholder="Ton adresse mail"
                        name="user_email" required
                    />
                    <input
                        className="Form-input"
                        type="text"
                        placeholder="Ton pronostic de prénom"
                        name="pronostic_prenom" required
                    />

                    <textarea
                        className="Form-input textarea"
                        placeholder="Si je gagne je veux le poids du bébé en..."
                        name="message" required
                    />
                    <button
                        type="submit"
                        className="Form-button">
                        Envoyer mon pronostic
                    </button>
                </form>
            </div>
            <div className="BirthList">
                <h2>Et si tu veux, voici la liste de naissance : </h2>
                <a href="https://www.listedenaissance.fr/manonetvictor">https://www.listedenaissance.fr/manonetvictor</a>
            </div>
        </div>
    )
}

export default Form;