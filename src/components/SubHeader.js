import React from 'react';
import '../styles/Header.css'

import {Collapse, Navbar, NavbarToggler, Nav, Row, Col, Input} from 'reactstrap';
import { NavLink } from 'react-router-dom'

import SideBar from '../subcomponents/SideBar'
import ADdown from '../subcomponents/Acc_Dropdown'
import logo2 from '../assets/logo2.svg'
import logo from '../assets/logo.svg'
import Search from '../assets/Search.svg'

export default class SubHeader extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          'dropdownOpen': false,
          'expand' : false,
          'off' : false
        }
        this.toggle = this.toggle.bind(this);
        this.expand = this.expand.bind(this);  
    }
    
      expand() {
        this.setState({
          "expand": !this.state.expand,
          "off" : true
        });
      }
      
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    render(){
        const { dropdownOpen, expand , off} = this.state;
        const {toggle , bool , isOpen, login} = this.props;
        return(
        <div>
          <div className='main'>
            <Navbar light expand="xl">
            <div className='main1'>
                {login &&
                    <div className={expand ? "bars onexpand" : "bars"} onClick={this.expand}>
                        <div className='bar1'></div>
                        <div className='bar2'></div>
                        <div className='bar3'></div>
                    </div>}
            
                {bool ?  <div className='logoSearch'><NavLink to="/home">
                <img src={logo2}  alt='Logo'/></NavLink><div className='get get1'>
                <Input className='input1' type='text' placeholder='Search for Movies...'/>
                <img className='img' src={Search}  alt='Search'/></div></div>
                :<NavLink to="/home"><img src={logo}  alt='Logo'/></NavLink> }
            </div>

            <Col></Col>

            {bool && <div>
                {login ? <ADdown dropdownOpen={dropdownOpen} toggle={this.toggle}/> : <NavbarToggler onClick={toggle} /> }
                </div>}

            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto row" navbar>
                  <Col></Col>
                  <Col xs='auto' className='col'><NavLink to='/films' className='link' >MOVIES, TV &amp; OTHERS</NavLink></Col>
                  <Col xs='auto' className='col'><NavLink to='/producer' className='link' >PRODUCERS</NavLink></Col>
                  
                  {!bool && <Col xs='auto' className='col'>
                  <div className='get'><Input className='input' type='text' placeholder='Search for Movies...'/>
                  <img className='img' src={Search}  alt='Search'/></div></Col>}
                  
                  {!bool ? <Col xs='auto' className='col'>
                  <NavLink to='/search' className='link' >SEARCH &or;</NavLink></Col> :
                   <Col xs='auto' className='col'><NavLink to='/' className='link' >ADVANCED SEARCH</NavLink></Col>}
                   
                  <Col xs='auto' className='col'>
                  <NavLink to='/' className='link' >
                    {login ? <div>{!bool && 
                    <ADdown dropdownOpen={dropdownOpen} toggle={this.toggle}/>
                    }</div> 
                    
                    : 'ALREADY A MEMBER?'}
                  </NavLink></Col>
              </Nav>
              </Collapse>
          </Navbar>
          {login && <div className='subBar'>
              {bool && 
              <Row>
                <Col></Col>
                <Col xs= 'auto' className='col1'><NavLink to='/films' className='link' >MOVIES, TV &amp; OTHERS</NavLink></Col>
                <Col xs= 'auto' className='col1'><NavLink to='/producer' className='link' >PRODUCERS</NavLink></Col>
                <Col xs= 'auto' className='col1'><NavLink to='/search' className='link' >ADVANCED SEARCH</NavLink></Col>
                <Col></Col>
                </Row>}
          </div>}
          </div>
                {off && <SideBar expand={expand}/>}
        </div>
    );
}
}