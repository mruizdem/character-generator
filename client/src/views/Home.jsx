import React, { useState } from "react";
import CharacterPanel from "../components/CharacterPanel";
import Header from "../components/Header";

const Home = (props) => {
	const characters = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<>
			<Header
				mainText={"Welcome To Character Creator"}
				subText={"Browse through users creations!"}
				btnTextOne={"Create A Character"}
				btnLinkOne={"/character/create"}
			/>
			<div className="w-3/4 mx-auto flex flex-col md:grid md:grid-cols-3 gap-3 mb-5">
				{characters.map((character, index) => (
					<CharacterPanel key={index} info={character} />
				))}
			</div>
		</>
	);
};

export default Home;
