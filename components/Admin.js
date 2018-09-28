import React, { Component } from 'react';

import AdminNav from './AdminNav';
import AdminCont from './AdminCont';

class Admin extends Component {
    render() {
        return (
            <div>
                <AdminNav />
                <AdminCont />
            </div>
        );
    }
}

export default Admin;