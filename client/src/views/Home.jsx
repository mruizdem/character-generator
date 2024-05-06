import React, { useState } from "react";
import CharacterPanel from "../components/CharacterPanel";

const Home = (props) => {
	const characters = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<>
			<h1 className="text-center text-3xl font-bold underline my-3">
				Home Page Testing!
			</h1>
			<div className="text-center">
				<button className="btn-success">Create a new character</button>
			</div>
			<hr className="my-3" />
			<div className="w-3/4 mx-auto flex flex-col md:grid md:grid-cols-3 gap-3 mb-5">
				{characters.map((character, index) => (
					<CharacterPanel key={index} info={character} />
				))}
			</div>
		</>
	);
};

export default Home;