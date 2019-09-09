import React, {Component} from 'react';
import {MDBIcon} from "mdbreact";
import "./header.css";

class Header extends Component {
    render() {
        return (
            <div className={"container-fluid"}>
                <div id={'header-content'} className={"row"}>
                    <div className={"col-4 animated 2 bounce slow"}>
                        <a href={'https://www.zizoo.com/'}
                           target={'_blank'}><h2> Zizoo </h2></a>
                        <p id={'slogan'} className={'animated 2 bounceInLeft slow'}> Better Development</p>
                    </div>
                    <div id={'about-us'} className={"animated 2 flash delay-2s"}>
                        <a href={'https://www.zizoo.com/'} target={'_blank'}>About us<i
                            className="fab fa-angellist"></i></a>
                        <a> (+44)2033-183641 <i className="fas fa-phone"></i></a>
                        <a href={'https://www.zizoo.com/'}> <MDBIcon fab icon="facebook-f"/></a>
                    </div>
                    <hr id={'header-hr'}/>
                </div>
            </div>
        );
    }
}

export default Header;
