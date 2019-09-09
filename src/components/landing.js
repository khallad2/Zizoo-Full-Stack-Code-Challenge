import React, {Component} from 'react';
import {MDBCol} from "mdbreact";
import Search from "./search";
import '../styles/landing.css';
import {Link} from "react-router-dom";
import FooterPage from "./Footer";

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
        // _isMounted = false;
        //
    state = {
        displaySearch: false
    };

    //
    constructor(props) {
        super(props);
        this.state = {
            displaySearch: false
        };
        this.displaySearch = this.displaySearch.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
    }


    componentWillUnmount() {
        this._isMounted = false;
    }

    displaySearch = () => {
        if (this._isMounted) {
            this.setState({
                displaySearch: true
            });
        }
    };


    /**
     * render Single Offer item
     * @return {*}
     */
    render() {
        if (!this.state.displaySearch) {
            return (
                <div>
                    <MDBCol className="text-center">
                        <Link onClick={this.displaySearch}
                              className={'btn-floating purple-gradient start-button black-text'} to="/search">
                            Start Search <i className="fas fa-bolt animated flip"> </i>
                        </Link>
                    </MDBCol>
                    <FooterPage/>
                </div>
            );
        }
        if (this.state.displaySearch) {
            return (<Search/>);
        }
    }
}

export default Landing;