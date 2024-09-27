import "./App.css";
import Header from "./components/Header/Header.jsx";
import ReactStoreLogo from "./assets/reactstore-logo.png";

function Logo({ src, alt }) {
  return (
    <div className="flex justify-center p-4">
      <img className="max-h16 sm:max-h-24" src={src} alt={alt} />
    </div>
  );
}

/*className="bg-app-background bg-cover min-h-screen font-body" */
function App() {
  return (
    <>
      <div className="custom-bg min-h-screen">
        <Logo src={ReactStoreLogo} alt="React Store Logo" />
        <Header />
      </div>
    </>
  );
}

export default App;
