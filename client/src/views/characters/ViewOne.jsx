import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ShowOne from "../../components/ShowOne";
import { getOneCharacter } from "../../services/BackendService";
import { useParams } from "react-router-dom";

const OneCharacter = (props) => {
	const [character, setCharacter] = useState({});
	const id = useParams();

	useEffect(() => {
		getOneCharacter(id.id)
			.then((res) => setCharacter(res))
			.catch((err) => console.log(err));
	}, []);

	// const character = {
	// 	name: "Ralph",
	// 	race: "elf",
	// 	class: "archer",
	// 	factions: ["thieves guild", "assassins"],
	// 	weapons: ["bow", "daggers"],
	// 	description:
	// 		"Ralph, an elven archer, possesses an otherworldly beauty, with striking features that mirror the ethereal grace of their kin. Their piercing eyes, the color of verdant forests, hold a hint of mischief, hinting at the cunning within.",
	// 	backstory:
	// 		"Born under the moonlit canopy of the ancient Elven forests, Ralph was destined for a life of stealth and cunning. Trained from a young age in the art of archery by the elders of the Thieves Guild, Ralph quickly rose through the ranks, becoming a feared assassin known for striking from the shadows. Despite their allegiance to the clandestine world of thieves and assassins, Ralph's loyalty lies with their people, always ready to defend their homeland against any threat that may arise.",
	// };

	return (
		<div>
			<Header
				mainText={"Check this one out!"}
				btnTextOne={"Return Home"}
				btnLinkOne={"/"}
			/>
			<div className="w-3/4 mx-auto rounded-xl text-white bg-slate-900 bg-opacity-60 p-6">
				<ShowOne character={character} />
			</div>
		</div>
	);
};

export default OneCharacter;
