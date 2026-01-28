import PropTypes from 'prop-types';
import { BRAND } from '../constants';
import './Header.css';

/**
 * Header Component
 * Displays brand logo and tagline in fixed navigation
 */
const Header = ({ logo }) => (
  <header className="header" role="banner">
    <div className="header__container">
      <a href="/" className="header__logo" aria-label={`${BRAND.name} Home`}>
        {logo ? (
          <img src={logo} alt={`${BRAND.name} Logo`} className="header__logo-image" />
        ) : (
          <span className="header__logo-text">{BRAND.name}</span>
        )}
      </a>
      <nav className="header__nav" aria-label="Main navigation">
        <span className="header__tagline">{BRAND.description}</span>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  logo: PropTypes.string,
};

export default Header;
