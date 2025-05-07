import { Link } from 'react-scroll';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', to: '/' },
        { name: 'Our Team', to: '/' },
        { name: 'Careers', to: '/' },
        { name: 'Contact', to: 'contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'SaaS Development', to: 'services' },
        { name: 'Website Development', to: 'services' },
        { name: 'Dashboard Creation', to: 'services' },
        { name: 'Application Development', to: 'services' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', to: '/' },
        { name: 'Documentation', to: '/' },
        { name: 'FAQ', to: '/' },
        { name: 'Support', to: '/' },
      ]
    },
  ];
  
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com' },
    { icon: <FiTwitter />, url: 'https://twitter.com' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com' },
    { icon: <FiInstagram />, url: 'https://instagram.com' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Link to="hero" smooth={true} duration={500}>
                <span className="logo-text">RZR <span className="text-gradient">Technologies</span></span>
              </Link>
            </div>
            <p className="footer-description">
              Creating cutting-edge solutions that empower businesses to achieve their digital goals
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-links-container">
            {footerLinks.map((group, index) => (
              <div key={index} className="footer-links-group">
                <h3 className="footer-links-title">{group.title}</h3>
                <ul className="footer-links">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.to.startsWith('/') ? (
                        <a href={link.to}>{link.name}</a>
                      ) : (
                        <Link 
                          to={link.to} 
                          smooth={true} 
                          offset={-70} 
                          duration={500}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} RZR Technologies. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 