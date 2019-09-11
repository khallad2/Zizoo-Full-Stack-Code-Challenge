import React, {Component} from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider, Query} from "react-apollo";
import {CHALLENGE_OFFERS} from '../queries/ChallengeOffers';
import {environment as env} from '../environment';
import OfferItem from "./offer-item";
import {Link} from "react-router-dom";
import {MDBIcon} from "mdbreact";
import {ComConstance} from "../Common_Constants";
import '../styles/search.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

/**
 * Get values from apolloClientConfig
 * @type {DefaultClient<graphql>}
 */
const client = new ApolloClient({
    uri: env.apolloClient.uri,
    headers: env.apolloClient.headers
});


/**
 * Class search
 */
class Search extends Component {

    state = {
        challengeOffers: [],
    };

    componentDidMount() {
        this.getData();
    }

    /**
     * Fetch ata
     * @return {Promise<ApolloQueryResult<any>>}
     */
    async getData() {
        let data = await client.query({query: CHALLENGE_OFFERS});
        this.setState({
            challengeOffers: this.filterOffers(data.data.listZizooChallengeOffers.items)
        });
    }

    /**
     * Validate the offers to fit the criteria
     * all boats between 10m and 20m in length with newer than 2010
     * @param challengeOffers
     * @return {[]}
     */
    filterOffers(challengeOffers) {
        let res = [];
        if (challengeOffers.length > 0) {
            res = challengeOffers.filter((offer) => (offer.length >= 10 || offer.length <= 20) && offer.year >= 2010)
        }
        return res;
    }


    render() {
        return (
            <div>
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
                                <a href={ComConstance.zizooWebLink} target={'_blank'}>{ComConstance.zizo.about}<i
                                    className="fab fa-angellist"></i></a>
                                (+44)2033-183641 <i className="fas fa-phone"> </i>
                                <a href={ComConstance.zizooFBLink} target={'_blank'}> <MDBIcon fab
                                                                                               icon="facebook-f"/></a>
                            </div>
                            <hr id={'header-hr'}/>
                            <Link to={'/'}> Home </Link>
                        </div>
                    </div>
                </header>
                <ApolloProvider client={client}>
                    <div id={"search"}>
                        <Query query={CHALLENGE_OFFERS}>
                            {({loading}) => {
                                if (loading) return `${ComConstance.searchPage.loading}...`;
                                return this.state.challengeOffers.map(boat =>
                                    <OfferItem key={boat.id} offerItem={boat}/>
                                )
                            }}
                        </Query>
                    </div>
                </ApolloProvider>
            </div>
        );
    }
}

export default Search;
