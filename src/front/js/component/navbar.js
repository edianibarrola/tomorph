import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Edian</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn  p-3">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
