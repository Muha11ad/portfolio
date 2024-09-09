import { useState, useEffect } from "react";
import { Aside } from "./components/aside";
import { Home } from "./pages/home/ui/home";
import { Projects } from "./pages/projects/";
import { Education } from "./pages/education";
import { Skills } from "./pages/skills/ui/skills";

export function App() {
	const [content, setContent] = useState("home");
	const [isVisible, setIsVisible] = useState(false);

	let appContent;

	switch (content) {
		case "home":
			appContent = <Home />;
			break;
		case "skills":
			appContent = <Skills />;
			break;
		case "projects":
			appContent = <Projects />;
			break;
		case "education":
			appContent = <Education />;
			break;
		default:
			appContent = <div>Content not found</div>;
	}

	return (
		<div className="App">
			<Aside
				setState={setContent}
				state={content}
				setIsVisible={setIsVisible}
				isVisible={isVisible}
			/>
			<div className="app-content container">
				<button className="btn-open" onClick={() => setIsVisible(!isVisible)}>
					Menu
				</button>
				{appContent}
			</div>
		</div>
	);
}
