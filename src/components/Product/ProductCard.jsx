function ProductCard() {
  return (
    <div className="card card-compact bg-base-200 w-96 shadow-xl">
      <figure>
        <img src="" alt="Product Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Product Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
