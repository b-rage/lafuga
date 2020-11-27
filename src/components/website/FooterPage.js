import React from "react";

const FooterPage = () => {
    return (
        <>

            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <address>
                                    <strong>La Fuga Ediciones</strong><br></br>
                                    C/O Llibreria Calders <br></br>
                                    Passatge Pere Calders, 9<br></br>
                                    08015 Barcelona<br></br>
                                    Tel: (+34) 934 42 78 31<br></br>
                                    <a href="mailto:#">info@lafugaediciones.es</a>
                                </address>
                            </div>
                            <div  className="col-md-6 right" >
                                <strong>Partners</strong><br></br>
                                <a href="https://www.facebook.com/lacalders" target="_blank">Llibreria Calders</a><br></br>
                                <a href="http://www.tactilestudio.com/" target="_blank">TactilEstudio</a><br></br>


                                <div>
                                    <br></br>
                                    <a href="https://www.twitter.com/lafugaediciones" target="_blank"><img src="./img/tw_icon.png" width="36" height="40" alt="" /></a> &nbsp;&nbsp;<a href="https://www.facebook.com/lafugaediciones?fref=ts" target="_blank"><img src="./img/fb_icon.png" width="38" height="40" alt="" /></a>&nbsp;&nbsp;
                                        <a href="https://www.instagram.com/lafugaediciones/" target="_blank"><img src="./img/inst_icon.png" width="38" height="40" alt="" /></a>
                                </div>

                               

                            </div>
                            
                        </div>
                        <div className="row">
                        <div className="mg-0-auto">
                        <br></br>
                        <br></br>
                                    <p id="developed">developed by b-rage©2020</p>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterPage;