import React, { Component } from 'react';
import {connect} from 'react-redux'
import Article from '../components/Article'
import EditArticle from '../components/EditArticle'
import Title from '../components/Title'
import Sidebar from './Sidebar'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {edit: false}
  }

  componentWillReceiveProps(nextProps){
    this.state.edit = nextProps.article.article.edit
  }

  render() {
    let article = this.state.edit ? <EditArticle /> : <Article />
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
        <Title />
        <Sidebar />
        {article}
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {article: state.article}
}

export default connect(mapStateToProps, {})(App)
