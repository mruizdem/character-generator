import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import CreateCharacter from "./views/characters/Create";

function App() {
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route path={"/character/create"} element={<CreateCharacter />} />
			</Routes>
		</>
	);
}

export default App;
