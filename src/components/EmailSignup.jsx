import { useCallback } from 'react';
import { useForm } from '../hooks';
import { isValidEmail } from '../utils';
import { EMAIL_SIGNUP_CONTENT } from '../constants';
import './EmailSignup.css';

/**
 * SuccessMessage Component
 * Displays confirmation after successful signup
 */
const SuccessMessage = ({ onReset }) => (
  <div className="email-signup__success" role="status" aria-live="polite">
    <span className="email-signup__success-icon" aria-hidden="true">✓</span>
    <h2 className="email-signup__success-heading">
      {EMAIL_SIGNUP_CONTENT.successHeading}
    </h2>
    <p className="email-signup__success-text">
      {EMAIL_SIGNUP_CONTENT.successMessage}
    </p>
    <button 
      type="button"
      className="email-signup__reset-btn"
      onClick={onReset}
    >
      {EMAIL_SIGNUP_CONTENT.resetButtonText}
    </button>
  </div>
);

/**
 * EmailSignup Component
 * Email subscription form with validation
 */
const EmailSignup = () => {
  const validateEmail = useCallback((email) => {
    if (!email) return EMAIL_SIGNUP_CONTENT.errors.required;
    if (!isValidEmail(email)) return EMAIL_SIGNUP_CONTENT.errors.invalid;
    return null;
  }, []);

  const handleEmailSubmit = useCallback((email) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Email submitted:', email);
        resolve();
      }, 1000);
    });
  }, []);

  const {
    value: email,
    error,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
    reset,
  } = useForm({
    validate: validateEmail,
    onSubmit: handleEmailSubmit,
  });

  if (isSuccess) {
    return (
      <section className="email-signup" aria-labelledby="signup-heading">
        <div className="email-signup__container">
          <SuccessMessage onReset={reset} />
        </div>
      </section>
    );
  }

  return (
    <section className="email-signup" aria-labelledby="signup-heading">
      <div className="email-signup__container">
        <h2 id="signup-heading" className="email-signup__heading">
          {EMAIL_SIGNUP_CONTENT.heading}
        </h2>
        <p className="email-signup__description">
          {EMAIL_SIGNUP_CONTENT.description}
        </p>

        <form 
          className="email-signup__form" 
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="email-signup__input-wrapper">
            <label htmlFor="email-input" className="visually-hidden">
              Email address
            </label>
            <input
              type="email"
              id="email-input"
              className={`email-signup__input ${error ? 'email-signup__input--error' : ''}`}
              placeholder={EMAIL_SIGNUP_CONTENT.placeholder}
              value={email}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'email-error' : undefined}
              autoComplete="email"
            />
            <button 
              type="submit" 
              className="email-signup__button"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <span className="email-signup__loader" aria-hidden="true" />
              ) : (
                EMAIL_SIGNUP_CONTENT.buttonText
              )}
            </button>
          </div>
          
          {error && (
            <p id="email-error" className="email-signup__error" role="alert">
              {error}
            </p>
          )}
        </form>

        <p className="email-signup__privacy">
          {EMAIL_SIGNUP_CONTENT.privacyText}
        </p>
      </div>
    </section>
  );
};

export default EmailSignup;
