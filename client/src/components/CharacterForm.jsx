import React, { useState } from "react";
import charData from "../data.js";

const CharacterForm = (props) => {
	const usableData = charData;
	return (
		<>
			<form>
				<div>
					<label>Name:</label>
					<input className="form-input mb-3" type="text" />
				</div>
				<div className="flex gap-3">
					<div className="w-1/2">
						<label>Race:</label>
						<select name="race" id="race" className="form-input mb-3">
							<option value="select" disabled selected>
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
						<select name="charClass" id="charClass" className="form-input mb-3">
							<option value="select" disabled selected>
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
						<select name="faction" id="faction" className="form-input mb-3">
							<option value="select" disabled selected>
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
						<select name="weapon" id="weapon" className="form-input mb-3">
							<option value="select" disabled selected>
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
					<input className="form-input mb-3" type="text" />
				</div>
				<div>
					<label>Backstory:</label>
					<input className="form-input mb-3" type="text" />
				</div>
				<div className="w-3/4 mx-auto">
					<button className="btn-warning w-full">Submit</button>
				</div>
			</form>
		</>
	);
};

export default CharacterForm;
