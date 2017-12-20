const count = (state = 0, action) => {
  console.log('state', state, 'action ', action)
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'INCREMENT_ODD':
    if(state % 2) {
      return state + 1
    }
    
    default:
      return state
  }
}

export default count