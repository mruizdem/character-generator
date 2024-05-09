import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import CharacterForm from "../../components/CharacterForm";

const UpdateCharacter = (props) => {
	const id = useParams();

	const handleSubmit = (e, character) => {
		e.preventDefault();
		console.log(character);
	};

	return (
		<>
			<Header
				mainText={"Update Character!"}
				btnTextOne={"Return Home"}
				btnLinkOne={"/"}
				btnTextTwo={"Generate Random!"}
			/>
			<div className="w-3/4 mx-auto rounded-xl text-white bg-slate-900 bg-opacity-60 p-6">
				<CharacterForm handleSubmit={handleSubmit} characterId={id.id} />
			</div>
		</>
	);
};

export default UpdateCharacter;
