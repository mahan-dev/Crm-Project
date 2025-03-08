import React from "react";
import FormInput from "./FormInput";
import styles from "./itemList.module.css";
import ProductsList from "./ProductsList";
import toast from "react-hot-toast";

const Form = ({ form, setForm }) => {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };





  const formFields = [
    {
      name: "name",
      type: "text",
      label: "Name",
    },
    {
      name: "lastName",
      type: "text",
      label: "Last Name",
    },
    {
      name: "email",
      type: "name",
      label: "Email",
    },

    {
      name: "date",
      type: "date",
      label: "Date",
    },
  ];

 
  return (
    <section>
      <section
        className={`${styles["list__item"]} ${styles["list__item-first"]}`}
      >
        {formFields.map((item, index) => {
          const { name, type, label } = item;

          return (
            <FormInput
              name={name}
              type={type}
              label={label}
              value={form[name]}
              key={index}
              onChange={changeHandler}
            />
          );
        })}
      </section>
      <ProductsList form={form} setForm={setForm} />
     
    </section>
  );
};

export default Form;
