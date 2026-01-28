import PropTypes from 'prop-types';

/**
 * Reusable Icon component for SVG icons
 */
const Icon = ({ pathData, size = 24, className = '', ariaHidden = true }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden={ariaHidden}
  >
    <path d={pathData} />
  </svg>
);

Icon.propTypes = {
  pathData: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
  ariaHidden: PropTypes.bool,
};

export default Icon;
