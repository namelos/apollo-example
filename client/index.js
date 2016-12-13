import React from 'react'
import { render } from 'react-dom'
import Apollo from 'apollo-client'
import { ApolloProvider, graphql } from 'react-apollo'
import gql from 'graphql-tag'

const client = new Apollo()

const Todo = ({ todo: { id, text } }) => <li>{id}: {text}</li>
Todo.fragments = {
  todo: gql`
    fragment TodoItem on Todo {
      id
      text
    }
  `
}


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
      text
      id
    }
  }
`
const AddTodo = graphql(AddTodoMutation)(AddTodoComponent)

const TodosComponent = ({ data }) => <div>
  <ul>
    { data.todos && data.todos.map((todo, i) => <Todo todo={todo} key={i} />) }
  </ul>
  <AddTodo data={data} />
</div>
const TodosQuery = gql`
  query {
    todos {
      ...TodoItem
    }
  }
  ${Todo.fragments.todo}
`
const Todos = graphql(TodosQuery)(TodosComponent)

render(
  <ApolloProvider client={client}>
    <Todos />
  </ApolloProvider>, document.querySelector('#app'))