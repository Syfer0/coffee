import "/src/css/product.css";
const Product = () => {
  return (
    <div className="product">
      <img src="/src/img/product-1.jpg" alt="Mug" className="product__img" />
      <div className="product__details">
        <div className="product__name">Black Tea Cup</div>
        {/* Add other details or components as needed */}
      </div>
    </div>
  );
};

export default Product;
