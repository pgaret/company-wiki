import {combineReducers} from 'redux'
import people from './people'
import projects from './projects'
import features from './features'
import article from './article'

const rootReducer = combineReducers({
  projects: projects, people: people, features: features, article: article
})

export default rootReducer
