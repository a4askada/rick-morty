import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import {HomePage} from "./pages/Homepage/HomePage";
import {Header} from "./common/components/header/Header";
import {LocationPage} from "./pages/Locationpage/LocationPage";
import {CharacterPage} from "./pages/Characterpage/CharacterPage";
import {EpisodePage} from "./pages/Episodepage/EpisodePage";

import {Route, Routes} from "react-router";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/characters" element={<CharacterPage />} />
				<Route path="/locations" element={<LocationPage />} />
				<Route path="/episodes" element={<EpisodePage />} />
			</Routes>
		</div>
	);
}

export default App;
