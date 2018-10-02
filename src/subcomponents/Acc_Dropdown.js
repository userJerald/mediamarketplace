import React from 'react'
import { connect } from 'react-redux' 
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import acc from '../assets/Acc.svg';
import set from '../assets/setting.svg';
import log from '../assets/logout.svg';
class ADdown extends React.Component{
  render(){
    const { dropdownOpen , toggle, item } = this.props;
    var items = Object.keys(item).map((key) => item[key])
    console.log(items)
    items = items.map((text) => text)
  return (
  <div>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
   <DropdownToggle 
   tag="span"  
   data-toggle="dropdown"
   aria-expanded={dropdownOpen}>
   <img className='acc' src={acc} alt='Account' /> 
   </DropdownToggle>
   <DropdownMenu right className='accMain'>
   <div className='div'>
       <div><NavLink to="/" className='link' >My Account</NavLink></div>
       <div><NavLink to='/' className='link' >Message</NavLink></div>
       <div><NavLink to='/' className='link' >Notification</NavLink></div>
       <div><hr/></div>
       <div><img src={set}  alt='Help'/><NavLink to='/' className='link' >&nbsp; Account Settings</NavLink></div>
       <div><img src={log}  alt='Logout'/><NavLink to='/' className='link' >&nbsp; Logout</NavLink></div>
       <div>{items}</div>
   </div>
   </DropdownMenu>
   </Dropdown>
   </div>
  );
}
}

function mapStateToProps({item}) {
    return {item}
}


export default connect(mapStateToProps, null)(ADdown);