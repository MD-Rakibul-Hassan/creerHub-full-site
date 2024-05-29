import { useInView } from "react-intersection-observer";
import { allJobPngs } from "./allPngs";
import { useEffect, useState } from "react";

const JobList = () => {

	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const element = document.getElementById("animatedElement");
		if (element) {
			const rect = element.getBoundingClientRect();
			if (rect.top < window.innerHeight) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, );

	return (
		<div className="lg:mt-40 my-10 flex flex-col justify-center items-center px-10 lg:px-20">
			<div>
				<h1 className="text-5xl font-extrabold leading-10 my-3 text-center">
					Job Category List
				</h1>
				<p className="text-[#757575] font-medium">
					Explore thousands of opportunities with all the information you need.
					It's your future
				</p>
			</div>
			<div
				className={`flex flex-col lg:flex-row gap-10 justify-center w-full  my-10 `}
			>
				{allJobPngs.map((job) => {
					const { title, body, img } = job;
					return (
						<div
							id="animatedElement"
							// ref={ref}
							key={img}
							className={`bg-slate-200 p-10 hover:bg-transparent duration-700 rounded-md animate__animated  ${
								isVisible && "animate__backInUp"
							}`}
						>
							<img className="bg-slate-300 p-5 rounded-md" src={img} alt="" />
							<h2 className="text-[20px] font-extrabold my-3">{title}</h2>
							<p className="text-[#A3A3A3]">{body}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default JobList;
