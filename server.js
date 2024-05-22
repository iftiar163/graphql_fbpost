import dotenv from "dotenv"
import colors from "colors"
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import {typeDefs} from "./graphql/typeDefs.js"
import { resolvers } from "./graphql/resolvers.js"
import connectMongoDB from "./config/mongoDB.js"

// Env Var
dotenv.config()

// Init Port
const PORT = process.env.PORT || 9090

// Init Server
const server = new ApolloServer({
	typeDefs,
	resolvers,
});


// Server Listen
const runServer = async () => {
	await startStandaloneServer(server, {
		listen : {
			port : PORT
		}
	})

	console.log(`Server is running on port ${PORT}`.bgGreen.black)
	connectMongoDB()
}

runServer()
