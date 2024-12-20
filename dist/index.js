import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import taskTypeDefs from "./schema/task.js";
import taskResolvers from "./resolvers/task.js";
const server = new ApolloServer({
    typeDefs: [taskTypeDefs],
    resolvers: [taskResolvers],
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀 Server ready at: ${url}`);
;
