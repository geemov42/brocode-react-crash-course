import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shippingMethod, setShippingMethod] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  function handlePaymentMethodChange(e) {
    setPaymentMethod(e.target.value);
  }

  function handleShippingMethodChange(e) {
    setShippingMethod(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name : {name}</p>

      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity : {quantity}</p>

      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <p>Comment : {comment}</p>

      <select value={paymentMethod} onChange={handlePaymentMethodChange}>
        <option value="">Select an option</option>
        <option value="VISA">Visa</option>
        <option value="MASTERCARD">mastercard</option>
      </select>
      <p>Payment method : {paymentMethod}</p>

      <label>
        <input type="radio" value="Pick up" checked={shippingMethod === "Pick up"} onChange={handleShippingMethodChange} />
        Pick up
      </label>

      <label>
        <input type="radio" value="Delivery" checked={shippingMethod === "Delivery"} onChange={handleShippingMethodChange} />
        Delivery
      </label>
      
      <p>Shipping method : {shippingMethod}</p>
    </div>
  );
};

export default MyComponent;
