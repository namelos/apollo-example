const { makeExecutableSchema } = require('graphql-tools')

const Schema = `
type Todo {
  id: Int!
  text: String
}

type Query {
  todos: [Todo]
  todo(id: Int!): Todo
  hello(name: String!): String
}

type Mutation {
  addTodo(text: String!): Todo
}
`

const generateId = (() => {
  let id = 0
  return () => id++
})()

const todos = []


const Resolvers = {
  Query: {
    todos: () => todos,
    todo: (_, {id}) => todos.find(todo => todo.id == id),
    hello: (_, {name}) => `Hello, ${name}`
  },
  Mutation: {
    addTodo: (_, {text}) => {
      let todo = { id: generateId(), text }
      todos.push(todo)
      return todo
    }
  }
}

module.exports = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers
})