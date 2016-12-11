import React from 'react'
import { render } from 'react-dom'

const Hello = ({ name }) => <h1>Hello, {name}!</h1>

render(<Hello name="React"/>, document.querySelector('#app'))