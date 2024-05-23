export const typeDefs = `#graphql 

type FacebookPost {
	id : ID!
	authorName : String!
	authorImage: String
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
		createPost(authorName : String!, authorImage : String, postContent : String,postImage : String) : FacebookPost
		deletePost(id : ID!) : FacebookPost
		updatePostData(id:ID!,postContent : String, postImage : String) : FacebookPost
	}

`