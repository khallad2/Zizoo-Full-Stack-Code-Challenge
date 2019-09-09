import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Search from "./components/search";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Notfound from "./components/not-fount-404";

const routing = (
    <Router>
        <div>
            <Route path="/" component={App}/>
            <Route path="/search" component={Search}/>
            {/*<Notfound ={Notfound} />*/}
            <Route path='/404' component={Notfound}/>
        </div>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
