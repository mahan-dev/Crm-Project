import React from "react";

import Customer from "../models/Customer";
import HomePage from "../templates/HomePage";
import connectToDb from "../utils/Connection";

const Index = ({customer}) => {
  return <HomePage customer={customer} />
};

export default Index;

export const getServerSideProps = async () => {

  try {
    await connectToDb()
  
    const data = await Customer.find()
    return {
      props: {
        customer:  JSON.parse(JSON.stringify(data))
      }
    }
  } catch(error) {
    return{
      notFound: true
    }
  }

};
