import Divider from "./Divider";
import ReactStoreLogo from "../../assets/reactstore-logo.png";

function Header() {
  return (
    <section>
      <div className="navbar bg-base-100 p-1">
        <div className="navbar-start">
          <img
            className="object-contain max-h6 sm:max-h-12 p-1 m-2"
            src={ReactStoreLogo}
            alt="React Store Logo"
          />
        </div>
        <div className="navbar-center lg:flex space-x-2">
          <a className="btn btn-ghost text-xl">Shop</a>
          <a className="btn btn-ghost text-xl">About us</a>
        </div>
        <div className="navbar-end" />
      </div>
    </section>
  );
}

export default Header;
