import "./aside.scss";
import { AsideCard } from "../../aside-card/";
import { ASIDE_CONTENT } from "../../../assets/consts";

export const Aside = ({ setState, state, isVisible, setIsVisible }) => {
	function changeContent(link) {
		setState(link);
		setIsVisible(false);
	}

	const content = ASIDE_CONTENT?.map(({ link, title, icon }, index) => {
		return (
			<AsideCard
				key={index}
				icon={icon}
				link={link}
				title={title}
				content={state}
				onClick={() => changeContent(link)}
			/>
		);
	});

	const classNames = `aside-wrapper ${isVisible ? "visible" : ""}`;

	return (
		<aside className={classNames}>
			<button className="btn-close" onClick={() => setIsVisible(false)}>
				Close
			</button>
			<h1 className="aside__title">PORTFOLIO</h1>
			<div className="aside-content-wrapper">{content}</div>
		</aside>
	);
};
