import PropTypes from 'prop-types';
import './Ornament.css';

/**
 * Decorative ornament component
 */
const Ornament = ({ symbol = '☆', className = '' }) => (
  <div className={`ornament ${className}`.trim()}>
    <span className="ornament__line" />
    <span className="ornament__symbol">{symbol}</span>
    <span className="ornament__line" />
  </div>
);

Ornament.propTypes = {
  symbol: PropTypes.string,
  className: PropTypes.string,
};

export default Ornament;
