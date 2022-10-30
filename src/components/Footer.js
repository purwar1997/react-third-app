import logo from "../white-logo.png";

const year = 2022;
const userName = "Shubham Purwar";

function Footer() {
  return (
    <div className="footer">
      <img className="logo-footer" src={logo} alt="logo" />
      <p className="copyright">
        Copyright {year} | {userName}
      </p>
    </div>
  );
}

export default Footer;
