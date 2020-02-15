
import React, { useState, useEffect } from "react";
import MetaTags from 'react-meta-tags';


const ContactPage = () => {

  const [isDisabled, setIsDisabled] = useState(true)
  const [isChecked, setIsChecked] = useState(false)

  
                   
    const requiredInput = (e) => {
      let nomInp = document.getElementById('nombre_input').value;
      setIsDisabled(false)
      setIsChecked(true)
      if(nomInp === '') {
        setIsChecked(false)
        setIsDisabled(true)
        alert('nombre y e-mail obligatorios');
        
      }
    }


                      
    return (
        <>

<MetaTags>
        <title>Contacto</title>
        <meta name="description" content="La Fuga Ediciones es un proyecto editorial que nace en 2014 con una propuesta de ficción literaria moderna y universal, en principio centrada en traducciones." />
      </MetaTags>

           <div className="content_editorial" > 
              <div className="content-first-contact">
                <div className="container">
                  <div className="row align-text-center">

                      <h5 className="title-page-ed">Contacto</h5>

                    <div className="div-contact" > 
                    <div className="subscribe" >Inscríbete a nuestra Newsletter</div><br></br>

                      <form name="frm" action="./form_2.php" method="post">
                        <br />
                      Nombre<br />
                      <input id="nombre_input" className="input-class-web" type="text" name="cf_name" size="14" />
                      <br></br>
                          <br></br>
                          Email<br></br>
                          <input type="email" className="input-class-web" name="cf_email" type="text" size="14" maxLength="200"/>
                          <br></br>
                          <br></br>
                          <br></br>
                          <input type="submit" className={isDisabled ? 'submit-disabled' : 'submit'} name="sub" value="Enviar" disabled={isDisabled} />
                        <br></br>
                        <br></br>
                        <input type="checkbox" name="chk"  onClick={requiredInput} checked={isChecked}/>
                        <label>Acepto términos y condiciones</label>
                      </form>

                      
                      
                      <p className="condiciones">Los datos de carácter personal que se solicitan en la sección “Inscribete a nuestra newsletter” serán tratados de conformidad con la normativa reguladora de la protección de datos de carácter personal. Los mismos serán incorporados al fichero “Amigos de La fuga” que se encontrará bajo la responsabilidad de La fuga ediciones, S.L.
                        
                        La aceptación en la recogida de sus datos personales supondrá que usted autoriza a formar parte del mencionado fichero y a recibir información sobre La fuga ediciones, información empresarial de todo tipo y así como información comercial tanto de asociados como de terceros mediante correo electrónico.
                        
                        Asimismo le informamos que puede ejercitar sus derechos de acceso, rectificación, cancelación y oposición con arreglo a lo previsto en la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal, enviando un correo electrónico a info@lafugaediciones.es o una carta junto con la fotocopia de su DNI, a la siguiente dirección: Passatge de Pere Calders 9, 080015 Barcelona.</p><br></br>
                    </div>
                  </div>
                  </div>
                </div>
              
            </div>

        </>
    );
};

export default ContactPage;

