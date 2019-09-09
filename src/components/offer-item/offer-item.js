import React, {Component} from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBContainer,} from "mdbreact";


/**
 * Class search
 */
class OfferItem extends Component {

    /**
     * Component state objects
     * @type {{starRating: number, offerItem: null}}
     */
    state = {
        offerItem: null,
        starRating: 0
    };

    constructor(props) {
        super(props);
        this.state.offerItem = this.props.offerItem ? this.props.offerItem : null;
        this.state.offerItem.free_extras = this.convertStringToJson(this.state.offerItem.free_extras);
    }

    /**
     * handle offer items after component mounting
     */
    componentDidMount() {
        this.setState(this.state.offerItem, () => {
            return this.props.offerItem;
        });
    }

    /**
     * Convert provided string to readable string
     * @param str
     * @return {string}
     */
    convertStringToJson = (str) => {
        return str.replace(',', '000').replace(/[^\w\s]/gi, '').replace('000', ' ');
    };

    /**
     * render Single Offer item
     * @return {*}
     */
    render() {
        return (
            <MDBContainer className={'animated fadeInLeftBig slow'}>
                <MDBCard className="w-75 mb-4">
                    <MDBCardBody className={'container'}>
                        <div className={'row'}>
                            <img className={'col-sm-6 float-left'} src={this.state.image_url}/>
                            <div className={'col-sm-6 float-right row'}>
                                <div className={'col-sm-8 font-italic'}>
                                    <strong>{this.state.type} {this.state.length}</strong> {this.state.year} <br/>
                                    <i className="far fa-heart float-right"></i>
                                    {this.state.locality}, {this.state.country}
                                    <hr/>
                                    <i className={'blue-text'}>Boat Type: </i> {this.state.sail_type}
                                    <br/>
                                    <br/>
                                    <i className={'blue-text'}>Free Extras: </i> {this.state.free_extras}
                                </div>
                                <div className={'col-sm-4 font-italic'}>
                                    Length <i className="fas fa-ruler blue-text"></i> {this.state.length}m
                                    <hr/>
                                    Cabins <i className="fas fa-person-booth blue-text"></i> {this.state.cabins}.
                                    <hr/>
                                    Guests <i className="fas fa-user-friends blue-text"></i> {this.state.guests}.
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <hr/>
                        <div className={'row'}>
                            <span className={'col-sm-4 float-left'}>
                                    <i className="fa fa-eye blue-text">  </i> {this.state.views_24} last 24 hours
                            </span>
                            <span className={'col-sm-4 float-center'}>
                                    <i className="far fa fa-star orange-text">{this.state.review_count}</i>
                            </span>
                            <div className={'sol-sm 4 float-right font-italic'}>
                                <span>
                                    From € <strong className={'blue-text'}>{this.state.price}</strong> Weekly
                                </span>
                            </div>
                        </div>
                        <hr/>
                        <div className={''}>
                            <MDBBtn color="primary float-right col-sm-4">
                                Direct Booking <i className="fas fa-bolt white-text"></i>
                            </MDBBtn>
                            <MDBBtn outline color="primary col-sm-6" disabled={true}>
                                <i className="fas fa-check"></i> Sicherungsshein  &nbsp;
                                <i className="fas fa-check"></i> Luxury </MDBBtn>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        );
    }
}

export default OfferItem;