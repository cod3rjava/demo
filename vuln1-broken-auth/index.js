// services/vuln1-broken-auth/index.js
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
  }
  type Query {
    users: [User!]!
  }
`;

const users = [
  { id: '1', email: 'alice@example.com', password: 'password123' },
  { id: '2', email: 'bob@example.com',   password: 'qwerty' }
];

const resolvers = {
  Query: {
    users: () => users
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚨 Broken-Auth Lab running at ${url}`);
});
