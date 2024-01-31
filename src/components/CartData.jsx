
const CartData = (param) => {
    if(param.quantitiesOL ===param.quantitiesL && param.quantitiesOM === param.quantitiesM && param.quantitiesOS === param.quantitiesS){
        return null
    }
  return (

    <div>
        <p>Tshirt name: {param.tshirtName}</p>
      <p>Description: {param.description}</p>
      <p>Price: {param.price}</p>
      {param.quantitiesOL === param.quantitiesL ?null:
      <div>L Quantity: {param.quantitiesOL - param.quantitiesL}</div>
      }
      {param.quantitiesOM === param.quantitiesM ?null: <div>M Quantity: {param.quantitiesOM - param.quantitiesM}</div> }
     {param.quantitiesOS === param.quantitiesS? null:<div>S Quantity: {param.quantitiesOS - param.quantitiesS}</div> }
      
      <hr />
    </div>
  )
}

export default CartData
