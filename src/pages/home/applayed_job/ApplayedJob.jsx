import React from "react";
import { getArrayFromLocalStorage } from "../../../local_storage/applyed_job";
import bg1 from "../../../assets/images/bg1.png";
import Btn from "../../../components/button/Btn";
import { useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Helmet } from "react-helmet-async";

const ApplayedJob = () => {
	const applayedJobs = getArrayFromLocalStorage("objectArray");
	const navigate = useNavigate();

	return (
		<div className="lg:px-20 px-10 ">
			<Helmet >
				<title>Applyed Job</title>
			</Helmet>
			<div className="mt-10 ">
				<img src={bg1} alt="" />
			</div>
			<div>
				<h1 className="lg:text-5xl text-2xl text-center -translate-y-32 ">
					Applayed Job
				</h1>
			</div>
			<div>
				{applayedJobs.map((job) => {
					const {
						id,
						job_responsibility,
						job_description,
						remote_or_onsite,
						job_title,
						company_name,
						job_type,
						salary,
						educational_requirements,
						experiences,
						contact_information,
						location,
						logo,
					} = job;
					return (
						<div
							key={id}
							className="flex flex-col lg:flex-row justify-between lg:px-10 m-5 border-[1px] p-5 rounded-md"
						>
							<div className="bg-slate-200 px-10 flex  items-center py-5 rounded-md  lg:w-[200px] justify-center">
								<h1>{logo}</h1>
							</div>
							<div>
								<div>
									<h1 className="text-xl font-bold my-2">{job_title}</h1>
									<p className="text-[#757575] font-semibold">{company_name}</p>
									<div className="my-3">
										<button className="border-[2px] px-3 py-2  ml-2 rounded-xl border-blue-500 text-blue-500">
											{remote_or_onsite}
										</button>
										<button className="border-[2px] px-3 py-2  ml-2 rounded-xl border-blue-500 text-blue-500">
											{job_type}
										</button>
									</div>
									<div className="flex gap-4">
                                        <p className="text-[#757575] flex items-center gap-3">
                                            <IoLocationOutline /> {location}</p>
                                        <p className="text-[#757575] flex items-center gap-3">
                                            <RiMoneyDollarCircleLine />
                                            {salary}</p>
									</div>
								</div>
							</div>
							<div className="flex items-center">
								<Btn
									txt="View Details"
									style="rounded-md h-14 my-2 w-full  "
									onclick={() => {
										navigate(`/details/${id}`);
										
									}}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ApplayedJob;
