import React from "react";
import FormInput from "./FormInput";
import styles from "./itemList.module.css"

const ProductField = (props) => {
  const { product, formFields, onChange, removeHandler } = props;
  return (
    <>
    {
      product.length ? product.map((productItem, index) => (
        <div className={styles.list__item} key={index}>
          <div className={styles["list__item-first"]}>
            <FormInput
              name="name"
              type="text"
              label="Product Name"
              value={productItem.name}
              onChange={(e) => onChange(e, index)}
            />
          </div> 
          <div className={` ${styles["list__item-second"]}`}>
            {formFields.map((field) => {
              const { name, type, label } = field;
              return (
                <FormInput
                  key={name}
                  name={name}
                  type={type}
                  label={label}
                  value={productItem[name]}
                  onChange={(e) => onChange(e, index)}
                />
              );
            })}
          </div>
          <button
            className="list__remove-button"
            onClick={() => removeHandler(index)}
          >
            remove Item
          </button>
        </div>
      )) : (<p> not purchased yet</p>)
    }
     
    </>
  );
};

export default ProductField;
