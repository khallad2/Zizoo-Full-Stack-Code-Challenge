import React, {Component} from 'react';
import Search from "./search";
import '../styles/landing.css';
import {Link} from "react-router-dom";
import {MDBCol, MDBContainer, MDBFooter, MDBRow} from "mdbreact";

/**
 * Class search
 */
class Landing extends Component {

    /**
     * To be used as global state separately from internal Component.state.
     * To be used in Mounting & unMounting hocks to manage state unMount to free-up internal component.state
     * when component is in-active
     * @type {boolean}
     * @private
     */
    state = {
        displaySearch: false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.displaySearch) {
            this.returnHome();
        }
    }

    componentWillUnmount() {
        this.setState({
            displaySearch: false
        })
    }

    /**
     * disable displaySearch so it goes back to landing
     */
    returnHome() {
        this.setState({
            displaySearch: false
        });
    }

    /**
     * Change state of displaySearch
     */
    displaySearch = () => {
        this.setState({
            displaySearch: true
        });
    };

    /**
     * render Single Offer item
     * @return {*}
     */
    render() {
        if (this.state.displaySearch) {
            return (<Search/>);
        } else {
            return (
                <div>
                    <MDBCol className="text-center">
                        <Link onClick={this.displaySearch}
                              className={'btn-floating purple-gradient start-button black-text'} to="/Search">
                            Start Search <i className="fas fa-bolt animated flip"> </i>
                        </Link>
                    </MDBCol>
                    <footer>
                        <MDBFooter color="" className="font-small pt-4 mt-4 clark-footer">
                            <MDBContainer fluid className="text-center text-md-left">
                                <MDBRow>
                                    <MDBCol md="4">

                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                            <div className="my-footer text-center py-3">
                                <MDBContainer fluid>
                                    <img src={'/images/logo.jpg'} alt={'logo'}/><br/>
                                    <a className={'text'}
                                       href="https://khallad2.github.io/khallad.github.io/"> &copy; {new Date().getFullYear()} Copyright:
                                        Khallad Sharaf El-Din </a>
                                </MDBContainer>
                            </div>
                        </MDBFooter>
                    </footer>
                </div>
            );
        }
    }
}

export default Landing;