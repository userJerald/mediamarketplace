import React from 'react';
import {Row , Col} from 'reactstrap';
import * as API from '../API'
import Card from "./card";
import moment from 'moment';
import 'moment-timezone';
class StoreBody extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'list' : [],
            'popoverOpen': false,
            'date' : moment(new Date().toISOString()).format('dddd')
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        console.log('clicked');
        this.setState({
          'popoverOpen': !this.state.popoverOpen
        });
      }
// Continue
    componentDidMount(){
        const filter = '';
        API.fetchFood(filter)
        .then((items) => {
            this.setState({
                'list': items
            })
        })
    
    }
      render(){
        const { content } = this.props;
        const { date, list } = this.state;
            return (
            <div className='border1'>
            <div>
                {list}
            </div>
            <hr/>
                <p className='todayTitle'>{date}'s Favorite</p>
                <Row className='center'>
                    {content.map((items, idx) => (    
                        <Col xs='auto'>
                            <Card popoverOpen={this.state.popoverOpen} 
                            toggle={this.toggle} items={items} i={'id-' + idx}/>
                        </Col>
                    ))}
                </Row>
                <br/>
             </div>
            );
    }
}


export default StoreBody;