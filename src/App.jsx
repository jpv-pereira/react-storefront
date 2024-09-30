import "./App.css";
import Header from "./components/Header/Header.jsx";
import ProductCard from "./components/Product/ProductCard.jsx";
import Products from "../public/products.json";

/*className="bg-app-background bg-cover min-h-screen font-body" */

// should return a product object later on
function GetProducts() {
  return Products.length;
}

function App() {
  return (
    <>
      <div className="custom-bg min-h-screen">
        <Header />
        <div className="flex justify-center mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
