import ReactStoreLogo from "../../assets/reactstore-logo.png";

function Logo({ src, alt }) {
  return <img className="max-h16 sm:max-h-24" src={src} alt={alt} />;
}

function Header() {
  return (
    <section>
      <header>
        <div className="p-4 sm:p-8 flex basis-auto flex-auto space-x-8">
          <Logo src={ReactStoreLogo} alt="React Store Logo" />
          <button className="text-5xl">Buy</button>
        </div>
      </header>
    </section>
  );
}

export default Header;
