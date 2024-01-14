import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className="footer">
      <h1 id="footer-heading">My WebPage Footer</h1>
      <div className="content">
        <div>
          <h5>Follow us on</h5>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook} id="socialIcon" />
          </a>
          <a href="www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} id="socialIcon" />
          </a>
          <a href="www.twitter.com">
            <FontAwesomeIcon icon={faTwitter} id="socialIcon" />
          </a>
          <a href="www.youtube.com">
            <FontAwesomeIcon icon={faYoutube} id="socialIcon" />
          </a>
        </div>
        <div className="contact">
          <h5>Contact us</h5>
          <table>
            <tr>
              <td>
                <FontAwesomeIcon icon={faPhone} />
              </td>
              <td>1234567890</td>
            </tr>
          </table>
        </div>
        <div className="subscribe">
          <h5>Subscribe to us</h5>
          <label for="email">Email</label>
          <input type="email" id="email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
