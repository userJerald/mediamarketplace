import React from 'react'
import { NavLink } from 'react-router-dom'
import * as Link from './SideItemLink';
import '../styles/SideBar.css'

export default class SideItem extends React.Component{
    render(){
        const items = [];
        Link.sideitem.map((item) => 
        items.push(
            <li className='item svgfill'>
            <NavLink exact to={item.url} className='link'>
                {item.src}
                <span className='px-3'>
                    {item.title}
                    </span>
                </NavLink>
            </li>
        ));
        return items;
    }
}