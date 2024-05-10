import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import CharacterForm from "../../components/CharacterForm";
import { updateCharacter } from "../../services/BackendService";

const UpdateCharacter = (props) => {
	const [errors, setErrors] = useState([]);
	const id = useParams();
	const navigate = useNavigate();

	const handleSubmit = (e, character) => {
		e.preventDefault();
		console.log(id.id);
		updateCharacter(id.id, character)
			.then((res) => navigate(`/character/${id.id}`))
			.catch((err) => setErrors(err));
	};

	return (
		<>
			<Header
				mainText={"Update Character!"}
				btnTextOne={"Return Home"}
				btnLinkOne={"/"}
			/>
			<div className="w-3/4 mx-auto rounded-xl text-white bg-slate-900 bg-opacity-60 p-6">
				<CharacterForm
					handleSubmit={handleSubmit}
					characterId={id.id}
					errors={errors}
				/>
			</div>
		</>
	);
};

export default UpdateCharacter;
