const fs = require('fs')
const path = require('path')
const { makeExecutableSchema } = require('graphql-tools')
const { graphql, introspectionQuery } = require('graphql')

const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8')

const generateId = (() => {
  let id = 0
  return () => id++
})()

const todos = []

const resolvers = {
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

const Schema = makeExecutableSchema({ typeDefs, resolvers })

graphql(Schema, introspectionQuery)
  .then(schema => fs.writeFile(path.join(__dirname, 'schema.json'),
    JSON.stringify(schema, null, 2),
    err => err && console.log(`write schema failed: ${err}`)))
  .catch(err => err && console.log(`parse schema failed: ${err}`))

module.exports = Schema