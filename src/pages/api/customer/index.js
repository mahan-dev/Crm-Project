import Customer from "../../../models/Customer";
import connectToDb from "../../../utils/Connection";


const handler = async (req, res) => {
  const post = req.method === "POST";
  const { data } = req.body;
  console.log(data)

  try {
    await connectToDb(res);
  } catch (error) {
    console.log("error occurred", error);
    res
      .status(500)
      .json({ status: "Failed", message: "error connecting to db" });
    return;
  }

  if (post) {
   
    if (!data.name || !data.lastName || !data.email)
      return res
        .status(400)
        .json({ status: "Failed", message: "Invalid Data" });

    try {
      const customer = await Customer.create(data);
      res
        .status(201)
        .json({
          status: "Success",
          message: "data created Successfully",
          data:{customer},
        });
    } catch (error) {
      console.log("error occurred", error);
    
      res
        .status(500)
        .json({
          status: "Failed",
          message: "can not create data in db",
          error,
        });
    }
  }
};

export default handler;
