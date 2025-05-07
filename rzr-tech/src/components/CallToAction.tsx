import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiPhone } from 'react-icons/fi';

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'not-selected'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'not-selected'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="cta">
      <div className="cta-background">
        <div className="cta-shape-1"></div>
        <div className="cta-shape-2"></div>
      </div>
      
      <div className="container">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="section-title">Ready to Build Something Amazing?</h2>
            <p className="section-subtitle">
              Contact us today to discuss your project and discover how we can help bring your vision to life
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <FiMail />
                </div>
                <div className="contact-text">
                  <h4>Email Us</h4>
                  <p>rzr.technology.ai@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FiPhone />
                </div>
                <div className="contact-text">
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cta-form-container">
            <motion.form 
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {formSubmitted ? (
                <div className="form-success">
                  <FiSend size={40} />
                  <h3>Message Sent!</h3>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Service You're Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="not-selected" disabled>Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="dashboard">Dashboard Creation</option>
                      <option value="landing">Landing Page Design</option>
                      <option value="application">Application Development</option>
                      <option value="ai">AI Integration</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`} 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <FiSend className="btn-icon" />
                  </button>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 