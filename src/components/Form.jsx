import { useState } from "react";
import axios from "axios";
import ShowProductForm from "./ShowProduct";
import Cart from "./Cart";

function ProductForm() {
  const [formData, setFormData] = useState({
    tshirtName: "",
    description: "",
    price: "",
    quantities: {
      L: 0,
      M: 0,
      S: 0,
      OL:0,
      OM:0,
      OS:0,
    },
  });
  const [update, setUpdate] = useState(false)

  console.log(formData)
 
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleQuantityChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      quantities: {
        ...formData.quantities,
        [name]: value,
        ["O"+name]:value,
      },
    });
  };

  const handleAddProduct = async () => {
    const newProduct = {
      ...formData,
      
    };
    setProducts([...products, newProduct]);

    try {
        await axios.post(
          "https://crudcrud.com/api/af404cce8c794219b455139cc8c0c14b/tshirt",
          newProduct
        );
        setUpdate(!update); // Toggle update state to trigger re-render
      } catch (error) {
        console.error("Error adding product:", error);
      }
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="tshirtName">Tshirt name:</label>
          <input
            type="text"
            id="tshirtName"
            name="tshirtName"
            value={formData.tshirtName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantityL">L:</label>
          <input
            type="number"
            id="quantityL"
            name="L"
            value={formData.quantities.L}
            onChange={handleQuantityChange}
          />
        </div>
        <div>
          <label htmlFor="quantityM">M:</label>
          <input
            type="number"
            id="quantityM"
            name="M"
            value={formData.quantities.M}
            onChange={handleQuantityChange}
          />
        </div>
        <div>
          <label htmlFor="quantityS">S:</label>
          <input
            type="number"
            id="quantityS"
            name="S"
            value={formData.quantities.S}
            onChange={handleQuantityChange}
          />
        </div>
        <button type="button" onClick={handleAddProduct}>
          Add product
        </button>
      </form>

      {/* Display Products */}
      <div>
        
        <ShowProductForm update={update}/>
      </div>
      <Cart/>
    </div>
  );
}

export default ProductForm;
