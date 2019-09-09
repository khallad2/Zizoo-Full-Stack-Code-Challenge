import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Search from "./src/components/search/search";
import App from "./src/App";
import Notfound from "./src/components/not-fount-404/not-fount-404";

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/search" component={Search} />
            <Route path="*" component={Notfound} />
        </div>
    </Router>
);

export default routing;