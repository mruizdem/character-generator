import React, { useEffect, useState } from "react";
import { charData, generateName } from "../data.js";
import { getOneCharacter } from "../services/BackendService.js";
import {
	generateBackstory,
	generateDescription,
} from "../services/AIService.js";

const CharacterForm = (props) => {
	const { handleSubmit, characterId, errors, loading, setLoading } = props;
	const usableData = charData;
	const [character, setCharacter] = useState({
		name: "",
		gender: "",
		race: "",
		class: "",
		faction: "",
		weapon: "",
		description: "",
		backstory: "",
	});

	const getRandomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const setRandomCharacter = async () => {
		setLoading(true);
		const newCharacter = {
			name: generateName(getRandomInt),
			gender: usableData.gender[getRandomInt(0, usableData.gender.length - 1)],
			race: usableData.races[getRandomInt(0, usableData.races.length - 1)],
			class: usableData.classes[getRandomInt(0, usableData.classes.length - 1)],
			faction:
				usableData.factions[getRandomInt(0, usableData.factions.length - 1)],
			weapon:
				usableData.weapons[getRandomInt(0, usableData.weapons.length - 1)],
		};

		try {
			const description = await generateDescription(newCharacter);
			const backstory = await generateBackstory(newCharacter);
			setCharacter({ ...newCharacter, backstory, description });
			props.setRandom(false);
		} catch (err) {
			console.error(`Error in main: ${err}`);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (characterId) {
			getOneCharacter(characterId)
				.then((res) => setCharacter(res))
				.catch((err) => console.error(err));
		}
	}, [characterId]);

	useEffect(() => {
		if (props.random) {
			setRandomCharacter();
		}
	}, [props.random]);

	return (
		<>
			{loading ? (
				// Loading skeleton while data is being fetched
				<div className=" animate-pulse p-3">
					<h1 className="text-3xl text-center">
						GENERATING RANDOM CHARACTER...
					</h1>
				</div>
			) : (
				<form onSubmit={(e) => handleSubmit(e, character)}>
					{/* name */}
					<input name="user" type="text" defaultValue={"anonymous"} hidden />
					<div className="flex justify-between">
						<label>Name:</label>
						{errors.name ? (
							<p className="text-red-500">{errors.name.message}</p>
						) : null}
					</div>
					<input
						name="name"
						value={character.name}
						onChange={(e) =>
							setCharacter({ ...character, name: e.target.value })
						}
						className="form-input mb-3"
						type="text"
					/>

					{/* gender */}
					<div className="w-full">
						<div className="flex justify-between">
							<label>Gender:</label>
							{errors.gender ? (
								<p className="text-red-500">{errors.gender.message}</p>
							) : null}
						</div>
						<select
							name="gender"
							value={character.gender}
							onChange={(e) =>
								setCharacter({ ...character, gender: e.target.value })
							}
							id="gender"
							className="form-input mb-3"
							required
						>
							<option value="" disabled>
								--Select One--
							</option>
							{usableData.gender.map((gender, index) => (
								<option key={index} value={gender}>
									{gender}
								</option>
							))}
						</select>
					</div>

					{/* form row */}
					<div className="flex gap-3">
						{/* race */}
						<div className="w-1/2">
							<div className="flex justify-between">
								<label>Race:</label>
								{errors.race ? (
									<p className="text-red-500">{errors.race.message}</p>
								) : null}
							</div>
							<select
								value={character.race}
								onChange={(e) =>
									setCharacter({ ...character, race: e.target.value })
								}
								name="race"
								id="race"
								className="form-input mb-3"
								required
							>
								<option value="" disabled>
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
							<div className="flex justify-between">
								<label>Class:</label>
								{errors.class ? (
									<p className="text-red-500">{errors.class.message}</p>
								) : null}
							</div>
							<select
								value={character.class}
								onChange={(e) =>
									setCharacter({ ...character, class: e.target.value })
								}
								name="class"
								id="class"
								className="form-input mb-3"
								required
							>
								<option value="" disabled>
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

					{/* form row */}
					<div className="flex gap-3">
						{/* factions */}
						<div className="w-1/2">
							<div className="flex justify-between">
								<label>Factions:</label>
								{errors.faction ? (
									<p className="text-red-500">{errors.faction.message}</p>
								) : null}
							</div>
							<select
								value={character.faction}
								onChange={(e) =>
									setCharacter({ ...character, faction: e.target.value })
								}
								name="faction"
								id="faction"
								className="form-input mb-3"
								required
							>
								<option value="" disabled>
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
							<div className="flex justify-between">
								<label>Weapons:</label>
								{errors.weapon ? (
									<p className="text-red-500">{errors.weapon.message}</p>
								) : null}
							</div>
							<select
								value={character.weapon}
								onChange={(e) =>
									setCharacter({ ...character, weapon: e.target.value })
								}
								name="weapon"
								id="weapon"
								className="form-input mb-3"
								required
							>
								<option value="" disabled>
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
					<div className="flex justify-between">
						<label>Description:</label>
						{errors.description ? (
							<p className="text-red-500">{errors.description.message}</p>
						) : null}
					</div>
					<textarea
						value={character.description}
						onChange={(e) =>
							setCharacter({ ...character, description: e.target.value })
						}
						name="description"
						id="description"
						rows={4}
						className="form-input mb-3"
					></textarea>

					{/* backstory */}
					<div className="flex justify-between">
						<label>Backstory:</label>
						{errors.backstory ? (
							<p className="text-red-500">{errors.backstory.message}</p>
						) : null}
					</div>
					<textarea
						value={character.backstory}
						onChange={(e) =>
							setCharacter({ ...character, backstory: e.target.value })
						}
						name="backstory"
						id="backstory"
						rows={5}
						className="form-input mb-3"
					></textarea>
					<div className="w-3/4 mx-auto">
						<button className="btn-primary w-full">Submit</button>
					</div>
				</form>
			)}
		</>
	);
};

export default CharacterForm;
