
import React from 'react'

const Footer = () => {
  return (
		<div className='mt-10'>
			<footer className="footer p-10 bg-neutral text-neutral-content px-10 lg:px-64 grid gap-x-28 lg:grid-cols-4  my-5 grid-cols-2">
				<nav className=''>
					<h6 className="footer-title">CreerHub</h6>
				  <a className="link link-hover w-[200px]">
					  There are many variantions of passages of Lorem Ipsum, but the majority have sufferd altertion in some from
					</a>
					
				</nav>
				<nav>
					<h6 className="footer-title">Services</h6>
					<a className="link link-hover">Branding</a>
					<a className="link link-hover">Design</a>
					<a className="link link-hover">Marketing</a>
					<a className="link link-hover">Advertisement</a>
				</nav>
				<nav>
					<h6 className="footer-title">Company</h6>
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Contact</a>
					<a className="link link-hover">Jobs</a>
					<a className="link link-hover">Press kit</a>
				</nav>
				<nav>
					<h6 className="footer-title">Legal</h6>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</nav>
			</footer>
		</div>
	);
}

export default Footer
