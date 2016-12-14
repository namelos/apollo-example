import React from 'react'
import gql from 'graphql-tag'

const Todo = ({ todo: { id, text } }) => <li>{id}: {text}</li>

Todo.fragments = {
  todo: gql`
    fragment Todo on Todo {
      id
      text
    }
  `
}

export default Todo
