import React, { useEffect, useRef } from "react";
import Navbar from './Navbar';
import Hero from './Hero';
import Review from './Review';
import Footer from './Footer';
import StarsCanvas from "./StarBackground";
import {useAnimation, useInView, motion } from "framer-motion";
import map from "../assets/images/map.png";
import mapbg from "../assets/images/map-bg.png";

function Homepage() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControlls = useAnimation();

    useEffect(() => {
      document.title="SkyLine Digital | Home";
    },[]);
    /* automatically scroll to the top of the page */
    useEffect(() => {
        if (isInView) {
          mainControlls.start("visible");
        }
      }, [isInView, mainControlls]);
      /* automatically scroll to the top of the page */
      useEffect(() => {
          window.scrollTo(0, 0);
        }, []);


  return (
    <>
      <Navbar />
      <Hero />
      
      <div className="bg-gradient-to-tr from-blue-100" >
        
        
        <StarsCanvas/>
        <div style={{backgroundColor: '#030014'}}>
            <div className="mx-auto mb-12 text-center lg:mb-20">
                <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                    More Than 10 Years We Provide Services
                    <br className="md:block hidden" />
                    All over the World
                </h2>
                <p className="text-lg text-gray-500">
                    There are many variations of passages of Lorem Ipsum available
                    but the majority have suffered alteration in some form
                </p>
            </div>
            <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                <img
                    src={map}
                    alt="world map"
                    className="w-full xl:h-full h-80 sm:block hidden"
                />
                <img
                    src={mapbg}
                    alt="mobile-ii"
                    className="sm:hidden -mt-10 block w-full h-96  absolute z-0"
                />
                <motion.div
                    ref={ref}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -75 },
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{ duration: 1, delay: 0.25 }} 
                    className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-0  mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12"
                    style={{backgroundColor : "#3b82f6"}}
                    >
                    <p className="text-3xl font-semibold text-white-800">2K+</p>
                    <p className="text-base leading-4 xl:mt-4 mt-2 text-white-600">
                        Companies Helped
                    </p>
                </motion.div>
                <motion.div
                    ref={ref}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 75 },
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{ duration: 1, delay: 0.25 }} 
                    className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-0 sm:mt-0 mt-4 xl:mt-80  xl:-ml-0 sm:-ml-12"
                    style={{backgroundColor : "#3b82f6"}}
                    >
                    <p className="text-3xl font-semibold text-white-800">25%</p>
                    <p className="text-base leading-4 xl:mt-4 mt-2 text-white-600">
                        Average Performance Increase
                    </p>
                </motion.div>
                <motion.div
                    ref={ref}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 75 },
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{ duration: 1, delay: 0.25 }} 
                    className="shadow-lg xl:p-6 p-4 sm:w-auto w-full sm:absolute relative z-0 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24"
                    style={{backgroundColor : "#3b82f6"}}
                    >
                    <p className="text-3xl font-semibold text-white-800">70%</p>
                    <p className="text-base leading-4 xl:mt-4 mt-2 text-white-600">
                        Companies Purchase Again
                    </p>
                </motion.div>
            </div>
        </div>
        {/* <Features /> */}
        {/* <Prices /> */}
        {/* <CallToAction /> */}
        <Review />
        <Footer />
      </div>
      
      

    </>
    
  )
}
export default Homepage;
