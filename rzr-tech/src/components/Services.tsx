import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiLayout, 
  FiMonitor, 
  FiLayers, 
  FiSmartphone, 
  FiCpu 
} from 'react-icons/fi';

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const serviceItems = [
    {
      icon: <FiLayout />,
      title: 'Website Development',
      description: 'Beautiful, responsive websites that engage visitors and deliver exceptional user experiences.'
    },
    {
      icon: <FiMonitor />,
      title: 'Dashboard Creation',
      description: 'Intuitive dashboards that visualize complex data for better business insights and decision making.'
    },
    {
      icon: <FiLayers />,
      title: 'Landing Page Design',
      description: 'High-converting landing pages optimized for engagement, leads, and conversion goals.'
    },
    {
      icon: <FiSmartphone />,
      title: 'Application Development',
      description: 'Custom web and mobile applications built with modern technologies for optimal performance.'
    },
    {
      icon: <FiCpu />,
      title: 'AI Integration',
      description: 'Integration of artificial intelligence and machine learning to power your products and services.'
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">We deliver comprehensive development solutions tailored to your business needs</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="services-grid"
        >
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 