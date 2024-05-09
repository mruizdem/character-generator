import React, { useEffect, useState } from "react";
import charData from "../data.js";
import { getOneCharacter } from "../services/BackendService.js";

const CharacterForm = (props) => {
	const { handleSubmit, characterId } = props;
	const usableData = charData;
	const [character, setCharacter] = useState({
		name: "",
		gender: "pick",
		race: "pick",
		class: "pick",
		faction: "pick",
		weapon: "pick",
		description: "",
		backstory: "",
	});

	useEffect(() => {
		if (characterId) {
			getOneCharacter(characterId)
				.then((res) => setCharacter(res))
				.catch((err) => console.error(err));
		}
	}, []);

	return (
		<>
			<form onSubmit={(e) => handleSubmit(e, character)}>
				<input name="user" type="text" defaultValue={"anonymous"} hidden />
				<div>
					<label>Name:</label>
					<input
						name="name"
						value={character.name}
						onChange={(e) =>
							setCharacter({ ...character, name: e.target.value })
						}
						className="form-input mb-3"
						type="text"
					/>
				</div>
				{/* gender */}
				<div className="w-full">
					<label>Gender:</label>
					<select
						name="gender"
						value={character.gender}
						onChange={(e) =>
							setCharacter({ ...character, gender: e.target.value })
						}
						id="gender"
						className="form-input mb-3"
					>
						<option value="pick" disabled>
							--Select One--
						</option>
						{usableData.gender.map((gender, index) => (
							<option key={index} value={gender}>
								{gender}
							</option>
						))}
					</select>
				</div>
				<div className="flex gap-3">
					{/* race */}
					<div className="w-1/2">
						<label>Race:</label>
						<select
							value={character.race}
							onChange={(e) =>
								setCharacter({ ...character, race: e.target.value })
							}
							name="race"
							id="race"
							className="form-input mb-3"
						>
							<option value="pick" disabled>
								--Select One--
							</option>
							{usableData.races.map((race, index) => (
								<option key={index} value={race}>
									{race}
								</option>
							))}
						</select>
					</div>
					{/* class */}
					<div className="w-1/2">
						<label>Class:</label>
						<select
							value={character.class}
							onChange={(e) =>
								setCharacter({ ...character, class: e.target.value })
							}
							name="class"
							id="class"
							className="form-input mb-3"
						>
							<option value="pick" disabled>
								--Select One--
							</option>
							{usableData.classes.map((charClass, index) => (
								<option key={index} value={charClass}>
									{charClass}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="flex gap-3">
					{/* factions */}
					<div className="w-1/2">
						<label>Factions:</label>
						<select
							value={character.faction}
							onChange={(e) =>
								setCharacter({ ...character, faction: e.target.value })
							}
							name="faction"
							id="faction"
							className="form-input mb-3"
						>
							<option value="pick" disabled>
								--Select One--
							</option>
							{usableData.factions.map((faction, index) => (
								<option key={index} value={faction}>
									{faction}
								</option>
							))}
						</select>
					</div>
					{/* weapons */}
					<div className="w-1/2">
						<label>Weapons:</label>
						<select
							value={character.weapon}
							onChange={(e) =>
								setCharacter({ ...character, weapon: e.target.value })
							}
							name="weapon"
							id="weapon"
							className="form-input mb-3"
						>
							<option value="pick" disabled>
								--Select One--
							</option>
							{usableData.weapons.map((weapon, index) => (
								<option key={index} value={weapon}>
									{weapon}
								</option>
							))}
						</select>
					</div>
				</div>
				{/* description */}
				<div>
					<label>Description:</label>
					<textarea
						name="description"
						id="description"
						className="form-input mb-3"
					></textarea>
				</div>
				{/* backstory */}
				<div>
					<label>Backstory:</label>
					<textarea
						name="backstory"
						id="backstory"
						className="form-input mb-3"
					></textarea>
				</div>
				<div className="w-3/4 mx-auto">
					<button className="btn-primary w-full">Submit</button>
				</div>
			</form>
		</>
	);
};

export default CharacterForm;
