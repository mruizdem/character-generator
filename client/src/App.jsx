import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import CreateCharacter from "./views/characters/Create";
import OneCharacter from "./views/characters/ViewOne";
import UpdateCharacter from "./views/characters/Update";

function App() {
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route path={"/character/create"} element={<CreateCharacter />} />
				<Route path={"/character/:id"} element={<OneCharacter />} />
				<Route path={"/character/edit/:id"} element={<UpdateCharacter />} />
			</Routes>
		</>
	);
}

export default App;
