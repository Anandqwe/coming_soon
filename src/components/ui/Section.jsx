import PropTypes from 'prop-types';
import './Section.css';

/**
 * Reusable Section wrapper component
 */
const Section = ({ 
  id, 
  className = '', 
  labelledBy, 
  children,
  variant = 'default'
}) => (
  <section 
    id={id}
    className={`section section--${variant} ${className}`.trim()} 
    aria-labelledby={labelledBy}
  >
    <div className="section__container">
      {children}
    </div>
  </section>
);

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  labelledBy: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'dark', 'gradient']),
};

export default Section;
