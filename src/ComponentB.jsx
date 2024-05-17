import React from 'react'
import PropTypes from 'prop-types'
import ComponentC from './ComponentC'

const ComponentB = props => {
  return (
    <div className='box'>
        <h1>ComponentB</h1>
        <ComponentC />
    </div>
  )
}

ComponentB.propTypes = {}

export default ComponentB