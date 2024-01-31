import { useState, useEffect } from "react";
import axios from "axios";
import Data from "./Data";

function ShowProductForm({ update }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://crudcrud.com/api/af404cce8c794219b455139cc8c0c14b/tshirt"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [update]);

  return (
    <div>
      {/* Display Products */}
      <div>
        <h2>Products</h2>
        {products.map((product, index) => (
          <div key={index}>
            <Data
              id={product._id}
              tshirtName={product.tshirtName}
              description={product.description}
              price={product.price}
              quantitiesL={product.quantities.L}
              quantitiesM={product.quantities.M}
              quantitiesS={product.quantities.S}
              quantitiesOL={product.quantities.OL}
              quantitiesOS={product.quantities.OS}
              quantitiesOM={product.quantities.OM}
            />

            {/* <p>Tshirt name: {product.tshirtName}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p> */}
            {/* <button onClick={handlebtnl(product._id)}>L Quantity: {product.quantities.L}</button> */}
            {/* <button onClick={handlebtn("m")}>M Quantity: {product.quantities.M}</button>
            <button onClick={handlebtn("s")}>S Quantity: {product.quantities.S}</button> */}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowProductForm;
