import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import {saveArticle, finishArticle} from '../actions/index.js'
import './components.css'

class Article extends Component {
  constructor(props){
    super(props)
    this.saveTheArticle = this.saveTheArticle.bind(this)
    this.finishTheArticle = this.finishTheArticle.bind(this)
    // console.log(props)
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }

  saveTheArticle(event){
    let new_article = {}
    for (let i = 0; i < event.target.parentElement.children.length; i++) {
      if (event.target.parentElement.children[i].className.includes('text')) {
        new_article[event.target.parentElement.children[i].id] = event.target.parentElement.children[i].value
      }
    }
    this.props.saveArticle({...new_article, _id: this.props.article.article._id, f_id: this.props.article.article.f_id})
  }

  finishTheArticle(event){
    let new_article = {}
    for (let i = 0; i < event.target.parentElement.children.length; i++) {
      if (event.target.parentElement.children[i].className.includes('text')) {
        new_article[event.target.parentElement.children[i].id] = event.target.parentElement.children[i].value
      }
    }
    this.props.finishArticle({...new_article, _id: this.props.article.article._id, f_id: this.props.article.article.f_id})
  }

  render(){
    return (
      <div className='col-md-6 article'>
        <FormGroup controlId='formControlsTextarea'>
          <Button onClick={this.saveTheArticle} className='article--edit_button' bsStyle='primary'>Save</Button>
          <Button onClick={this.finishTheArticle} className='article--edit_button' bsStyle='primary'>Done</Button>
          <br/>
          <ControlLabel>Name</ControlLabel>
          <FormControl className='text' id='name' componentClass='textarea' placeholder='Article Name' defaultValue={this.props.article.article.name} />
          <ControlLabel>Description</ControlLabel>
          <FormControl className='text' id='description' componentClass='textarea' placeholder='Article Description' defaultValue={this.props.article.article.description} />
        </FormGroup>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {article: state.article}
}

const mapDispatchToProps = dispatch => {
  return {
    saveArticle: (article) => {
      dispatch(saveArticle(article))
    },
    finishArticle: (article) => {
      dispatch(finishArticle(article))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
