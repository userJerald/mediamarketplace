import React, { Component } from 'react';

import * as SESSION from '../services/session';

import Admin from './Admin';
import Producer from './Producer';

class Main extends Component {
  render() {
    // tanong kung anong userrole admin / producer
    // producer; tanong na lang lage yung userrole

    // console.log(`hasAccess() = ${SESSION.hasAccess()} getUsertype = ${SESSION.getUsertype()} getUserrole() = ${SESSION.getUserrole()}`);

    if (SESSION.hasAccess()) { 
        if (SESSION.getUsertype() === 'admin') {
            return <Admin userrole = {SESSION.getUserrole()} />;
        }
        
        return <Producer userrole = {SESSION.getUserrole()} />;
    }
    
    // save kay cookie yung usertype and userrole
    SESSION.setUser({'usertype': 'producer', 'userrole': 'public'});
    return <Producer userrole = {SESSION.getUserrole()} />;
  }
}

export default Main;