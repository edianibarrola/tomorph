import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div className="circle">
				<div className="circleContent shimmer">Hello</div>
			</div>
			<div className="circle">
				<div className="circleContent shimmer">Neo</div>
			</div>
			<div className="circle">
				<div className="circleContent shimmer">Morphism</div>
			</div>
			<div className="block">
				<div className="blockContent shimmer">hello</div>
			</div>
		</div>
	);
};
