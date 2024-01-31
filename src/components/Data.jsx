import axios from "axios";

const Data = (param) => {
  const obj = {
    tshirtName: param.tshirtName,
    description: param.description,
    price: param.price,
    quantities: {
      L: param.quantitiesL,
      M: param.quantitiesM,
      S: param.quantitiesS,
      OL: param.quantitiesOL,
      OS: param.quantitiesOS,
      OM: param.quantitiesOM,
    },
  };

  console.log(obj)

  const handleQuantityUpdate = async (size) => {
    // Decrease the quantity of the selected size by 1
    const updatedQuantities = {
      ...obj.quantities,
      [size]: obj.quantities[size] - 1,
    };

    const updatedData = {
      ...obj,
      quantities: updatedQuantities,
    };

    try {
      const response = await axios.put(
        `https://crudcrud.com/api/af404cce8c794219b455139cc8c0c14b/tshirt/${param.id}`,
        updatedData
      );
      console.log(response);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  return (
    <div>
      <p>Tshirt name: {param.tshirtName}</p>
      <p>Description: {param.description}</p>
      <p>Price: {param.price}</p>
      <button onClick={() => handleQuantityUpdate('L')}>L Quantity: {param.quantitiesL}</button>
      <button onClick={() => handleQuantityUpdate('M')}>M Quantity: {param.quantitiesM}</button> 
      <button onClick={() => handleQuantityUpdate('S')}>S Quantity: {param.quantitiesS}</button> 
      <hr />
    </div>
  );
};

export default Data;
