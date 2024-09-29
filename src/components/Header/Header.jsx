import Divider from "./Divider";

function Header() {
  return (
    <section>
      <header>
        <Divider />
        <div className="p-2 sm:p-3 space-x-8 flex justify-center">
          <button className="btn">Shop</button>
        </div>
        <Divider />
      </header>
    </section>
  );
}

export default Header;
