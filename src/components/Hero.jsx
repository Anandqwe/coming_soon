import { HERO_CONTENT } from '../constants';
import './Hero.css';

/**
 * Hero Component
 * Main landing section with brand tagline and features
 */
const Hero = () => (
  <section className="hero" aria-labelledby="hero-heading">
    <div className="hero__overlay" aria-hidden="true" />
    <div className="hero__content">
      <div className="hero__decorative-line" aria-hidden="true" />
      
      <h1 id="hero-heading" className="hero__tagline">
        {HERO_CONTENT.heading}
      </h1>
      
      <div className="hero__decorative-line" aria-hidden="true" />
      
      <p className="hero__description">
        {HERO_CONTENT.description}
      </p>
      
      <ul className="hero__features" role="list">
        {HERO_CONTENT.features.map(({ id, icon, text }) => (
          <li key={id} className="hero__feature">
            <span className="hero__feature-icon" aria-hidden="true">{icon}</span>
            <span className="hero__feature-text">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Hero;
