import React, {Component} from 'react'
import {Panel} from 'react-bootstrap'
import Subfeature from '../components/Subfeature'

class Feature extends Component {
  constructor(props){
    super(props)
    this.state = {subfeatures: []}
    for (let i = 0; i < props.subfeatures.length; i++){
      let sf = props.subfeatures[i]
      this.state.subfeatures.push(<Subfeature key={i+(i/10 + 1)} name={sf.name} description={sf.description} _id={sf._id} f_id={props._id} />)
    }
  }

  componentWillReceiveProps(nextProps){
    this.state.subfeatures = []
    for (let i = 0; i < nextProps.subfeatures.length; i++){
      let sf = nextProps.subfeatures[i]
      this.state.subfeatures.push(<Subfeature key={i+(i/10 + 1)} name={sf.name} description={sf.description} _id={sf._id} f_id={this.props._id} />)
    }
  }

  render() {
    return (
      <Panel header={this.props.name}>
        {this.state.subfeatures}
      </Panel>
    )
  }
}

export default Feature
