import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="row  d-flex align-items-center">
				<div className="col">
					<div className="circle">
						<div className="circleContent shimmer">
							<i className="fas fa-code fa-2x" />
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="block">
						<div className="blockContent shimmer">Full-Stack</div>
					</div>
				</div>
			</div>

			<div className="row  d-flex align-items-center">
				<div className="col">
					<div className="circle">
						<div className="circleContent shimmer">
							<i className="fas fa-camera fa-2x" />
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="block">
						<div className="blockContent shimmer">Photography</div>
					</div>
				</div>
			</div>

			<div className="row  d-flex align-items-center">
				<div className="col">
					<div className="circle">
						<div className="circleContent shimmer">
							<i className="fas fa-cogs fa-2x" />
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="block">
						<div className="blockContent shimmer">Creations</div>
					</div>
				</div>
			</div>
		</>
	);
};
