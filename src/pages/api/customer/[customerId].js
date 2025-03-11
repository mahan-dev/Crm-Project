
import Customer from "../../../models/Customer";
import connectToDb from "../../../utils/Connection";


const handler = async(req, res) => {

    const delete_ = req.method === "DELETE";
    const get = req.method === "GET";
    const patch = req.method === "PATCH";

    
    

    try {
        await connectToDb(res)
    } catch(error) {
        console.log("error occurred", error)
        res
        .status(500)
        .json({status: "Failed", message: "can not connect to db"})
        return ;
    }
    
    if(delete_) {
        const {customerId: id} = req.query;
        try {
            const customer = await Customer.findOneAndDelete({_id: id})
            res
            .status(200)
            .json({status: "Success", message: "Data deleted", data:{customer}})
        } catch(error) {
            
            res.status(500).json({status: "Failed", message:"data hasn't been deleted"})
        }
    } else if(get) {
        const {customerId: id} = req.query
        try {
            const customer = await Customer.findOne({_id: id})
            res
            .status(200)
            .json({status:"Success", message:"data Fetched", data:customer})

        } catch(error) {
            res
            .status(500)
            .json({status: "Failed", message:"data hasn't been fetched"})
        }

    } else if(patch) {
        const {customerId: id} = req.query;
        const {data} = req.body;
        const {product} = data;
        try {
            const customer = await Customer.findOne({_id: id})
            customer.name = data.name
            customer.lastName = data.lastName
            customer.email = data.email
            customer.product = data.product
            customer.date = data.date
            customer.price = data.price
            customer.quantity = data.quantity
            customer.updatedAt = data.updatedAt
            await customer.save()
            res 
            .status(200)
            .json({status: "Success", message: "data has been updated", data: {customer}})
        } catch(error) {
            res
            .status(500)
            .json({status:"Failed", message: "data hasn't been updated", error})
        }
    }

}


export default handler;