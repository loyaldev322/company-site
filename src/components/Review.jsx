import React, { useEffect, useRef } from "react";
import { MdVerified } from "react-icons/md";
import { useAnimation, useInView, motion } from "framer-motion";
import r1 from '../assets/images/review/r1.jpg';
import r2 from '../assets/images/review/r2.jpg';
import r3 from '../assets/images/review/r3.jpg';
import r4 from '../assets/images/review/r4.jpg';

const Review = () => {
  const { innerWidth: Width } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView,mainControlls]);
  return (
    <div className="overflow-x-hidden max-w-screen font-poppins" style={{backgroundColor : '#030014'}}>
      <section className="">
        {Width < 631 ? (
          <>
            <div className="container px-6 py-12 mx-auto">
              <div className="grid items-center gap-4 xl:grid-cols-5">
                <div className="max-w-2xl mx-auto rounded shadow-md bg-white p-6 my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                  <h2 className="text-4xl font-bold text-blue-500">
                    What our costumers say
                  </h2>
                  <p className="text-black">
                    Here are some reviews of our costumers and their excperience
                    with our services and that wee provide!
                  </p>
                </div>
                <div className="p-6 xl:col-span-3">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid content-center gap-4">
                      <div className="p-6 rounded shadow-md bg-white">
                        <p>
                          Skiline Digital built our website from the ground up,
                           and the result was nothing short of impressive.
                           The site is fast, user-friendly, and has helped 
                           increase our online visibility. 
                           Their ongoing support ensures that everything 
                           runs smoothly, and we couldn't be happier with 
                           the partnership.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src={r1}
                            alt="uhuihouii"
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-md font-semibold">Sam Smith</p>
                            <p className="text-sm text-gray-400">Logitech</p>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-blue-500 ml-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded shadow-md bg-white">
                        <p>
                          Skiline Digital transformed our outdated website 
                          into a modern, responsive platform that’s helped 
                          us attract more customers.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src={r2}
                            alt="r2"
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-md font-semibold">
                              Sophia Davis
                            </p>
                            <p className="text-sm dark:text-gray-400">
                              Microsoft
                            </p>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-blue-500 ml-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid content-center gap-4">
                      <div className="p-6 rounded shadow-md bg-white">
                        <p>
                          After a major security scare, we turned to Skiline Digital for help. 
                          They secured our systems and put in place long-term solutions to prevent 
                          future attacks. Their expertise and professionalism were exactly what we needed.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src={r3}
                            alt="r3"
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-md font-semibold">
                              Ethan Williams
                            </p>
                            <p className="text-sm dark:text-gray-400">Dell</p>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-blue-500 ml-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded shadow-md bg-white">
                        <p>
                          We needed a custom software solution to streamline our 
                          operations, and Skiline Digital delivered beyond our
                           expectations. The software they developed has 
                           improved our efficiency and saved us countless hours.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src={r4}
                            alt="r4r"
                            className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                          />
                          <div>
                            <p className="text-md font-semibold">
                              Olivia Johnson
                            </p>
                            <p className="text-sm dark:text-gray-400">Razer</p>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-blue-500 ml-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container px-6 py-12 mx-auto">
              <div className="grid items-center gap-4 xl:grid-cols-5">
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="max-w-2xl mx-auto rounded shadow-md bg-white p-6 my-8  space-y-4 text-center xl:col-span-2 xl:text-left"
                >
                  <h2 className="text-4xl font-bold text-blue-500">
                    What our costumers say
                  </h2>
                  <p className="text-gray-500">
                    Here are some reviews of our costumers and their excperience
                    with our services and that wee provide!
                  </p>
                </motion.div>
                <div className="p-6 xl:col-span-3">
                  <div className="grid gap-4 md:grid-cols-2">

                    <div className="grid content-center gap-4">
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: -75, y: -45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="p-6 rounded-lg shadow-lg bg-white mt-6"
                      >
                        <p>
                          Skiline Digital built our website from the ground up,
                           and the result was nothing short of impressive.
                           The site is fast, user-friendly, and has helped 
                           increase our online visibility. 
                           Their ongoing support ensures that everything 
                           runs smoothly, and we couldn't be happier with 
                           the partnership.
                        </p>
                        <div className="flex justify-between items-center mt-4 space-x-4">
                          <div className="flex">
                            <img
                              src={r1}
                              alt="qq"
                              className="w-12 h-12 bg-center bg-cover rounded-full "
                            />
                            <div className="flex-col ml-4">
                              <p className="text-lg font-semibold block">
                                Sam Smith
                              </p>
                              <p className="text-sm text-gray-400 block">
                                Asus
                              </p>
                            </div>
                          </div>

                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-blue-500 ml-2"
                            />
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: -75, y: 45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="p-6 rounded-lg shadow-lg bg-white "
                      >
                        <p>
                          Skiline Digital transformed our outdated website 
                          into a modern, responsive platform that’s helped 
                          us attract more customers.
                        </p>
                        <div className="flex items-center justify-between mt-4 space-x-4">
                          <div className="flex">
                            <img
                              src={r2}
                              alt="aa"
                              className="w-12 h-12 bg-center bg-cover rounded-full "
                            />
                            <div className="flex-col sm:ml-2 ">
                              <p className="text-lg font-semibold block">
                                Benjamin Mitchell
                              </p>
                              <p className="text-sm text-gray-400 block">
                                Razer
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-blue-500 ml-2"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <div className="grid content-center gap-4">
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: 75, y: -45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.7, delay: 0.55 }}
                        className="p-6 rounded-lg shadow-lg bg-white"
                      >
                        <p>
                          After a major security scare, we turned to Skiline Digital for help. 
                          They secured our systems and put in place long-term solutions to prevent 
                          future attacks. Their expertise and professionalism were exactly what we needed.
                        </p>
                        <div className="flex justify-between items-center mt-2 space-x-4">
                          <div className="flex">
                            <img
                              src={r3}
                              alt="asd"
                              className="w-12 h-12 bg-center bg-cover rounded-full "
                            />
                            <div className="flex-col ml-4">
                              <p className="text-lg font-semibold block">
                                Olivia Johnson
                              </p>
                              <p className="text-sm text-gray-400 block">
                                Microsoft
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-blue-500 ml-2"
                            />
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: 75, y: 45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.8, delay: 0.75 }}
                        className="p-6 rounded-lg shadow-lg bg-white"
                      >
                        <p>
                          We needed a custom software solution to streamline our 
                          operations, and Skiline Digital delivered beyond our
                           expectations. The software they developed has 
                           improved our efficiency and saved us countless hours.
                        </p>
                        <div className="flex justify-between items-center mt-4 space-x-4">
                          <div className="flex">
                            <img
                              src={r4}
                              alt="asdfg"
                              className="w-12 h-12 bg-center bg-cover rounded-full "
                            />
                            <div className="flex-col ml-4">
                              <p className="text-lg font-semibold block">
                                Sophia Davis
                              </p>
                              <p className="text-sm text-gray-400 block">
                                Dell
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-blue-500 ml-2"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Review;
