import React from 'react'
import gql from 'graphql-tag'
import Todo from './Todo'
import AddTodo from './AddTodo'
import { graphql } from 'react-apollo'

const TodosComponent = ({ data }) => <div>
  <ul>{ data.todos && data.todos.map((todo, i) => <Todo todo={todo} key={i} />) }</ul>
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
export default graphql(TodosQuery)(TodosComponent)

