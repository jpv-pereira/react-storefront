import "./App.css";
import Header from "./components/Header/Header.jsx";
import ProductCard from "./components/Product/ProductCard.jsx";

/*className="bg-app-background bg-cover min-h-screen font-body" */
function App() {
  return (
    <>
      <div className="custom-bg min-h-screen">
        <Header />
        <div className="grid grid-cols-4 justify-evenly">
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
    </>
  );
}

export default App;
