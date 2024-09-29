import Divider from "./Divider";
import ReactStoreLogo from "../../assets/reactstore-logo.png";

function Header() {
  return (
    <section>
      <div className="navbar bg-base-100 p-1">
        <img
          className="object-contain max-h6 sm:max-h-12"
          src={ReactStoreLogo}
          alt="React Store Logo"
        />
        <a className="btn btn-ghost text-xl">Shop</a>
      </div>
    </section>
  );
}

export default Header;
