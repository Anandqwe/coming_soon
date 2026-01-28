/**
 * Application Constants
 * Centralized configuration for the Royal Chai Coming Soon page
 */

// Brand Information
export const BRAND = {
  name: 'Royal Chai',
  tagline: 'Brew the Royal Tradition',
  description: 'Premium Instant Chai',
};

// Launch Configuration
export const LAUNCH_DATE = new Date(2026, 2, 15, 0, 0, 0); // March 15, 2026

// Hero Section Content
export const HERO_CONTENT = {
  heading: 'Brew the Royal Tradition',
  description: `Experience the authentic taste of Indian chai, crafted with recipes 
    passed down through generations of royal households. Our premium 
    instant chai premix brings the warmth and elegance of traditional 
    spiced tea to your cup in moments.`,
  features: [
    { id: 'spices', icon: '✦', text: 'Authentic Spices' },
    { id: 'recipe', icon: '✦', text: 'Royal Recipe' },
    { id: 'quality', icon: '✦', text: 'Premium Quality' },
  ],
};

// Launching Soon Section Content
export const LAUNCHING_SOON_CONTENT = {
  badge: 'Launching Soon',
  badgeIcon: '👑',
  heading: 'Something Extraordinary is Brewing',
  description: `Be among the first to experience the royal taste of authentic Indian chai. 
    Sign up below to receive exclusive early access and special launch offers.`,
  launchedText: "We're Live!",
};

// Email Signup Content
export const EMAIL_SIGNUP_CONTENT = {
  heading: 'Join the Royal List',
  description: 'Be notified when we launch and receive exclusive offers',
  placeholder: 'Enter your email address',
  buttonText: 'Notify Me',
  privacyText: 'We respect your privacy. No spam, ever.',
  successHeading: 'Welcome to the Royal Family!',
  successMessage: "Thank you for joining us. You'll be the first to know when we launch.",
  resetButtonText: 'Sign up another email',
  errors: {
    required: 'Please enter your email address',
    invalid: 'Please enter a valid email address',
  },
};

// Social Links Configuration
export const SOCIAL_LINKS = [
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com',
    pathData: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://facebook.com',
    pathData: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    url: 'https://x.com',
    pathData: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
];

// Countdown Timer Labels
export const COUNTDOWN_LABELS = {
  days: 'Days',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds',
};

// Social Links Section Content
export const SOCIAL_SECTION_CONTENT = {
  heading: 'Follow Our Journey',
  description: 'Stay connected for behind-the-scenes content and updates',
};

// Footer Content
export const FOOTER_CONTENT = {
  madeWithText: 'Crafted with',
  madeInText: 'in India',
  copyrightText: 'All rights reserved.',
};
