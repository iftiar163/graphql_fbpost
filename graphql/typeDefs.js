export const typeDefs = `#graphql 

type FacebookPost {
	id : ID!
	authorName : String!
	postContent : String
	postImage : String
	status : Boolean
	trash : Boolean
	createdAt : String
	updatedAt : String
}



	type Query {
		getAllPost : [FacebookPost]
		singlePost(id : ID) : FacebookPost
	}


	type Mutation {
		createPost(authorName : String!,postContent : String,postImage : String) : FacebookPost
	}

`