const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Our factories</a>
        <a className="link link-hover">Mission & strategy</a>
        <a className="link link-hover">Charitable actions</a>
        <a className="link link-hover">Environment</a>
      </nav>
      <nav>
        <h6 className="footer-title">Production</h6>
        <a className="link link-hover">products</a>
        <a className="link link-hover">Quality</a>
        <a className="link link-hover">Sales geography</a>
        <a className="link link-hover">Our customers</a>
      </nav>

      <nav>
        <h6 className="footer-title">Contact us</h6>
        <a className="link link-hover">Addresses of factories</a>
        <a className="link link-hover">Dealers</a>
        <a className="link link-hover">Trading houses</a>
        <a className="link link-hover">Brand shops</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
