import React from 'react';
import './App.css';
import Landing from "./components/landing";
import {Link} from "react-router-dom";
import {MDBIcon} from "mdbreact";


function App() {
    // i made the header as separate component to be easily injected in easy way anywhere
    // now i deleted header compoenent so i will re-use the header code in the search page
    return (
        <div className="App">
            <header>
                <div className={"container-fluid"}>
                    <div id={'header-content'} className={"row"}>
                        <div className={"col-4 animated 2 bounce slow"}>
                            <a href={'https://www.zizoo.com/'}
                               target={'_blank'}><h2><img className={'logo'} src={'/images/logo.jpg'} alt={'logo'}/>
                            </h2></a>
                            <p id={'slogan'}> Boat Rental Shop</p>
                        </div>
                        <div className={"col-4"}>
                            <h1 id={'slogan'}> Full-stack-code-challenge </h1>
                        </div>
                        <div id={'about-us'}>
                            <a href={'https://www.zizoo.com/'} target={'_blank'}>About us<i
                                className="fab fa-angellist"></i></a>
                            (+44)2033-183641 <i className="fas fa-phone"> </i>
                            <a href={'https://www.facebook.com/pg/ZizooBoats/'} target={'_blank'}> <MDBIcon fab
                                                                                                            icon="facebook-f"/></a>
                        </div>
                        <hr id={'header-hr'}/>
                        <Link to={'/'}> Home </Link>
                    </div>
                </div>
            </header>
            <main>
                <Landing/>
            </main>
        </div>
    );
}

export default App;