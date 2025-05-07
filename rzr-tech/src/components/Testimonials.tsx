import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO at TechStart',
      quote: "RZR Technologies transformed our business with a custom SaaS solution that exceeded all expectations. Their team's technical expertise and attention to detail are unmatched. The product they delivered has significantly improved our operational efficiency and customer satisfaction.",
      rating: 5,
      image: 'profile-1'
    },
    {
      id: 2,
      name: 'David Chen',
      position: 'Marketing Director at GrowthBrand',
      quote: "We hired RZR Technologies to create a landing page for our product launch, and the results were spectacular. Not only was the design stunning, but the conversion rate surpassed our targets by 200%. Their understanding of user experience and optimization is impressive.",
      rating: 5,
      image: 'profile-2'
    },
    {
      id: 3,
      name: 'Olivia Martinez',
      position: 'Product Manager at FinanceApp',
      quote: "The dashboard RZR Technologies built for our finance application has been a game-changer. It presents complex data in an intuitive way that our clients love. The team was responsive, professional, and delivered on time and within budget.",
      rating: 5,
      image: 'profile-3'
    },
    {
      id: 4,
      name: 'James Wilson',
      position: 'Founder of PropertyHub',
      quote: "Working with RZR Technologies on our real estate website was a fantastic experience. Their communication was clear, their process was transparent, and they were genuinely invested in our success. The website they delivered has helped us stand out in a competitive market.",
      rating: 5,
      image: 'profile-4'
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-bg"></div>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="testimonials-container"
        >
          <button className="testimonial-nav prev" onClick={prevTestimonial}>
            <FiChevronLeft />
          </button>
          
          <motion.div
            key={testimonials[currentIndex].id}
            variants={itemVariants}
            className="testimonial-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <div className="quote-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 12.5H12.5C11.125 12.5 10 13.625 10 15V20C10 21.375 11.125 22.5 12.5 22.5H15C15.625 22.5 16.25 23.125 16.25 23.75V26.25C16.25 26.875 15.625 27.5 15 27.5H12.5C11.875 27.5 11.25 26.875 11.25 26.25V25H10V26.25C10 27.625 11.125 28.75 12.5 28.75H15C16.375 28.75 17.5 27.625 17.5 26.25V23.75C17.5 22.375 16.375 21.25 15 21.25H12.5C11.875 21.25 11.25 20.625 11.25 20V15C11.25 14.375 11.875 13.75 12.5 13.75H17.5V12.5Z" fill="currentColor"/>
                <path d="M27.5 12.5H22.5C21.125 12.5 20 13.625 20 15V20C20 21.375 21.125 22.5 22.5 22.5H25C25.625 22.5 26.25 23.125 26.25 23.75V26.25C26.25 26.875 25.625 27.5 25 27.5H22.5C21.875 27.5 21.25 26.875 21.25 26.25V25H20V26.25C20 27.625 21.125 28.75 22.5 28.75H25C26.375 28.75 27.5 27.625 27.5 26.25V23.75C27.5 22.375 26.375 21.25 25 21.25H22.5C21.875 21.25 21.25 20.625 21.25 20V15C21.25 14.375 21.875 13.75 22.5 13.75H27.5V12.5Z" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="testimonial-content">
              <p className="testimonial-quote">{testimonials[currentIndex].quote}</p>
              
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`rating-star ${i < testimonials[currentIndex].rating ? 'filled' : ''}`}
                  />
                ))}
              </div>
              
              <div className="testimonial-author">
                <div className={`testimonial-image ${testimonials[currentIndex].image}`}></div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonials[currentIndex].name}</h4>
                  <p className="testimonial-position">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <button className="testimonial-nav next" onClick={nextTestimonial}>
            <FiChevronRight />
          </button>
        </motion.div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 