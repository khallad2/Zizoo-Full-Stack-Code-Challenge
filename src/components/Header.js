import React, {Component} from 'react';
import {MDBIcon} from "mdbreact";
import "../styles/header.css";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className={"container-fluid"}>
                <div id={'header-content'} className={"row"}>
                    <div className={"col-4 animated 2 bounce slow"}>
                        <a href={'https://www.zizoo.com/'}
                           target={'_blank'}><h2><img className={'logo'} src={'/images/logo.jpg'}/></h2></a>
                        <p id={'slogan'}> Boat Rental Shop</p>
                    </div>
                    <div className={"col-4"}>
                        <h1 id={'slogan'}> Full-stack-code-challenge </h1>
                    </div>
                    <div id={'about-us'}>
                        <a href={'https://www.zizoo.com/'} target={'_blank'}>About us<i
                            className="fab fa-angellist"></i></a>
                        <a> (+44)2033-183641 <i className="fas fa-phone"></i></a>
                        <a href={'https://www.facebook.com/pg/ZizooBoats/'} target={'_blank'}> <MDBIcon fab
                                                                                                        icon="facebook-f"/></a>
                    </div>
                    <hr id={'header-hr'}/>
                    <Link to={'/'}> Home </Link>
                </div>

            </div>
        );
    }
}

export default Header;
