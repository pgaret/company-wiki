export default function people(state = [], action){
  switch(action.type){
    case 'GET_PEOPLE':
      return Object.assign({}, state, {people: action.payload})
    default:
      return state
  }
}
