import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Panel} from 'react-bootstrap'
import Feature from './Feature'
import './containers.css'

class Sidebar extends Component {
  constructor(props){
    super(props)
    this.state = {features: []}
  }

  componentWillReceiveProps(nextProps){
    if (this.state.features.length !== nextProps.features.features.length){
      this.state.features = []
      for (let i = 0; i < nextProps.features.features.length; i++){
        let feature = nextProps.features.features[i]
        this.state.features.push(<Feature key={i+(i/10 + 1)} name={feature.name} subfeatures={feature.subfeatures} _id={feature._id} />)
      }
    }
  }

  render(){
    return (
      <div className='col-md-3 sidebar'>
        {this.state.features}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {features: state.features}
}

export default connect(mapStateToProps, {})(Sidebar)
