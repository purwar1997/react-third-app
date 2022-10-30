const year = 2022;
const userName = "Shubham Purwar";

function Footer() {
  return (
    <div className="footer">
      <img className="logo" src="../white-logo.png" alt="logo" />
      <p className="copyright">
        Copyright {year} | {userName}
      </p>
    </div>
  );
}

export default Footer;
