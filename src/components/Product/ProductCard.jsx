function ProductCard() {
  return (
    <div class="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src="" alt="Product Image" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Product Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
