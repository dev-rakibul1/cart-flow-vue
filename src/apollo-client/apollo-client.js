import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";

const httpLink = new HttpLink({
  uri: "https://cart-flow-graphql.onrender.com/", // Replace with your GraphQL endpoint
  // uri: "http://localhost:4000/", // Replace with your GraphQL endpoint
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export default apolloClient;
