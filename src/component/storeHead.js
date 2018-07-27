import React from 'react';
import { NavLink } from 'react-router-dom';

class StoreHead extends React.Component{
    render(){
        const { content } = this.props;
        const list = [];
        for(let x in content){
            list.push(
                <div className='headHov'>
                <div className='blockSD'>
                <div className='blockCircle'>
                <img src={content[x].source} className='image' alt={content[x].id}/>
                <h1>{content.id}</h1>
                </div>
                </div>
                </div>
            )
        }
            return (
                <div style={{display : 'inline'}}>
                <div className='block'>
                {list}
                </div>
                </div>
            );
    }
}

export default StoreHead;