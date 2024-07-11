import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__text">
        <div>
          Developed by{" "}
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/ilyamukhamedov/"
          >
            Ilya Mukhamedov
          </a>
        </div>
        <div>2024</div>
      </div>
    </footer>
  );
};

export default Footer;
