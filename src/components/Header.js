import React from 'react';
import SubHeader from '../components/SubHeader';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {  
      'isOpen': false,
      'bool' : '',
      'login' : true,
      'width' : window.innerWidth
    };
    this.resize = this.resize.bind(this);}

  componentDidMount(){
    window.addEventListener('resize', this.resize)
    this.resize()}

  resize(){
        this.setState({
            'width' : window.innerWidth
          });
       if(this.state.width <= 1198){
           this.setState({
                'bool' : true
           });}
       else{
        this.setState({
            'bool' : false
       });}}

    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }

render(){
  const { login, bool, isOpen, width } = this.state;
      return (
        <div>
          <SubHeader login={login} toggle={this.toggle} bool={bool} isOpen={isOpen} width={width} />
        </div>
    );
  }
}

export default Header;