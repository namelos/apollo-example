const { makeExecutableSchema } = require('graphql-tools')

const Schema = `
type Query {
  hello(name: String!): String
}
`

const Resolvers = {
  Query: {
    hello: (_, { name }) => `Hello, ${name}`
  }
}

module.exports = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers
})