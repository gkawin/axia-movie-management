const { buildSchema } = require('graphql')

module.exports = buildSchema(/* GraphQL */`
  type Query {
    movies(limit: Int = 10, offset: Int, sort: String): [Movie]
    movie(id: Int, name: String): Movie
  }
  type Movie {
    id: ID!
    name: String!
    country: String
    rating: String
  }
  type User {
    id: ID!
    position: Position!
  }
  enum Rating {
    G
    PG
    M
    MA
    R
  }
  enum Position {
    MANAGER
    TEAMLEADER
    FLOORSTAFF
  }
`)
