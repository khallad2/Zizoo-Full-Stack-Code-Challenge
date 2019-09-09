import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Search from "./components/search";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const routing = (
    <Router>
        <Switch>
            <Route path="/" component={App}/>
            <Route path="/search" component={Search}/>
            {/*<Notfound ={Notfound} />*/}
        </Switch>
    </Router>
);

it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(routing, div);
  ReactDOM.unmountComponentAtNode(div);
});
