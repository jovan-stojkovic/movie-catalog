import { Link } from "react-router-dom";
import "../styles/styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>Follow Us: </p>
        <ul className="social-links">
          <li>
            <Link to={"https://www.instagram.com"}>
              <img
                src="https://www.iconbolt.com/iconsets/iconoir/instagram.svg"
                alt="instagram"
              />
            </Link>
          </li>
          <li>
            <Link to={"https://www.twitter.com"}>
              <img
                src="https://www.iconbolt.com/iconsets/iconoir/twitter.svg"
                alt="twitter"
              />
            </Link>
          </li>
          <li>
            <Link to={"https://www.facebook.com"}>
              <img
                src="https://www.iconbolt.com/iconsets/iconoir/facebook.svg"
                alt="facebook"
              />
            </Link>
          </li>
          <li>
            <Link to={"https://www.youtube.com"}>
              <img
                src="https://www.iconbolt.com/iconsets/iconoir/youtube.svg"
                alt="youtube"
              />
            </Link>
          </li>
          <li>
            <Link to={"https://www.tiktok.com"}>
              <img
                src="https://www.iconbolt.com/iconsets/iconoir/tiktok.svg"
                alt="tik-tok"
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
