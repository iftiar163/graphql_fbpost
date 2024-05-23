import Post from "../models/Post.js";


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
		createPost: async (_, {authorName,authorImage,postContent,postImage}) => {
			const data = await Post.create({authorName,authorImage,postContent,postImage});
			return data;
		},
		
		deletePost : async(_, {id}) => {
			const data = await Post.findByIdAndDelete(id);
		},

		updatePostData : async (_, {id,postContent,postImage}) => {
			const data = await Post.findByIdAndUpdate(id,{postContent,postImage}, {new : true});
			return data;
		}
	}
} 