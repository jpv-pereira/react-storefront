import "./App.css";
import Header from "./components/Header/Header.jsx";
import ProductCard from "./components/Product/ProductCard.jsx";
import Products from "../public/products.json";
import { useEffect } from "react";

function GetProducts() {
  const productsPath = "../public/products.json";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(productsPath)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return products;
}

function App() {
  const products = GetProducts();

  return (
    <>
      <div className="custom-bg min-h-screen">
        <Header />
        <div className="flex justify-center mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {Array.from({ length: Products.length }).map((_, index) => (
              <ProductCard key={index} product={products[index]} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
