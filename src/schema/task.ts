const taskTypeDefs = `#graphql
  type Task {
    id: ID
    title: String
    description: String
    status: String
    created_at: String
    updated_at: String
  }

  type Query {
    tasks: [Task]
  } 

  type Mutation {
    createTask(title: String!, description: String!, status: String!, created_at: String!): Task!
    updateTask(id: ID!, title: String!, description: String!, status: String!, updated_at: String!): Task!
    deleteTask(id: ID!): Boolean!
  }
`;

export default taskTypeDefs; 