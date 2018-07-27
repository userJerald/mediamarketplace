import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import HomeHeader from './home_header';
import Navigation from './navigation';
import * as Session from './Session';
class Home extends React.Component{
    constructor(props){
    super(props);
    this.changeCookie = this.changeCookie.bind(this);
    }
changeCookie(){
    const { history } = this.props
    history.push('/login');
    Session.setUser(null);
}
    render(){
            return (     
                <BrowserRouter>
                <div>
                <Container>
                <HomeHeader changeCookie={this.changeCookie}/>
                </Container>
                <Navigation/>
                </div>
                </BrowserRouter>
            );
    }
}


export default Home;