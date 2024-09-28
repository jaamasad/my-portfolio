const Footer = () => {
  return (
    <footer
      className="trm-scroll-animation"
      data-scroll=""
      data-scroll-offset={50}
    >
      <div className="trm-label">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
      <div className="trm-label">
        Powerd by:{" "}
        <a
          href="https://www.letscodex.com"
          target="_blank"
        >
          LetsCodex.com
        </a>
      </div>
    </footer>
  );
};
export default Footer;
