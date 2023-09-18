import { Link } from "react-router-dom";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="social">
          <p>Follow Us: </p>
          <ul className="social-links">
            <li>
              <Link to={"https://www.instagram.com"}>
                <img
                  src="https://www.iconbolt.com/iconsets/doodle-icons/instagram.svg"
                  alt="instagram"
                />
              </Link>
            </li>
            <li>
              <Link to={"https://www.twitter.com"}>
                <img
                  src="https://www.iconbolt.com/iconsets/doodle-icons/twitter.svg"
                  alt="twitter"
                />
              </Link>
            </li>
            <li>
              <Link to={"https://www.facebook.com"}>
                <img
                  src="https://www.iconbolt.com/iconsets/doodle-icons/facebook.svg"
                  alt="facebook"
                />
              </Link>
            </li>
            <li>
              <Link to={"https://www.youtube.com"}>
                <img
                  src="https://www.iconbolt.com/iconsets/doodle-icons/youtube.svg"
                  alt="youtube"
                />
              </Link>
            </li>
            <li>
              <Link to={"https://www.tiktok.com"}>
                <img
                  src="https://www.iconbolt.com/iconsets/doodle-icons/tik-tok.svg"
                  alt="tik-tok"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="button-container">
          <button>
            <img
              src="https://www.iconbolt.com/iconsets/doodle-icons/arrow-single-up.svg"
              alt="Up!"
            />
          </button>
          <p>Bring me back up!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
