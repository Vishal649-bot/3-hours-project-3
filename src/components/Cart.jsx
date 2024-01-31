import { useEffect, useState } from "react";
import axios from "axios";
import CartData from "./CartData";
const Cart = () => {
  const [products, setProducts] = useState([]);

  console.log(products);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://crudcrud.com/api/af404cce8c794219b455139cc8c0c14b/tshirt"
        );
        setProducts(response.data); // Assuming the response contains an array of products
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        {/* Display Products */}
        <div>
          <h2>CART</h2>
          {products.map((product, index) => (
            <CartData
              key={index}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
