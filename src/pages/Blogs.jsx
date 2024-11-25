import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blog1 from "../assets/images/blogs/image-01.jpg";
import blog2 from "../assets/images/blogs/image-02.jpg";
import blog3 from "../assets/images/blogs/image-03.jpg";
import { motion } from "framer-motion";
const Blogs = () => {
    useEffect(() => {
        document.title="SkyLine Digital | Blogs";
    },[]);
    /* automatically scroll to the top of the page */
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
    <Navbar />
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-gradient-to-br from-blue-100">
        <div className="container mx-auto">
          <motion.div
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: -75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }} 
                  className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 text-center lg:mb-20">
                <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                  Our Latest Insights
                </h2>
                <p className="text-lg text-gray-500">
                  In the ever-evolving world of web development, we share the latest trends and invaluable 
                  knowledge to keep you updated.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="-mx-4 flex flex-wrap">
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.75, delay: 0.20 }}  
              className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="mb-8 overflow-hidden rounded">
                  <img
                    src={blog1}
                    alt="ioioioi"
                    className="w-full"
                  />
                </div>
                <div>
                  <span className="bg-blue-400/80 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    Oct 22, 2024
                  </span>
                  <h3>
                    <p
                      className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      E-commerce Success Strategies
                    </p>
                  </h3>
                  <p className="text-body-color text-base">
                    Unlocking Online Sales: From Shopping Carts to Checkout Optimization. Tips for E-commerce Excellence.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.75, delay: 0.40 }}  
              className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="mb-8 overflow-hidden rounded">
                  <img
                    src={blog2}
                    alt="jijoi"
                    className="w-full"
                  />
                </div>
                <div>
                  <span className="bg-blue-400/80 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    Mar 29, 2024
                  </span>
                  <h3>
                    <p
                      className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Responsive Web Design
                    </p>
                  </h3>
                  <p className="text-body-color text-base">
                      Crafting Engaging User Experiences with Mobile-Friendly Web Designs. Learn the Essentials of Responsiveness.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.75, delay: 0.60 }}  
              className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="mb-8 overflow-hidden rounded">
                  <img
                    src={blog3}
                    alt="uhiuhui"
                    className="w-full"
                  />
                </div>
                <div>
                  <span className="bg-blue-400/80 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    Jan 10, 2024
                  </span>
                  <h3>
                    <p
                      className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      SEO Essentials for Webmasters
                    </p>
                  </h3>
                  <p className="text-body-color text-base">
                    Boosting Visibility and Ranking on Search Engines. Dive into the World of SEO for Web Development.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    <Footer />
    </>
  )
}
export default Blogs;