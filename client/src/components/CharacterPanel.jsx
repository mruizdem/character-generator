import React, { useState } from "react";

const CharacterPanel = (props) => {
	return (
		<>
			<div className="relative rounded overflow-hidden text-center">
				<a href="#">
					<img
						src="#"
						alt="test_img"
						className="w-full h-32 bg-black mb-3 hover:scale-105"
					/>
				</a>
				<p className="font-bold">Character Name</p>
				<p className="italic">Created By: TestUser</p>
			</div>
		</>
	);
};

export default CharacterPanel;
