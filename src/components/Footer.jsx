import { BRAND, FOOTER_CONTENT } from '../constants';
import { getCurrentYear } from '../utils';
import './Footer.css';

/**
 * Footer Component
 * Displays brand info, tagline, and copyright
 */
const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="footer__container">
      <div className="footer__brand">
        <span className="footer__logo">{BRAND.name}</span>
        <p className="footer__tagline">{BRAND.tagline}</p>
      </div>

      <div className="footer__divider" aria-hidden="true" />

      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; {getCurrentYear()} {BRAND.name}. {FOOTER_CONTENT.copyrightText}
        </p>
        <p className="footer__made-with">
          {FOOTER_CONTENT.madeWithText} <span aria-label="love">♥</span> {FOOTER_CONTENT.madeInText}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
