/**
 * Email validation utility
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Format number with leading zero
 * @param {number} num - Number to format
 * @returns {string} - Formatted string with leading zero if needed
 */
export const formatNumber = (num) => String(num).padStart(2, '0');

/**
 * Get current year
 * @returns {number} - Current year
 */
export const getCurrentYear = () => new Date().getFullYear();
