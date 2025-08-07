import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    role: String!
    password: String!
  }

  type Course {
    id: ID!
    title: String!
    description: String!
    level: String!
  }

  type Enrollment {
    userId: ID!
    courseId: ID!
  }

  input UpdateCourseInput {
    title: String
    description: String
    level: String
  }

  type Query {
    getCourses: [Course!]!
    getCourseById(id: ID!): Course
    getUser(id: ID!): User
    getUserByEmail(email: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): User
    enrollUser(userId: ID!, courseId: ID!): Enrollment
    updateCourse(id: ID!, input: UpdateCourseInput!): Course
  }
`;
