import React, { useContext,  useState } from "react";
import Btn from "../../../components/button/Btn";
import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import { JobContext } from "../../../contexts/jobcontext/JobContext";

const FeaturedJob = () => {
	const { data } = useContext(JobContext);
	const [seall, setSeeAll] = useState(false);
	const slicedArray = data.slice(0, seall ? 4 : data.length);
	const handleSeeAll = () => {
		setSeeAll(!seall);
	};
	const { ref, inView } = useInView({
		threshold: 0.2, // Adjust this value as needed
		triggerOnce: false, // Trigger animation only once
	});

	return (
		<div>
			<div>
				<div className="my-5">
					<h1 className="text-5xl font-extrabold leading-10 my-3 text-center">
						Featured Jobs
					</h1>
					<p className="text-[#757575] text-center font-medium">
						Explore thousands of opportunities with all the information you
						need. It's your future
					</p>
				</div>
			</div>
			<div
				ref={ref}
				className="grid grid-cols-1 lg:grid-cols-2 w-full lg:w-2/3 mx-auto "
			>
				{slicedArray.map((job) => {
					const {
						id,
						logo,
						location,
						job_type,
						salary,
						remote_or_onsite,
						company_name,
						job_title,
						isLeft
					} = job;
					return (
						<div
							key={id}
							className={`border-2 m-5 p-5 rounded-md hover:p-10 hover:bg-slate-300 duration-700 animate__animated ${
								inView &&
								(isLeft == true
									? "animate__backInLeft"
									: "animate__backInRight")
							}`}
						>
							<h1
								className={`my-3 text-3xl lg:text-5xl ${
									logo === "NETFLIX" ? "text-red-500" : ""
								} ${logo === "Google" ? `text-blue-500` : ""} `}
							>
								{logo}
							</h1>
							<h2 className="my-1 text-md font-bold">{job_title}</h2>
							<p className="text-[#757575]">{company_name}</p>
							<div className="flex gap-3 my-3">
								<button className="border-[1px] px-4 py-2 bg-transparent rounded-md text-blue-500 border-blue-500">
									{remote_or_onsite}
								</button>
								<button className="border-[1px] px-4 py-2 bg-transparent rounded-md text-blue-500 border-blue-500">
									{job_type}
								</button>
							</div>
							<div className="flex gap-4 my-2">
								<p className="flex items-center gap-2">
									<CiLocationOn /> {location}
								</p>
								<p className="flex items-center gap-2">
									<RiMoneyDollarCircleLine /> Salary:{salary}
								</p>
							</div>
							<NavLink to={`/details/${id}`}>
								<Btn txt="View Details" style="rounded-md" />
							</NavLink>
						</div>
					);
				})}
			</div>
			<div className={`flex justify-center my-5 `} onClick={handleSeeAll}>
				<Btn
					txt={`${seall ? "See All Jobs" : "Show less"}`}
					style="rounded-md"
				/>
			</div>
		</div>
	);
};

export default FeaturedJob;
