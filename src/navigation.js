import React from 'react';
import { Switch , Redirect , Route } from 'react-router-dom';
import Store from './component/store';
import Cart from './component/cart';
import Calendar from './component/calendar';
import Profile from './component/profile';
const NoMatch = () => <Redirect to='/home' />
class Navigation extends React.Component{
    render(){
        return(
            <Switch>
            <Route path='/store' component={Store}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/calendar' component={Calendar}/>
            <Route path='/profile' component={Profile}/>
            <Route component={NoMatch} />
            </Switch>
        );
    }
}
export default Navigation;