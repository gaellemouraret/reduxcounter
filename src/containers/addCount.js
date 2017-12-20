import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, incrementOdd } from '../actions'

let AddCount = ({ total = 0, increment, decrement, incrementOdd }) => {
    console.log('total', total)
  return (
    <div>
      <p>How many times did U click {total} ? </p>
      <button onClick={increment}>+</button> 
      <button onClick={decrement}>-</button>
      <button onClick={incrementOdd}> increment if odd </button>
    </div>
  )
}

const mapStateToProps = (state) => (
{
  total: state.count
})

const mapDispatchToProps = ({
  increment: increment,
  decrement: decrement,
  incrementOdd: incrementOdd
})

AddCount = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCount)

export default AddCount

