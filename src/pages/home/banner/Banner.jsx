import React from "react";
import Btn from "../../../components/button/Btn";
import user from '../../../assets/images/user.png'
const Banner = () => {
	return (
		<div className="flex flex-col-reverse md:flex-row justify-between px-20 mt-10">
			<div className="mt-10">
				<div className="py-3">
					<h1 className="text-[6vw] lg:leading-[6vw] font-bold">One Step</h1>
					<h1 className="text-[6vw] lg:leading-[6vw] font-bold">Closer To Your</h1>
					<h1 className="text-[6vw] lg:leading-[6vw] font-bold text-[#7E90FE]">
						Dream Job
					</h1>
				</div>
				<p className="text-md lg:text-lg font-medium lg:leading-[30px] text-left  text-[#757575] max-w-[500px] lg:py-3 py-2">
					Explore thousands fo job opportunities with all the information you
					need. Its your future.Come find it. Manage all your job application
					from start to finish.
                </p>
                <Btn txt='Get Started' style='rounded-md '/>
            </div>
            <div className="">
                <img src={user} alt="" />
            </div>
		</div>
	);
};

export default Banner;
