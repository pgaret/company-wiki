export default function article(state = [], action){
  let new_article = {}
  switch(action.type){
    case 'SET_ARTICLE':
      return {...state, article: action.payload}
    case 'EDIT_ARTICLE':
      new_article = {name: state.article.name, description: state.article.description, _id: state.article._id, f_id: state.article.f_id, edit: true, saved: false}
      return {...state, article: new_article}
    case 'SAVE_ARTICLE':
      new_article = {name: action.payload.article.name, description: action.payload.article.description, _id: action.payload.article._id, f_id: state.article.f_id, edit: true, saved: false}
      return {...state, article: new_article}
    case 'FINISH_ARTICLE':
      new_article = {name: action.payload.article.name, description: action.payload.article.description, _id: action.payload.article._id, f_id: state.article.f_id, edit: false, saved: false}
      return {...state, article: new_article}
    default:
      return state
  }
}
