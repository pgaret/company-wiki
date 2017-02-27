import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import './components.css'

class Title extends Component {
  constructor(props){
    super(props)
    this.state = {team: [], projects: []}
  }

  componentWillReceiveProps(nextProps){
    // if (nextProps.team.people.length !== this.state.team.length){
    //   this.state.team = []
    //   for (let i = 0; i < nextProps.team.people.length; i++){
    //     this.state.team.push(<MenuItem key={1+(.1*(i+1))}>{nextProps.team.people[i].name}</MenuItem>)
    //   }
    // }
    // if (nextProps.projects.projects.length !== this.state.projects.length){
    //   this.state.projects = []
    //   for (let i = 0; i < nextProps.projects.projects.length; i++){
    //     this.state.projects.push(<MenuItem key={2+(.1*(i+1))}>{nextProps.projects.projects[i].name}</MenuItem>)
    //   }
    // }
  }

  render(){
    return (
      <Navbar bsStyle={null} className='navbar--title'>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={'https://www.kustomer.com/frassets/images/kustomer_footer.3c3537.svg'} />
          </Navbar.Brand>
        </Navbar.Header>
        <Nav bsStyle='pills' className='navbar--options'>
          <NavDropdown eventKey={1} title='Team' id='nav-dropdown'>
            {this.state.team}
          </NavDropdown>
          <NavDropdown eventKey={2} title='Projects' id='nav-dropdown'>
            {this.state.projects}
          </NavDropdown>
          <NavItem eventKey={3} href="#">Technology</NavItem>
        </Nav>
      </Navbar>
    )
  }
}

const mapStateToProps = state => {
  return {team: state.people, projects: state.projects}
}

export default connect(mapStateToProps, {})(Title)
