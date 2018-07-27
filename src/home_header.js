import React from 'react';
import { Button ,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import * as Session from './Session';
import { withRouter ,NavLink } from 'react-router-dom';
import ico from './pic/icon.png';
class HomeHeader extends React.Component{
    constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
}
toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

render(){
    return (
        <div>
        <Navbar  className='navBar' expand="md">
          <NavbarBrand><h4 className='navTitle'>My Food Store<img src={ico} className='ico' alt='ico'/></h4></NavbarBrand>
          <NavbarToggler className='navCol' onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen}  navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <NavLink to='/store' className='StoreTitle' ><p  className='StoreTitle1'>Store</p></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                / <span>Cart</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to='/cart'>Cart</NavLink>
                  </DropdownItem>     
                  <DropdownItem divider />
                  <DropdownItem>
                    Calendar
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  / <span>You</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    {Session.getUser()}
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem disabled>
                    Wallet: <b>$3,091.75</b>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            <NavItem>
            <Button outline color="secondary"
                 onClick={this.props.changeCookie.bind(this)}
                   >LOG OUT</Button>
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );

}
}

export default withRouter(HomeHeader);