import { SOCIAL_LINKS, SOCIAL_SECTION_CONTENT } from '../constants';
import { Icon } from './ui';
import './SocialLinks.css';

/**
 * SocialLinkItem Component
 * Individual social media link
 */
const SocialLinkItem = ({ name, url, pathData }) => (
  <li className="social-links__item">
    <a
      href={url}
      className="social-links__link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow us on ${name}`}
    >
      <span className="social-links__icon">
        <Icon pathData={pathData} />
      </span>
      <span className="social-links__name">{name}</span>
    </a>
  </li>
);

/**
 * SocialLinks Component
 * Displays social media links section
 */
const SocialLinks = () => (
  <section className="social-links" aria-labelledby="social-heading">
    <div className="social-links__container">
      <h2 id="social-heading" className="social-links__heading">
        {SOCIAL_SECTION_CONTENT.heading}
      </h2>
      <p className="social-links__description">
        {SOCIAL_SECTION_CONTENT.description}
      </p>
      
      <nav className="social-links__nav" aria-label="Social media links">
        <ul className="social-links__list">
          {SOCIAL_LINKS.map((social) => (
            <SocialLinkItem key={social.id} {...social} />
          ))}
        </ul>
      </nav>
    </div>
  </section>
);

export default SocialLinks;
