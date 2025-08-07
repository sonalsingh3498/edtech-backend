import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../schema/schema';
import { resolvers } from '../schema/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = server.start();

export default async function handler(req: any, res: any) {
  await startServer;
  await server.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
export { handler as GET, handler as POST };
