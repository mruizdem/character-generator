import React, { useState } from "react";
import charData from "../data.js";

const CharacterForm = (props) => {
	const usableData = charData;

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input name="user" type="text" defaultValue={"anonymous"} hidden />
				<div>
					<label>Name:</label>
					<input className="form-input mb-3" type="text" />
				</div>
				<div className="flex gap-3">
					<div className="w-1/2">
						<label>Race:</label>
						<select
							name="race"
							id="race"
							defaultValue={"pick"}
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
					<div className="w-1/2">
						<label>Class:</label>
						<select
							name="charClass"
							id="charClass"
							defaultValue={"pick"}
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
					<div className="w-1/2">
						<label>Factions:</label>
						<select
							name="faction"
							id="faction"
							defaultValue={"pick"}
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
					<div className="w-1/2">
						<label>Weapons:</label>
						<select
							name="weapon"
							id="weapon"
							defaultValue={"pick"}
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
				<div>
					<label>Description:</label>
					<textarea
						name="description"
						id="description"
						className="form-input mb-3"
					></textarea>
				</div>
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
