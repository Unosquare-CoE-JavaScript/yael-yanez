import axios from 'axios';
import { useEffect, useState } from 'react';
import { useOrderDetails } from '../../contexts/OrderDetails';

export default function OrderConfirmation({ setOrderPhase }) {
  const [, , resetOrder] = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    axios
      .post(`http://localhost:3030/order`)
      .then((res) => setOrderNumber(res.data.orderNumber))
      .catch((err) => console.error(err));
  }, []);

  const handleClick = () => {
    resetOrder();
    setOrderPhase('inProgress');
  };

  if (!orderNumber) return <div>Loading...</div>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Thank You!</h1>
      <p>Your order number {orderNumber}</p>
      <p style={{ fontSize: '25%' }}>
        as per our terms and conditions, notiong will happen now
      </p>
      <button onClick={handleClick}>Create new order</button>
    </div>
  );
}
