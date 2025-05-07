import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from 'react-icons/fi';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
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

  const portfolioItems = [
    {
      id: 1,
      title: 'Real Estate Website',
      category: 'website',
      image: 'placeholder-1',
      description: 'Modern property listing website with advanced search, virtual tours, and agent portal.',
      technologies: ['Vue.js', 'Firebase', 'Google Maps API']
    },
    {
      id: 2,
      title: 'Financial Dashboard',
      category: 'dashboard',
      image: 'placeholder-2',
      description: 'Comprehensive financial analytics dashboard for tracking investments, expenses, and growth metrics.',
      technologies: ['React', 'Chart.js', 'Redux', 'Node.js']
    },
    {
      id: 3,
      title: 'Health & Fitness App',
      category: 'application',
      image: 'placeholder-3',
      description: 'Mobile application for tracking fitness goals, nutrition, and workout schedules with AI recommendations.',
      technologies: ['React Native', 'TensorFlow.js', 'Firebase']
    },
    {
      id: 4,
      title: 'Product Launch Page',
      category: 'landing',
      image: 'placeholder-4',
      description: 'High-converting landing page for a new tech product launch with animation and interactive elements.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP']
    },
    {
      id: 5,
      title: 'AI Content Generator',
      category: 'ai',
      image: 'placeholder-5',
      description: 'Content creation platform powered by AI to generate marketing copy, blog posts, and social media content.',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI']
    },
  ];

  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Websites' },
    { id: 'dashboard', label: 'Dashboards' },
    { id: 'landing', label: 'Landing Pages' },
    { id: 'application', label: 'Applications' },
    { id: 'ai', label: 'AI Projects' },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Explore our portfolio of successful projects delivering exceptional results
          </p>
        </div>

        <div className="portfolio-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`portfolio-tab ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="portfolio-grid"
        >
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="portfolio-item"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className={`portfolio-image ${item.image}`}>
                <div className="portfolio-overlay">
                  <button className="portfolio-link">
                    <FiExternalLink />
                  </button>
                </div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-description">{item.description}</p>
                <div className="portfolio-tech">
                  {item.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 