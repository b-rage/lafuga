import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem } from 'mdbreact'
import '@trendmicro/react-datepicker/dist/react-datepicker.css';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'



const NavBarComponent = props => {

    const [state, updateState] = useState({
        collapse: false,
        isWideEnough: false
    });

    const onClickNav = () => updateState({ ...state, collapse: !state.collapse })

    const goToIndex = () => {
        props.history.push('/')
    }

    return (
        <>
            <Navbar className='navbar-top' color="white" light expand="md" scrolling >

                <NavbarBrand >
                    <a className='nav-link' onClick={goToIndex} ><img  src='./logo-lafuga.png'/></a>

                </NavbarBrand>

                {!state.isWideEnough && <NavbarToggler color="black" onClick={onClickNav} />}

                <Collapse isOpen={state.collapse} navbar>

                    <NavbarNav right>

                        <NavItem className='nav-link' >

                        <Link to={`/`}><p className="nav-link waves-effect waves-light" >INICIO</p></Link>

                        </NavItem>

                        <NavItem className='nav-link' >

                        <Link to={`/libros`}><p className="nav-link waves-effect waves-light" >LIBROS</p></Link>


                        </NavItem>


                        <NavItem className='nav-link' >

                            <Link to={`/autores`}><p className="nav-link waves-effect waves-light" >AUTORES</p></Link>

                        </NavItem >


                        <NavItem className='nav-link' >

                            <Link to={`/distribucion`}><p className="nav-link waves-effect waves-light" >DISTRIBUCIÓN</p></Link>

                        </NavItem >


                        <NavItem className='nav-link' >

                            <Link to={`/editorial`}><p className="nav-link waves-effect waves-light" >la EDITORIAL</p></Link>

                        </NavItem >

                        <NavItem className='nav-link' >
                            
                            <Link to={`/contacto`}><p className="nav-link waves-effect waves-light" >CONTACTO</p></Link>

                        </NavItem >
                        <NavItem className='nav-link' >
                        <a className='nav-link' href="http://lafugaediciones.es/tienda/es/"  >
                        <p className="nav-link waves-effect waves-light mtop-8" >TIENDA</p>
                            </a>
                        </NavItem >
                    </NavbarNav>

                </Collapse>

            </Navbar>


        </>
    );
}

export default withRouter(NavBarComponent);





