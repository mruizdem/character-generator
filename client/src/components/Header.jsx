import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
	const { mainText, subText, btnTextOne, btnLinkOne, btnTextTwo } = props;

	return (
		<div className="mb-3">
			<h1 className="text-4xl text-center font-bold mt-16 mb-1">{mainText}</h1>
			{subText && <p className="text-center italic mb-3">{subText}</p>}
			<div className="w-3/4 mx-auto flex justify-center items-center gap-3">
				{btnTextOne && (
					<Link to={btnLinkOne} className="btn-primary text-sm">
						{btnTextOne}
					</Link>
				)}
				{btnTextTwo && (
					<button className="btn-primary text-sm">{btnTextTwo}</button>
				)}
			</div>
		</div>
	);
};

export default Header;
