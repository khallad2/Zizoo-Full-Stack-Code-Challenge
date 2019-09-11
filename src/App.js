import React from 'react';
import './App.css';
import Landing from "./components/landing";
import {Link} from "react-router-dom";
import {MDBIcon} from "mdbreact";
import {ComConstance} from "./Common_Constants";


function App() {
    // i made the header as separate component to be easily injected in easy way anywhere
    // now i deleted header compoenent so i will re-use the header code in the search page
    return (
        <div className="App">
            <header>
                <div className={"container-fluid"}>
                    <div id={'header-content'} className={"row"}>
                        <div className={"col-4 "}>
                            <a href={ComConstance.zizooWebLink}
                               target={'_blank'}>
                            </a>
                            <p id={'slogan'}> {ComConstance.zizo.slogan}</p>
                        </div>
                        <div className={"col-4"}>
                            <h1 id={'slogan'}> {ComConstance.headerTitle} </h1>
                        </div>
                        <div id={'about-us'}>
                            <a href={ComConstance.zizooWebLink} target={'_blank'}>{ComConstance.zizo.about}
                                <i className="fab fa-angellist"> </i></a>
                            {ComConstance.zizo.phone} <i className="fas fa-phone"> </i>
                            <a href={ComConstance.zizooFBLink} target={'_blank'}> <MDBIcon fab
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
