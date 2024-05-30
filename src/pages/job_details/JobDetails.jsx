import React, { useContext } from "react";
import { JobContext } from "../../contexts/jobcontext/JobContext";
import bg1 from "../../assets/images/bg1.png";
import { useParams } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineSubtitles } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import Btn from "../../components/button/Btn";
import { addObjectToLocalStorage } from "../../local_storage/applyed_job";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
	const { data } = useContext(JobContext);
	const { id } = useParams();
	const detailsJob = data.filter((job) => job.id == id);
	return (
		<div className=" ">
			<Helmet>
				<title>Job Details</title>
			</Helmet>
			<div className="flex lg:mt-24 mt-10 w-full ">
				<img src={bg1} alt="" className="hidden lg:flex" />
			</div>
			<h1 className="flex justify-center lg:-translate-y-36 lg:text-5xl text-2xl font-semibold ">
				Job Details
			</h1>
			<div className=" px-10 lg:px-20">
				{detailsJob &&
					detailsJob.map((items) => {
						const {
							job_responsibility,
							job_description,
							remote_or_onsite,
							job_title,
							job_type,
							salary,
							educational_requirements,
							experiences,
							contact_information,
						} = items;

						return (
							<div
								className="flex justify-center flex-col lg:flex-row gap-5"
								key={items.id}
							>
								<div className="w-full lg:w-1/2">
									<p className="text-[#757575] my-2">
										<span className="text-xl font-bold text-black">
											Job Decription:
										</span>
										{job_description}
									</p>
									<p className="text-[#757575] my-2">
										<span className="text-xl font-bold text-black">
											Job Responsability:
										</span>
										{job_responsibility}
									</p>
									<p className="text-[#757575] my-2">
										<span className="text-xl font-bold text-black">
											Educational_requirements:
										</span>{" "}
										<br />
										{educational_requirements}
									</p>
									<p className="text-[#757575] my-2">
										<span className="text-xl font-bold text-black">
											Experiences:
										</span>{" "}
										<br />
										{experiences}
									</p>
								</div>

								<div>
									<div className=" bg-[rgb(126,144,254,0.3)] p-10 rounded-md w-full ">
										<h1 className="border-b-[2px] border-b-[rgb(126,144,254,0.1)] pb-2 text-xl font-bold">
											Job Details
										</h1>

										<div className="border-b-[2px] border-b-[rgb(126,144,254,0.1)] pb-2 text-xl font-bold">
											<h1 className="text-[#757575] text-sm gap-2  flex items-center">
												<span className="text-xl text-black flex items-center gap-2">
													<RiMoneyDollarCircleLine className="text-blue-400" />
													Salary
												</span>{" "}
												: {salary} (Per Month)
											</h1>
											<h1 className="text-[#757575] text-sm gap-2  flex items-center">
												<span className="text-xl text-black flex items-center gap-2">
													<MdOutlineSubtitles className="text-blue-400" />
													Job Title
												</span>{" "}
												: {job_title}
											</h1>
											<h1 className="my-2">Contact Information</h1>
										</div>

										<h1 className="text-[#757575] text-sm gap-2  flex items-center">
											<span className="text-xl text-black flex items-center gap-2">
												<LuPhone className="text-blue-400" />
												Phone
											</span>{" "}
											: {contact_information.phone}
										</h1>

										<h1 className="text-[#757575] text-sm gap-2  flex items-center">
											<span className="text-xl text-black flex items-center gap-2">
												<TfiEmail className="text-blue-400" />
												Email
											</span>{" "}
											: {contact_information.email}
										</h1>
										<h1 className="text-[#757575] text-sm gap-2  flex items-center">
											<span className="text-xl text-black flex items-center gap-2">
												<IoLocationOutline className="text-blue-400" />
												Address
											</span>{" "}
											: {contact_information.address}
										</h1>
									</div>
									<Btn
										txt="Apply Now"
										style="w-full mt-5 rounded-xl"
										onclick={() => {
											addObjectToLocalStorage(items);
											Swal.fire({
												position: "center-center",
												icon: "success",
												title: "You have applied successfully",
												showConfirmButton: false,
												timer: 1500,
											});
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

export default JobDetails;
