import connectToDb from "./Connection";


const isConnected = async(res)=>{
    try {
        await connectToDb()
    }
    catch(error) {
        console.log('error', error)
        res
        .status(500)
        .json({status:'Failed', message: "can not connect to db!", error})
    }

}
export default isConnected;


