import React from "react";
import { dateFormatter } from "../helper/dateFormatter";
const CustomerDetailPage = ({ data }) => {
  const { name, lastName, date, updatedAt, product } = data;

  return (
    <section className="details-customer-page">
      <div className="details-customer-page__info">
        <p>
          <span className="text-[#ff5a93]">name</span>: {name}
        </p>
        <p>
          <span className="text-[#ff5a93]">lastName</span>: {lastName}
        </p>
        <p>
          <span className="text-[#ff5a93]">date</span>:{" "}
          {date ? dateFormatter(date) : "not found"}{" "}
        </p>
        <p>
          <span className="text-[#ff5a93]">updatedAt</span>:{" "}
          {dateFormatter(updatedAt)}
        </p>
      </div>

      {
        <section className="customer-page__products">
          <h3>Purchased Products</h3>
          {product.length ? (
            product?.map((product, index) => (
              <section key={index}>
                <p>{product.name}</p>
              </section>
            ))
          ) : (
            <span className="text-center mt-5"> Sorry | Nothing Found </span>
          )}
        </section>
      }
    </section>
  );
};

export default CustomerDetailPage;
