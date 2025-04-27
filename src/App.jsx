import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import {HomePage} from "./pages/HomePage";
import {Header} from "./common/components/header/Header";
import {CharacterPage} from "./pages/CharacterPage";
import {LocationPage} from "./pages/LocationPage";
import {EpisodePage} from "./pages/EpisodePage";
import {Route, Routes} from "react-router";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/characterPage" element={<CharacterPage />} />
				<Route path="/locationPage" element={<LocationPage />} />
				<Route path="/episodePage" element={<EpisodePage />} />
			</Routes>
		</div>
	);
}

export default App;
