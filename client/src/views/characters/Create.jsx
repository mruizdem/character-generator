import React, { useState } from "react";
import CharacterForm from "../../components/CharacterForm";
import Header from "../../components/Header";
import { createCharacter } from "../../services/BackendService";

const CreateCharacter = (props) => {
	const handleSubmit = (e, character) => {
		e.preventDefault();
		createCharacter(character)
			.then((res) => res)
			.catch((err) => console.log(err));
	};
	return (
		<>
			<Header
				mainText={"Create A Character"}
				subText={"or generate a random one!"}
				btnTextOne={"Return Home"}
				btnLinkOne={"/"}
				btnTextTwo={"Generate Random!"}
			/>
			<div className="w-3/4 mx-auto rounded-xl text-white bg-slate-900 bg-opacity-60 p-6">
				<CharacterForm handleSubmit={handleSubmit} />
			</div>
		</>
	);
};

export default CreateCharacter;
