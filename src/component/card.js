import React from 'react';
import {Row , Col, Popover ,PopoverHeader,PopoverBody, Button } from 'reactstrap';


class Card extends React.Component{
    render(){
        const { items , toggle, popoverOpen } = this.props;
        return(
            <div  className='padImage'>
            <span>
            <Button className='butt' id={this.props.i} onClick={toggle.bind(this)} />
            
            <img  className='sImage' src={items.image} alt={items.label}/>

            <Popover placement="top" isOpen={popoverOpen} target={this.props.i} toggle={toggle.bind(this)}>    
            <PopoverHeader style={{
                color : 'black',
                background : 'white', 
                fontSize : '13px' , 
                width : '100px',
                height : '100%'
                }}>{items.label}</PopoverHeader>
            </Popover>
            </span>
            </div>
        );
    }
}

export default Card;