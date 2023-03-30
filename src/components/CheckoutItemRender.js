const CheckoutItemRender = ({ neededInfo }) => {
  return (
    <div className="item-breakdown">
      <p>{neededInfo.name}</p>
      <p>{neededInfo.quantity}</p>
      <p>${neededInfo.price}</p>
    </div>
  );
};

export default CheckoutItemRender;
