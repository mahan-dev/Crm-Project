import styles from "./itemList.module.css";
import ProductField from "./ProductField";

const ProductsList = ({ form, setForm }) => {
  const { product } = form;

  const formFields = [
    { name: "price", label: "Price", type: "text" },
    { name: "quantity", label: "Quantity", type: "text" },
  ];

  const addHandler = () => {
    setForm({
      ...form,
      product: [...product, { name: "", price: "", quantity: "" }],
    });
  };

  const changeHandler = (e, index) => {
    const { value, name } = e.target;
    const newProduct = [...product];
    newProduct[index][name] = value;
    setForm({ ...form, product: newProduct });
  };

  const removeHandler = (index) => {
    const newProduct = [...product];
    newProduct.splice(index, 1);
    setForm({
      ...form,
      product: newProduct,
    });
  };

  return (
    <section className={styles.list}>
      <h2> Purchased Products</h2>

      <ProductField
        formFields={formFields}
        form={form}
        setForm={setForm}
        addHandler={addHandler}
        removeHandler={removeHandler}
        product={product}
        onChange={changeHandler}
      />

      <div className="list__add-button">
        <button onClick={addHandler}>Add Product</button>
      </div>
    </section>
  );
};

export default ProductsList;
