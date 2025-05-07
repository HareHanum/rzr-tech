import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiClock, 
  FiCheck, 
  FiHeadphones, 
  FiCalendar, 
  FiUsers,
  FiCode
} from 'react-icons/fi';

const Benefits = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const benefitItems = [
    {
      icon: <FiClock />,
      title: 'Time Efficiency',
      description: 'We deliver projects faster without compromising on quality, saving you valuable time to market.'
    },
    {
      icon: <FiCheck />,
      title: 'Superior Quality',
      description: 'Our attention to detail and commitment to excellence ensures high-quality deliverables every time.'
    },
    {
      icon: <FiHeadphones />,
      title: 'Excellent Support',
      description: 'We provide ongoing maintenance and responsive assistance even after project completion.'
    },
    {
      icon: <FiCalendar />,
      title: 'Reliable Delivery',
      description: 'We consistently meet deadlines and keep our promises, making us a dependable partner.'
    },
    {
      icon: <FiUsers />,
      title: 'Customer Success Focus',
      description: 'We take a partnership approach, ensuring your success is at the heart of everything we do.'
    },
    {
      icon: <FiCode />,
      title: 'Technical Passion',
      description: 'We stay ahead of the curve with the latest technologies and industry best practices.'
    },
  ];

  return (
    <section id="benefits" className="benefits">
      <div className="container">
        <div className="benefits-content">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              Our commitment to excellence sets us apart from the competition
            </p>
          </div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="benefits-list"
          >
            {benefitItems.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="benefit-item"
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-text">
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="benefits-image">
          <div className="benefits-image-decoration">
            <div className="decoration-element de-1"></div>
            <div className="decoration-element de-2"></div>
            <div className="decoration-element de-3"></div>
            <div className="decoration-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 