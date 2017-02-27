import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setArticle} from '../actions/index.js'
import './components.css'

class Subfeature extends Component {
  constructor(props){
    super(props)
    this.setTheArticle = this.setTheArticle.bind(this)
  }

  parseName(name){
    return name.replace(/\s/g, "").toLowerCase()
  }

  setTheArticle(){
    this.props.setNewArticle({name: this.props.name, description: this.props.description, _id: this.props._id, f_id: this.props.f_id})
  }

  render() {
    return (
      <div className='sidebar--subfeature'>
        <a onClick={this.setTheArticle} href="#">{this.props.name}</a>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {features: state.features}
}

const mapDispatchToProps = dispatch => {
  return {
    setNewArticle: (article) => {
      dispatch(setArticle(article))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subfeature)
