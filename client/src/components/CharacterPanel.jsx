import React, { useState } from "react";
import { Link } from "react-router-dom";

const CharacterPanel = (props) => {
	const { info } = props;
	return (
		<>
			<div className="relative rounded overflow-hidden text-center">
				<Link to={`/character/${info._id}`}>
					<img
						src="/src/assets/testCharacter.png"
						alt="test_img"
						className="w-full bg-slate-900 bg-opacity-60 rounded-2xl mb-3 hover:scale-105"
					/>
				</Link>
				<p className="text-xl font-bold">{info.name}</p>
				<p className="italic">Class: {info.class}</p>
				<p className="italic">Created By: Anonymous</p>
			</div>
		</>
	);
};

export default CharacterPanel;
