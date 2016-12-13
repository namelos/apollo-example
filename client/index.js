import React from 'react'
import { render } from 'react-dom'
import Apollo from 'apollo-client'
import { ApolloProvider, graphql } from 'react-apollo'

const client = new Apollo()

import Todos from './Todos'

render(
  <ApolloProvider client={client}>
    <Todos />
  </ApolloProvider>, document.querySelector('#app'))