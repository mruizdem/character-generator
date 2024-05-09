import React, { useEffect, useState } from "react";
import CharacterPanel from "../components/CharacterPanel";
import Header from "../components/Header";
import { getAllCharacters } from "../services/BackendService";

const Home = (props) => {
	const [allCharacters, setAllCharacters] = useState([]);

	useEffect(() => {
		getAllCharacters()
			.then((res) => setAllCharacters(res))
			.catch((err) => console.error(err));
	}, [allCharacters]);

	return (
		<>
			<Header
				mainText={"Welcome To Character Creator"}
				subText={"Browse through users creations!"}
				btnTextOne={"Create A Character"}
				btnLinkOne={"/character/create"}
			/>
			<div className="w-3/4 mx-auto flex flex-col md:grid md:grid-cols-3 gap-3 mb-5">
				{allCharacters.map((character, index) => (
					<CharacterPanel key={index} info={character} />
				))}
			</div>
		</>
	);
};

export default Home;
