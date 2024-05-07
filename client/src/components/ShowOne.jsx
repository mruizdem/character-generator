import React, { useState } from "react";

const ShowOne = (props) => {
	const { character } = props;
	return (
		<>
			<h1 className="text-2xl text-center">{character.name}</h1>
			<hr className="my-3" />
			<p className="mb-3">Race: {character.race}</p>
			<p className="mb-3">Class: {character.class}</p>
			<p className="mb-3">Factions: {character.factions.join(", ")}</p>
			<p className="mb-3">Available Weapons: {character.weapons.join(", ")}</p>
			<p className="italic mb-3">{character.description}</p>
			<p className="italic mb-3">{character.backstory}</p>
			<div className="flex justify-between items-center">
				<button className="btn-primary text-sm">Edit Character</button>
				<button className="btn-danger text-sm">Delete Character</button>
			</div>
		</>
	);
};

export default ShowOne;
