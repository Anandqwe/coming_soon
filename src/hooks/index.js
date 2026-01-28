import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for countdown timer functionality
 * @param {Date} targetDate - The target date to count down to
 * @returns {Object} - Time left object with days, hours, minutes, seconds, and launched status
 */
export const useCountdown = (targetDate) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = targetDate - new Date();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isLaunched: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isLaunched: false,
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return timeLeft;
};

/**
 * Custom hook for form handling with validation
 * @param {Object} config - Configuration object
 * @param {Function} config.validate - Validation function
 * @param {Function} config.onSubmit - Submit handler
 * @returns {Object} - Form state and handlers
 */
export const useForm = ({ validate, onSubmit }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
    if (error) setError('');
  }, [error]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const trimmedValue = value.trim();
    const validationError = validate?.(trimmedValue);
    
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubmit?.(trimmedValue);
      setIsSuccess(true);
      setValue('');
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  }, [value, validate, onSubmit]);

  const reset = useCallback(() => {
    setIsSuccess(false);
    setError('');
    setValue('');
  }, []);

  return {
    value,
    error,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
    reset,
  };
};
