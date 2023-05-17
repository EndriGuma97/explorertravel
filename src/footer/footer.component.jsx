import { useState, useContext } from "react";
import { ReactComponent as FacebookLogo } from "../img/facebook-logo.svg";
import { ReactComponent as InstagramLogo } from "../img/instagram-logo.svg";
import { LangContext } from "../contexts/lang-context";

const Footer = () => {
  const { isEnglish, setIsEnglish } = useContext(LangContext);
    return (
     <div className="footer">
        <div className="footer-container">
           
            <div class="address-col">
          <p class="footer-heading">{isEnglish ? 'Contact us' : 'Na kontaktoni'}</p>
          <address class="contacts">
            <p class="address">
              Rruga Ibrahim Rugova, Tirana
            </p>
            <p>
              <a class="footer-link" href="tel:355692367151">069-236-7151</a
              ><br />
              <a class="footer-link" href="mailto:hello@omnifood.com"
                >hello@hello.com</a
              >
            </p>
          </address>
        </div>
        <div className="logo-col">
                <img />
                <ul className="social-links">
                    <li>
                        <a className="footer-link" href=""><FacebookLogo className="social-icon"/></a>
                    </li>
                    <li>
                        <a className="footer-link" href=""><InstagramLogo className="social-icon"/></a>
                    </li>
                </ul>
                <p class="copyright">
            Copyright &copy; <span class="year">2023</span> by Explorer Travel, Inc.
            All rights reserved.
          </p>
            </div>


        </div>
     </div>

    )
}

export default Footer;