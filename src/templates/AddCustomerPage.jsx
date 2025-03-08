import React, { useState } from 'react';
import styles from "../styles/addCustomer.module.css"
import Form from '../module/Form';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
const AddCustomerPage = () => {

    const [form, setForm] = useState({
        name: '',
        lastName: '',
        email: '',
        date: "",
        product: [],
    }) 



    const router = useRouter()
    const saveHandler =  async()=>{
        const res = await fetch(`/api/customer`, {
            method:'POST',
            body: JSON.stringify({data: form}),
            headers: {"Content-Type": "application/json"}
        })
        const data = await res.json();

        if(data.status === "Success"){ 
            toast.success("has been added")
            await new Promise(resolver => setTimeout(resolver, 2000))
            router.push("/")
        }
        if(data.status==="Failed")
        {
            toast.error("hasn't been added")
            await new Promise(resolver => setTimeout(resolver, 2000))
        }
    }
     const cancelHandler =()=>{
      
     }


    return (
        <section className={styles["add-customer"]}>
            <h2>Add New Customer</h2>
            <Form form={form} setForm={setForm} />
            <section className={styles["add-customer__buttons"]}>

        <button className="button-style--cancel" onClick={cancelHandler}>cancel</button>
        <button className="button-style--save" onClick={saveHandler}>save</button>
        
      </section>
        </section>
    );
};

export default AddCustomerPage;