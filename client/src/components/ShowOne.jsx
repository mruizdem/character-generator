import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteHandler } from "../services/BackendService";

const ShowOne = (props) => {
	const { character } = props;
	const navigate = useNavigate();

	const handleDelete = () => {
		deleteHandler(character._id)
			.then((res) => navigate("/"))
			.catch((err) => console.error(err));
	};

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
				<button onClick={handleDelete} className="btn-primary text-sm">
					Delete Character
				</button>
			</div>
		</>
	);
};

export default ShowOne;
