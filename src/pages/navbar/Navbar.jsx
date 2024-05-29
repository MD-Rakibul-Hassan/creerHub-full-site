import { NavLink } from "react-router-dom";
import logo from '../../assets/logo/CareerHub.png'
import React, { useState } from "react";
import Btn from "../../components/button/Btn";
import { CgMenuLeftAlt } from "react-icons/cg";

const Navbar = () => {
	const [toggle,setToggle] = useState(false)
	return (
		<div className="flex justify-between items-center px-5 md:px-10 lg:px-20 py-5 ">
			<div>
				<img src={logo} alt="" />
			</div>
			<div
				className={`lg:flex gap-5  ${
					toggle
						? "flex flex-col absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[-20%] z-[999] bg-slate-600 w-full h-60 justify-center items-center "
						: "hidden"
				}`}
			>
				<NavLink
					to="/"
					className={({ isActive, isPending }) =>
						isActive ? "text-[#7E90FE] text-xl" : "text-xl text-[#757575]"
					}
				>
					Statics
				</NavLink>
				<NavLink
					to="/applied"
					className={({ isActive, isPending }) =>
						isActive ? "text-[#7E90FE] text-xl" : "text-xl text-[#757575]"
					}
				>
					Applied Jobs
				</NavLink>
			</div>
			<div className="hidden lg:flex">
				<Btn txt="Start Appling" style="rounded-md " />
			</div>
			<div className="lg:hidden text-2xl" onClick={() => setToggle(!toggle)}>
				<CgMenuLeftAlt />
			</div>
		</div>
	);
};

export default Navbar;
