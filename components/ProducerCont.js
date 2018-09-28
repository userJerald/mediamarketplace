import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

class ProducerCont extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path = '/producer1' component = {NavComp} />
                    <Route path = '/producer2' component = {NavComp} />
                    <Route path = '/producer3' component = {NavComp} />
                    <Route path = '/producer4' component = {NavComp} />
                    <Route component = {NoMatch} />
                </Switch>
            </div>
        );
    }
}

const NavComp = ({match}) => <h1>{match.url.substring(1, 2).toUpperCase() + match.url.substring(2)}</h1>;

const NoMatch = () => <Redirect to = '/producer1' />;

export default ProducerCont;