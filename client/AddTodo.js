import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Todo from './Todo'

const AddTodoComponent = ({ mutate, data }) => {
  let input
  const handleSubmit = e => {
    e.preventDefault()
    mutate({variables: {text: input.value}})
      .then(_ => data.refetch())
  }
  return <form onSubmit={ handleSubmit }>
    <input type="text" ref={ el => input = el }/>
  </form>
}

const AddTodoMutation = gql`
  mutation addTodo($text: String!){
    addTodo(text: $text) {
      ...TodoItem
    }
  }
  ${Todo.fragments.todo}
`
export default graphql(AddTodoMutation)(AddTodoComponent)

