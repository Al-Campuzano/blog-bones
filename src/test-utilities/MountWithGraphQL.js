import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {createGraphQLFactory, GraphQL} from '@shopify/graphql-testing';
import {createMount} from '@shopify/react-testing';

// See graphql-testing docs for details
const createGraphQL = createGraphQLFactory();

// Now, we can create our custom mount function! Unfortunately, due to limitations in
// TypeScript, you usually need to pass all the generic arguments, including the last
// one, which specifies whether your `afterMount` is async or not.
export const mountWithGraphQL = createMount({
  // Step one: convert Options to Context
  context({graphQL = createGraphQL()}) {
    return {graphQL};
  },
  // Step two: use Context and Options to render the element under the test
  // with the necessary providers
  render(element, {graphQL}) {
    return <ApolloProvider client={graphQL.client}>{element}</ApolloProvider>;
  },

});
