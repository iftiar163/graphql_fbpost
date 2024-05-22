import mongoose from "mongoose"

// Database Connection
const connectMongoDB = async () => {
	try{
		//connect Database
		const connection = mongoose.connect(process.env.MONGODB_URL)
		console.log(`Database Connected`.bgCyan.black)
	}
	catch(error){
		console.log(`Database Connection Failed`.bgRed.black)

	}
}


// Export Default
export default connectMongoDB