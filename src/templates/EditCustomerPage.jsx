import React, { useState } from 'react';
import styles from "../styles/addCustomer.module.css"
import { useRouter } from 'next/router';
import Form from '../module/Form';
import toast from 'react-hot-toast';
import moment from 'moment';

const EditCustomerPage = ({data, id}) => {

     const date = data.date? moment(data.date).utc().format("YYYY-MM-DD"): ''

    const [form, setForm] = useState({
      name : data.name,
      lastName : data.lastName,
      email: data.email,
      product: data.product || "",
      date: date
    })
     const router = useRouter()

  console.log(form.product)
     const saveHandler = async()=>{
        const res = await fetch(`/api/customer/${id}`, {
            method: "PATCH",
            body: JSON.stringify({data:form}),
            headers: {"Content-Type": "application/json"}
        })
        const data= await res.json()
        const success = data.status === "Success";
        if(success) {
            toast.success("data updated")
            await new Promise(resolver => setTimeout(resolver, 2000))
            router.push("/")
        }

     }

    return (
        <section className={styles["add-customer"]}>
      <h2>Edit Customers</h2>
      <Form form={form} setForm={setForm} />
      <section className={styles["add-customer__buttons"]}>
        <button className="button-style--cancel" onClick={() => router.push("/") }>
          cancel
        </button>
        <button className="button-style--save" onClick={saveHandler}>
          save
        </button>
      </section>
      </section>
    );
};

export default EditCustomerPage;