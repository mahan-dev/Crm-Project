import React from "react";
import isConnected from "../utils/IsConnected";
import Customer from "../models/Customer";
import HomePage from "../templates/HomePage";

const Index = ({customer}) => {
  return <HomePage customer={customer} />
};

export default Index;

export const getServerSideProps = async () => {

  try {
    await isConnected()
  
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
