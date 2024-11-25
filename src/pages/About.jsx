import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAnimation, useInView, motion } from "framer-motion";
import CompanyMark from '../assets/images/About/CompanyMark.png';
import manager from '../assets/images/team/manager.png';
import tm1 from '../assets/images/team/tm1.jpg';
import tm2 from '../assets/images/team/tm2.jpg';
import tm3 from '../assets/images/team/tm3.png';
import tm4 from '../assets/images/team/tm4.jpg';
import tm5 from '../assets/images/team/tm5.jpg';
import tm6 from '../assets/images/team/tm6.jpg';
import tm7 from '../assets/images/team/tm7.jpg';
import './About.css';



const About = () => {
    const ref = useRef();
    const isInView = useInView(ref);
    const mainControlls = useAnimation();
    useEffect(() => {
      if (isInView) {
        mainControlls.start("visible");
      }
    }, [isInView, mainControlls]);
    useEffect(() => {
      document.title="SkyLine Digital | About";
  },[]);
  /* automatically scroll to the top of the page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <section className="pt-0 lg:pt-[100px] pb-20  overflow-hidden bg-gradient-to-br from-blue-100" >
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap items-center -mx-4">
            <motion.div
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }}
                  className="mx-auto mb-12 lg:pt-10 md:pt-20 sm:pt-40 max-sm:pt-20 text-center lg:mb-20 w-full">
                <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                  Why Choose Us
                </h2>
                <p className="text-lg text-gray-500">
                  Find the perfect package for your needs. Whether you're a new startup or a large enterprise, we've got you covered!
                </p>
            </motion.div>
            <div className="w-full px-4 lg:w-5/12 lg:pr-20 ">
              
              <motion.div
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -120 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }} className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4">
                  <div className="py-3 sm:py-4">
                    <img
                      src={CompanyMark}
                      alt="er"
                      className="w-full rounded-2xl transition-all duration-300 transform hover:scale-110 " 
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-7/12 ">
              <motion.div
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 100 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }} className="mt-0 lg:mt-0">
                <span className="block mb-2 text-xl font-semibold text-primary">
                  About Us
                </span>
                <div className="w-[10%] h-[3px] bg-gradient-to-r from-blue-700 to-blue-400"></div>
                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                </h2>
                <p className="mb-8 text-base text-gray-500">
                  "At SkyLine Digital, we are passionate about crafting exceptional web solutions that drive digital success. 
                  With a team of dedicated experts, we bring together creativity, innovation, and technical expertise 
                  to create web experiences that leave a lasting impression. Our commitment to delivering cutting-edge websites, 
                  e-commerce platforms, and web applications is matched only by our dedication to our clients. 
                  We take pride in understanding your unique business objectives and translating them into captivating online experiences. 
                  Whether you're a startup looking to establish a web presence or an established enterprise seeking to expand, 
                  we're here to empower your digital journey. Join us, and let's transform your web vision into reality."
                </p>
              </motion.div>
              <motion.div
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 75 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.75, delay: 0.75 }}
                    className="clients pt-16"
                    >
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[70%] h-[3px] bg-gradient-to-r from-blue-700 to-blue-400"></div>
      <section className="lg:pt-[100px] pb-12 lg:pb-[90px] overflow-hidden bg-gradient-to-tr from-blue-100">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
            <motion.div
                  ref={ref}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: 75 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.75, delay: 0.25 }} 
                  className="mx-auto mb-12 text-center lg:mb-20 w-full">
                <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                  Meet Our Team
                </h2>
                <p className="text-lg text-gray-500">
                  The skilled professionals driving innovation behind our digital solutions.
                </p>
            </motion.div>



            <div className="team">
              <p></p>
              <div className="row">
                  <div className="card">
                      <div className="image">
                          <img src={manager} alt="Team member 1"/>
                      </div>
                      <div className="info">
                          <h3>Louis Lefevre</h3>
                          <span>Team Manager</span>
                          <div className="icons">
                              <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                              <a href="https://twitter.com/login" ><i className="fab fa-twitter"></i></a>
                              <a href="https://www.instagram.com/" ><i className="fab fa-instagram"></i></a>
                              <a href="https://www.linkedin.com/" ><i className="fab fa-linkedin"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="card">
                      <div className="image">
                          <img src={tm1} alt="Team member 1"/>
                      </div>
                      <div className="info">
                          <h3>Jean Dupont</h3>
                          <span>Backend Developer</span>
                          <div className="icons">
                              <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                              <a href="https://twitter.com/login" ><i className="fab fa-twitter"></i></a>
                              <a href="https://www.instagram.com/" ><i className="fab fa-instagram"></i></a>
                              <a href="https://www.linkedin.com/" ><i className="fab fa-linkedin"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="card">
                      <div className="image">
                          <img src={tm2} alt="Team member 1"/>
                      </div>
                      <div className="info">
                          <h3>Philippe Moreau</h3>
                          <span>Backend Developer</span>
                          <div className="icons">
                              <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                              <a href="https://twitter.com/login" ><i className="fab fa-twitter"></i></a>
                              <a href="https://www.instagram.com/" ><i className="fab fa-instagram"></i></a>
                              <a href="https://www.linkedin.com/" ><i className="fab fa-linkedin"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="card">
                      <div className="image">
                          <img src={tm7} alt="Team member 1"/>
                      </div>
                      <div className="info">
                          <h3>Sophie Laurent</h3>
                          <span>Web Designer</span>
                          <div className="icons">
                              <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                              <a href="https://twitter.com/login" ><i className="fab fa-twitter"></i></a>
                              <a href="https://www.instagram.com/" ><i className="fab fa-instagram"></i></a>
                              <a href="https://www.linkedin.com/" ><i className="fab fa-linkedin"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="card">
                      <div className="image">
                          <img src={tm4} alt="Team member 1"/>
                      </div>
                      <div className="info">
                          <h3>Louis Girard</h3>
                          <span>Frontend developer</span>
                          <div className="icons">
                              <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                              <a href="https://twitter.com/login" ><i className="fab fa-twitter"></i></a>
                              <a href="https://www.instagram.com/" ><i className="fab fa-instagram"></i></a>
                              <a href="https://www.linkedin.com/" ><i className="fab fa-linkedin"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="card">
                      <div className="image">
                          <img src={tm5} alt="Team member 1"/>
                      </div>
                      <div className="info">
                          <h3>Antoine Bernard</h3>
                          <span>Frontend developer</span>
                          <div className="icons">
                              <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                              <a href="https://twitter.com/login" ><i className="fab fa-twitter"></i></a>
                              <a href="https://www.instagram.com/" ><i className="fab fa-instagram"></i></a>
                              <a href="https://www.linkedin.com/" ><i className="fab fa-linkedin"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="card">
                      <div className="image">
                          <img src={tm6} alt="Team member 1"/>
                      </div>
                      <div className="info">
                          <h3>Jacques Lambert</h3>
                          <span>Mobile developer</span>
                          <div className="icons">
                              <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                              <a href="https://twitter.com/login" ><i className="fab fa-twitter"></i></a>
                              <a href="https://www.instagram.com/" ><i className="fab fa-instagram"></i></a>
                              <a href="https://www.linkedin.com/" ><i className="fab fa-linkedin"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="card">
                      <div className="image">
                          <img src={tm3} alt="Team member 1"/>
                      </div>
                      <div className="info">
                          <h3>Rose Matthews</h3>
                          <span>GIS developer</span>
                          <div className="icons">
                              <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                              <a href="https://twitter.com/login" ><i className="fab fa-twitter"></i></a>
                              <a href="https://www.instagram.com/" ><i className="fab fa-instagram"></i></a>
                              <a href="https://www.linkedin.com/" ><i className="fab fa-linkedin"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
