import React, { useState } from "react";
import CharacterForm from "../../components/CharacterForm";

const CreateCharacter = (props) => {
	return (
		<>
			<h1 className="text-4xl text-center font-bold my-3">Create Testing!</h1>
			<div className="w-3/4 mx-auto">
				<CharacterForm />
			</div>
		</>
	);
};

export default CreateCharacter;
