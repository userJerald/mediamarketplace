import React from 'react';
import { Redirect , withRouter} from 'react-router-dom';
import { Input , Button , Alert} from 'reactstrap';
import * as Session from './Session';
import './index.css';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'email' : ''
        }
        this.logInHandle = this.logInHandle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    logInHandle(){
        const { history } = this.props;
        history.push('/login');
        Session.setUser(this.state.email);

        if(Session.getUser() === null){
            alert('Please insert an username.');
        }
    }
    handleChange(e){
        this.setState({[e.target.name] : e.target.value})
    };
    render(){
        if(Session.getUser() !== null){
            return <Redirect to='/home' />;
        }
        return(
            <div className='bg'>
            <div className='flex'>
                <div className='flexFormSD'>
                <div className='flexForm'>
                <div className='title'>
                        <div className='titleDiv'>
                        <Alert  className='titleName' color='light'>Welcome! Please Log-In</Alert><br/>
                        </div>
                        <div className='inputDiv'>
                        <Input className='input' type='text' bsSize='sm' placeholder='Username' name='email' value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className='inputDiv'>
                        <Input className='input' type='password' bsSize='sm' placeholder='Password'/>
                        </div>
                        <Button className='button' outline color="secondary"
                        onClick={this.logInHandle.bind(this)}
                        >Submit</Button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        );
    }
}


export default withRouter(Login);