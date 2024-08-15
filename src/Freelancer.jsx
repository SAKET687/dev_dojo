import React from "react";
import "./Freelancer.css";
import sayak_img from "./images/sayak.png";
import saket_img from "./images/saket.png";

const Freelancer = () => {
	const freelancers = [
		{
			name: "Sayak Bhunia",
			design: "Frontend/UI/UX Developer",
			photo: { sayak_img },
			catchyLine:
				"Designing elegant interfaces that captivate and engage users.",
		},
		{
			name: "Saket Srivastava",
			design: "Backend Developer",
			photo: { saket_img },
			catchyLine:
				"Building the powerful backbone for your applications to ensure efficiency and scalability.",
		},
	];

	return (
		<div className="freelancer-page">
			<div className="header-section">
				<h1>Welcome to Our Freelancing Services</h1>
				<p>Unlock the potential of your projects with our expertise!</p>
			</div>
			<div className="freelancers-section">
				{freelancers.map((freelancer, index) => (
					<div className="freelancer-card" key={index}>
						<img
							src={freelancer.photo}
							alt={`${freelancer.name} photo`}
							className="freelancer-photo"
						/>
						<div className="freelancer-details">
							<h2>{freelancer.name}</h2>
							<h3>{freelancer.design}</h3>
							<p className="catchy-line">
								{freelancer.catchyLine}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="contact-section">
				<h2>Discuss Pricing and Start Your Project</h2>
				<p>
					Let us help you transform your ideas into reality. Get in
					touch!
				</p>
				<button className="contact-button">Contact Us</button>
			</div>
		</div>
	);
};

export default Freelancer;
