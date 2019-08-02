import { GraphQLServer } from "graphql-yoga"

// Type defination (schema)

const typeDefs = `
  type Query{
    hello:String!
    name:String!
  }
`

// Resolvers

const resolvers = {
  Query:{
    hello(){
      return "Lol"
    },
    name(){
      return "name"
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(()=>
  console.log('Server started')
)