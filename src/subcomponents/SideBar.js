import React from 'react'
import { NavLink } from 'react-router-dom';

import Item from '../subcomponents/SideItem'
import '../styles/SideBar.css'
import * as Link from '../subcomponents/SideItemLink'

class SideBar extends React.Component{
  render(){
      const { expand } = this.props;    
    return (
        <div>
        <div className={expand ? "sbar" : "sbaroff"}>
            <ul className='nav'>
                <Item />
            </ul>
            <div className='nav-h' />
            <ul className='nav'>
                <li className='item svgfill'>
                <NavLink to='/history' className='link' >
                {Link.history}
                <span className='px-3'>
                    History
                    </span>
                </NavLink>
                </li>
                <li className='item svgfill'>
                <NavLink to='/help' className='link'>
                {Link.help}
                <span className='px-3'>
                    Help
                    </span>
                </NavLink>
                </li>
            </ul>
            <span className='footer px-3'>© 2018 Media Marketplace, CDI</span>
        </div>
   </div>
  );
}
}

export default SideBar;
