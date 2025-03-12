import {Header} from "./common/components/Header/Header";
import {Character} from "./pages/CharacterPage/ChatacerPage";
import {Episode} from "./pages/EpisodePage/EpisodePage";
import {HomePage} from "./pages/HomePage/HomePage";
import {Location} from "./pages/LocationPage/LocationPage";

function App() {
	return (
		<div>
			<Header />
			<HomePage />
			<Character />
			<Episode />
			<Location />
		</div>
	);
}

export default App;
