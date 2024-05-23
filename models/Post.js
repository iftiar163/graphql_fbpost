import mongoose from "mongoose"

// Post Schema

const postSchema = mongoose.Schema({
	authorName : {
		type : String,
		trim : true,
		required : true
	},
	authorImage : {
		type : String,
		trim : true,
	},
	postContent : {
		type : String,
		trim : true,
		default : null
	},
	postImage : {
		type : String,
		trim : true,
		default: null
	},
	status : {
		type: Boolean,
		default : true
	},
	trash : {
		type: Boolean,
		default : false
	}
}, { timestamps : true })

// Export Schema
export default mongoose.model("Post", postSchema)