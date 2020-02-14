
import React from "react";
import MetaTags from 'react-meta-tags';


const ContactPage = () => {

    const nomInp = null;
                      
                      const requiredInput = () => {
                        nomInp = document.getElementById('nombre_input').value;
                        if(nomInp === '') {
                          document.frm.chk.checked=false;
                          alert('nombre y e-mail obligatorios');
                        }else{
                            if(document.frm.chk.checked==true)
                            {
                            document.frm.sub.disabled=false;
                            }
                            if(document.frm.chk.checked==false)
                            {
                            document.frm.sub.enabled=false;
                            }
                        }
                      }

                      
    return (
        <>

<MetaTags>
        <title>Contacto</title>
        <meta name="description" content="La Fuga Ediciones es un proyecto editorial que nace en 2014 con una propuesta de ficción literaria moderna y universal, en principio centrada en traducciones." />
      </MetaTags>
           <div className="content_editorial" > 
              <div className="content_first_contactos">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 colo-lg-12">
                      <p className="titol_pagina_editorial">Contacto</p>
                    </div>
                    <div className="div_contactos" className="col-xs-12 "> 
                    <div className="inscribete" >Inscríbete a nuestra Newsletter</div><br></br>

                      <form name="frm" action="./form_2.php" method="post">
                        <br />
                      <p>Nombre</p><br></br>
                      <input className="nombre_input" type="text" name="cf_name" size="14" />
                      <br></br>
                          <br></br>
                          Email<br></br>
                          <input className="email_input" name="cf_email" type="text" size="14" maxlength="200"/>
                          <br></br>
                          <br></br>
                          <br></br>
                          <input type="submit" className="submit" name="sub" value="Enviar" disabled />
                        <br></br>
                        <br></br>
                        <input type="checkbox" name="chk" onClick={requiredInput} />
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

