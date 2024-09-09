import "./home.scss";
import hello from "../../../assets/images/hello.png";
import { HomeLinks } from "../../../components/home-links";
import { HomeIntroTitle } from "../../../components/home-introduction";

export const Home = () => {
	return (
		<div className="container home-container">
			<div className="home-intro">
				<div>
				<HomeIntroTitle />
				<HomeLinks/>
				</div>
				<img src={hello} alt="my persone" className="home-images" />
			</div>
		</div>
	);
};
