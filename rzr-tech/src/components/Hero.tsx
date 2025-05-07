import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="hero-title">
            Cutting-Edge <span className="text-gradient">Development Solutions</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-subtitle">
            We create exceptional SaaS, websites, dashboards, and applications 
            with modern technologies and innovative designs.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-cta">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-primary hero-btn"
            >
              Book a Consultation
            </Link>
            
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hero-link"
            >
              Discover our services <FiArrowRight className="hero-link-icon" />
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-animation">
              <div className="code-block">
                <div className="code-line"></div>
                <div className="code-line"></div>
                <div className="code-line"></div>
                <div className="code-line"></div>
              </div>
              <div className="floating-element el-1"></div>
              <div className="floating-element el-2"></div>
              <div className="floating-element el-3"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 