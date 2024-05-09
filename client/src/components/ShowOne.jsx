import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShowOne = (props) => {
	const { character } = props;
	return (
		<>
			<h1 className="text-2xl text-center">{character.name}</h1>
			<hr className="my-3" />
			<p className="mb-3">Race: {character.race}</p>
			<p className="mb-3">Class: {character.class}</p>
			<p className="mb-3">Joined Faction: {character.faction}</p>
			<p className="mb-3">Starting Weapon: {character.weapon}</p>
			<p className="italic mb-3">{character.description}</p>
			<p className="italic mb-3">{character.backstory}</p>
			<div className="flex justify-between items-center">
				<Link
					to={`/character/edit/${character._id}`}
					className="btn-primary text-sm"
				>
					Edit Character
				</Link>
				<button className="btn-danger text-sm">Delete Character</button>
			</div>
		</>
	);
};

export default ShowOne;
