import React, { Component } from 'react';

import ProducerNav from './ProducerNav';
import ProducerCont from './ProducerCont';

class Producer extends Component {
    render() {
        return (
            <div>
                <ProducerNav />
                <ProducerCont />
            </div>
        );
    }
}

export default Producer;