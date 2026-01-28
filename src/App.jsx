import Header from './components/Header';
import Hero from './components/Hero';
import LaunchingSoon from './components/LaunchingSoon';
import EmailSignup from './components/EmailSignup';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import logo from './assets/logo.png';
import './App.css';

/**
 * App Component
 * Main application entry point
 */
const App = () => (
  <div className="app">
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
    
    <Header logo={logo} />
    
    <main id="main-content" className="main">
      <Hero />
      <LaunchingSoon />
      <EmailSignup />
      <SocialLinks />
    </main>
    
    <Footer />
  </div>
);

export default App;
