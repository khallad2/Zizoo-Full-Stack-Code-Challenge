import React, {Component} from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider, Query} from "react-apollo";
import {CHALLENGE_OFFERS} from '../queries/ChallengeOffers';
import {apolloClient} from '../apolloClientConfig';
import OfferItem from "./offer-item";
import '../styles/search.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

/**
 * Get values from apolloClientConfig
 * @type {DefaultClient<graphql>}
 */
const client = new ApolloClient({
    uri: apolloClient.uri,
    headers: apolloClient.headers
});

/**
 * Debug
 */
client.query({
    query: CHALLENGE_OFFERS
}).then(res => {
    console.log('CHALLENGE_OFFERS', res.data.listZizooChallengeOffers.items);
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
        console.log('state.items', this.state);
        return (
            <ApolloProvider client={client}>
                <div id={"search"}>
                    <Query query={CHALLENGE_OFFERS}>
                        {({loading}) => {
                            if (loading) return 'Loading...';
                            return this.state.challengeOffers.map(boat =>
                                <OfferItem key={boat.id} offerItem={boat}/>
                            )
                        }}
                    </Query>
                </div>
            </ApolloProvider>
        );
    }
}

export default Search;
