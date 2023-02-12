import React from "react";
import { useOutletContext } from "react-router-dom";

function Products() {
  const data = useOutletContext();
  console.log(data);
  return (
    <div>
      <h1>Our Products</h1>

      <div>
        {data?.data.map((el, _id) => (
          <div key={el._id}>
            <img src={el.picture} />
            <p>{el.title}</p>
            <p>{el.artist}</p>
            <p>{el.price}</p>
            <p>{el.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
