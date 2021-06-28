import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const MyNavbar = () => {
	return (
		<Navbar variant="light">
			<Navbar.Brand href="#home">Navbar</Navbar.Brand>
			<Nav className="ml-auto">
				<Nav.Link href="/demo">About</Nav.Link>
				<Nav.Link href="#features">Contact</Nav.Link>
				<Nav.Link href="#pricing">Resume</Nav.Link>
			</Nav>
		</Navbar>
	);
};
