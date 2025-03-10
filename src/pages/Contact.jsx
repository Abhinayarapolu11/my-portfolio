import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import social media icons
import { motion } from 'framer-motion';

const contactVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.1 },
};

const contactTransition = {
  duration: 0.6,
  ease: 'easeInOut',
};

const Contact = () => {
  return (
    <motion.div
          variants={contactVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={contactTransition}
        >
          <Container className="contact-container mt-5 text-center">
            <h2 className="display-6">Contact Me</h2>
            <p className="lead">Feel free to connect with me on social media.</p>
            <Row className="justify-content-center">
              <Col md={4}>
                <Button
                  variant="outline-primary"
                  className="d-block mb-3"
                  href="https://www.linkedin.com/in/siddhartha-nalla-92319521a/" // Replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin /> LinkedIn
                </Button>
                <Button
                  variant="outline-dark"
                  className="d-block mb-3"
                  href="https://github.com/siddhartha5782" // Replace with your GitHub URL
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </Button>

              </Col>
            </Row>
          </Container>
        </motion.div>
    
  );
};

export default Contact;
