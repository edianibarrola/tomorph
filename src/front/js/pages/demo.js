import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="circle">
					<span className="circleContent shimmer">hello</span>
				</div>
				<div className="circle">
					<span className="circleContent shimmer">hello</span>
				</div>
				<div className="circle">
					<span className="circleContent shimmer">hello</span>
				</div>
			</div>
			<div className="row">
				<div className="col-3 d-flex justify-content-center">
					<Image
						className=" bordered p-3"
						src="https://res.cloudinary.com/petrep/image/upload/v1624895292/portfolio/32538A2C-73DB-4578-B010-A97239F08B98_copy_is1v0a.jpg"
						alt="photo of edian ibarrola"
						roundedCircle
						fluid
					/>
				</div>
				<div className="col">
					<div className="block h-100 d-flex-column align-items-center justify-content-center text-center">
						<h1>Edian Ibarrola</h1>
						<h2> Full-Stack Developer</h2>
					</div>
				</div>
			</div>
		</div>
	);
};
