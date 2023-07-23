

// eslint-disable-next-line react/prop-types
const CartPage = ({ cartItems }) => {
  return (
    <div>
      <h1>Cart Page</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
