import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import {editArticle} from '../actions/index.js'
import './components.css'

class Article extends Component {
  constructor(props){
    super(props)
    this.editModeOn = this.editModeOn.bind(this)
  }

  editModeOn(event){
    this.props.editTheArticle()
  }

  render(){
    return (
      <div className='col-md-6 article'>
        <Button onClick={this.editModeOn} className='article--edit_button' bsStyle='primary'>Edit</Button>
        <p className='article--name'>{this.props.article.article.name}</p>
        <p className='article--desc'>{this.props.article.article.description}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {article: state.article}
}

const mapDispatchToProps = dispatch => {
  return {
    editTheArticle: () => {
      dispatch(editArticle())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
