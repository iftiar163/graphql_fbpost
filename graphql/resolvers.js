import Post from "../models/Post.js"


export const resolvers = {
	Query : {
		getAllPost : async() => {
			return await Post.find();
		},
		singlePost : async (_, {id}) => {
			const data =  await Post.findById(id);
			return data;
		}
	},

	Mutation : {
		createPost: async (_, {authorName,postContent,postImage}) => {
			const data = await Post.create({authorName,postContent,postImage});
			return data;
		}
	}
}