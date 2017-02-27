import axios from 'axios'

export const loadPeople = (people) => {
  return {type: 'GET_PEOPLE', payload: people}
}

export const queryPeople = () => {
  return function(dispatch){
    axios({method:'GET', url:'http://localhost:9000/api/v1/people'}).then(result=>{
      dispatch(loadPeople(result.data.people))
    }).catch(response=>{
      // console.log(response)
    })
  }
}

export const loadProjects = (projects) => {
  return {type: 'GET_PROJECTS', payload: projects}
}

export const queryProjects = () => {
  return function(dispatch){
    axios({method:'GET', url:'http://localhost:9000/api/v1/projects'}).then(result=>{
      dispatch(loadProjects(result.data.projects))
    }).catch(response=>{
      // console.log(response)
    })
  }
}

export const loadFeatures = (features) => {
  return {type: 'GET_FEATURES', payload: features}
}

export const queryFeatures = () => {
  return function(dispatch){
    axios({method:'GET', url:'http://localhost:9000/api/v1/features'}).then(result=>{
      dispatch(loadFeatures(result.data.features))
    }).catch(response=>{
      // console.log(response)
    })
  }
}

export const setArticle = (article) => {
  return {type: 'SET_ARTICLE', payload: article}
}

export const setDefaultArticle = () => {
  return {type: 'SET_ARTICLE', payload: {name: 'Kustomer', description: 'Awesome Customer Service Startup', edit: false, saved: false}}
}

export const editArticle = () => {
  return {type: 'EDIT_ARTICLE'}
}

export const finishSaving = (article) => {
  return {type: 'SAVE_ARTICLE', payload: {article: article}}
}

export const finishEditing = (article) => {
  return {type: 'FINISH_ARTICLE', payload: {article: article}}
}

export const updateFeatures = (article) => {
  return {type: 'UPDATE_FEATURES', payload: {article: article}}
}

export const handleSaving = (article) => {
  return function(dispatch){
    dispatch(finishSaving(article))
    dispatch(updateFeatures(article))
  }
}

export const handleEditing = (article) => {
  return function(dispatch){
    dispatch(finishEditing(article))
    dispatch(updateFeatures(article))
  }
}

export const saveArticle = (article) => {
  return function(dispatch){
    axios({method: 'PATCH', url:'http://localhost:9000/api/v1/features/'+article.f_id+"/"+article._id, data: article}).then(result=>{
      dispatch(handleSaving(article))
    }).catch(response=>{
      //  console.log(response)
    })
  }
}

export const finishArticle = (article) => {
  return function(dispatch){
    console.log(article)
    axios({method: 'PATCH', url:'http://localhost:9000/api/v1/features/'+article.f_id+"/"+article._id, data: article}).then(result=>{
      dispatch(handleEditing(article))
    }).catch(response=>{
      //  console.log(response)
    })
  }
}
