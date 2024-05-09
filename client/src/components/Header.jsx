import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
	const {
		mainText,
		subText,
		btnTextOne,
		btnLinkOne,
		btnTextTwo,
		btnTwoFunction,
		loading,
	} = props;

	return (
		<div className="mb-3">
			<h1 className="text-4xl text-center font-bold mt-16 mb-3">{mainText}</h1>
			{subText && (
				<p className="text-xl text-center font-bold italic mb-3">{subText}</p>
			)}
			<div className="w-3/4 mx-auto flex justify-center items-center gap-3">
				{btnTextOne && (
					<Link to={btnLinkOne} className="btn-primary text-sm">
						{btnTextOne}
					</Link>
				)}
				{btnTextTwo && (
					<button
						onClick={btnTwoFunction}
						className={
							!loading
								? "btn-primary text-sm"
								: "animate-pulse btn-primary text-sm"
						}
						disabled={loading} // Disable the button when loading
					>
						{!loading ? btnTextTwo : "Processing..."}
					</button>
				)}
			</div>
		</div>
	);
};

export default Header;
