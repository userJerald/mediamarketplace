import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';

import * as SESSION from '../services/session';

const style = {
    'width': '200px'
};

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'usertype': 'admin',
            'userrole': '',
            'dropdownAdmin': ['admin', 'moderator'],
            'dropdownProducer': ['professional', 'student']
        };

        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    login(e) {
        e.preventDefault();

        const selectedUserrole = this.state.usertype === 'admin' ? this.state.dropdownAdmin[0] : this.state.dropdownProducer[0];

        SESSION.setUser({
            'usertype': this.state.usertype,
            'userrole': this.state.userrole ? this.state.userrole : selectedUserrole
        });

        this.props.history.push('/');
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        if (SESSION.getUserrole() !== 'public') {
            return <Redirect to = '/' />
        }

        return (
            <Form onSubmit = {this.login}>
                <FormGroup style = {{'display': 'flex'}}>
                    <Label>User Type:</Label>
                    <Input type = 'select' style = {style} name = 'usertype'  value = {this.state.usertype} onChange = {this.handleChange}>
                        <option value = 'admin'>Admin</option>
                        <option value = 'producer'>Producer</option>
                    </Input>
                </FormGroup>
                <FormGroup style = {{'display': 'flex'}}>
                    <Label>User Role:</Label>
                    <Input type = 'select' style = {style} name = 'userrole'  value = {this.state.userrole} onChange = {this.handleChange}>
                        {
                            (this.state.usertype === 'admin' ? this.state.dropdownAdmin : this.state.dropdownProducer).map((item) => (
                                <option key = {item} value = {item}>{item.substring(0, 1).toUpperCase() + item.substring(1)}</option>
                            ))
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Input type = 'submit' style = {{'margin': '50px', ...style}} value = 'Login' />
                </FormGroup>
            </Form>
        );
    }
}

export default Login;