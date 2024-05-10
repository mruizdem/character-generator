import React, { useState } from "react";
import CharacterForm from "../../components/CharacterForm";
import Header from "../../components/Header";
import { createCharacter } from "../../services/BackendService";
import { useNavigate } from "react-router-dom";

const CreateCharacter = (props) => {
	const navigate = useNavigate();
	const [errors, setErrors] = useState([]);
	const [loading, setLoading] = useState(false);
	const [random, setRandom] = useState(false);

	const handleSubmit = (e, character) => {
		e.preventDefault();
		createCharacter(character)
			.then((res) => navigate(`/character/${res._id}`))
			.catch((err) => setErrors(err));
	};

	const randomize = () => {
		setRandom(true);
	};

	return (
		<>
			<Header
				mainText={"Create A Character"}
				subText={"or generate a random one!"}
				btnTextOne={"Return Home"}
				btnLinkOne={"/"}
				btnTextTwo={"Generate Random!"}
				btnTwoFunction={randomize}
				loading={loading}
			/>
			<div className="w-3/4 mx-auto rounded-xl text-white bg-slate-900 bg-opacity-60 p-6">
				<CharacterForm
					handleSubmit={handleSubmit}
					errors={errors}
					random={random}
					setRandom={setRandom}
					loading={loading}
					setLoading={setLoading}
				/>
			</div>
		</>
	);
};

export default CreateCharacter;
