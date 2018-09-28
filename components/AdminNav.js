import React, { Component } from 'react';
import {NavLink as NavL, withRouter} from 'react-router-dom';
import {Nav, NavItem, NavLink, Button} from 'reactstrap';

import * as SESSION from '../services/session';
import * as PERMISSION from '../helpers/permission';

class AdminNav extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        SESSION.setUser(null);

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Nav>
                    {PERMISSION.enumerateMenus(SESSION.getUserrole()).map(menu => <AdminNavItem key = {menu.title} menu = {menu} />)}

                    <NavItem>
                        <Button onClick = {this.logout}>Logout</Button>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

const AdminNavItem = (props) => (
    <NavItem>
        <NavLink tag = {NavL} to = {props.menu.url} activeClassName = 'activeNav'>{props.menu.title}</NavLink>
    </NavItem>
)

export default withRouter(AdminNav);