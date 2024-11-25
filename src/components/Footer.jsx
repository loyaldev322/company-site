import React from 'react';
import { Link } from "react-router-dom";
import { ImLinkedin2,ImFacebook, ImTwitter } from "react-icons/im";
import ScrollToTop from 'react-scroll-up';
const Footer = () => {
  return (
	<>
	<div className="w-[70%]  h-[2px] bg-gradient-to-r from-blue-500 to-blue-200"></div>
    <div className="overflow-x-hidden max-w-screen font-poppins">
		<footer className="py-6 bg-gradient-to-br from-blue-100 ">
			<div className="container px-6 mx-auto space-y-6 divide-y  md:space-y-12 divide-opacity-50">
				<div className="grid justify-center pt-6 lg:justify-between">
					<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
						<span>©2024 <span className='text-blue-500'>SkyLine Digital</span>. All rights reserved.</span>
					</div>
					<div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
						<Link  to="/" title="Email" className="flex items-center justify-center  rounded-full">
							<ImLinkedin2 className='text-blue-500 w-7 h-7'/>
						</Link>
						<Link  to="/" title="Twitter" className="flex items-center justify-center  rounded-full">
							<ImFacebook className='text-blue-500 w-7 h-7'/>
						</Link>
						<Link  to="/" title="GitHub" className="flex items-center justify-center  rounded-full ">
							<ImTwitter className='text-blue-500 w-7 h-7'/>
						</Link>
					</div>
				</div>
			</div>
		</footer>
    </div>
     {/* scroll to top  */}
	<ScrollToTop showUnder={160}>
        <div className="bg-blue-500 w-10 h-10 text-white rounded-full flex items-center justify-center">
          <span>Top</span>
        </div>
      </ScrollToTop>
	</>
  );
}

export default Footer;