import React from 'react'
import { render } from 'react-dom'
import Apollo from 'apollo-client'
import { ApolloProvider, graphql } from 'react-apollo'
import gql from 'graphql-tag'

const client = new Apollo()

const HelloComponent = ({ data }) => <h1>{data.hello}!</h1>
const HelloQuery = gql`
  query ($someName: String!){
    hello(name: $someName)
  }
`
const Hello = graphql(HelloQuery, {
  options: {variables: {someName: 'GraphQL'}}
})(HelloComponent)

render(
  <ApolloProvider client={client}>
    <Hello/>
  </ApolloProvider>, document.querySelector('#app'))