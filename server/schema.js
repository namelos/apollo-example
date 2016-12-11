const { makeExecutableSchema } = require('graphql-tools')

const Schema = `
type Query {
  hello: String
}
`

const Resolvers = {
  Query: {
    hello: () => 'GraphQL'
  }
}

module.exports = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers
})