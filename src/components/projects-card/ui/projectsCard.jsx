import "./projectsCard.scss";

export const ProjectsCard = ({ name, image, links, techs }) => {
	const techContent = techs.map(({ techName, nameClass }, index) => (
		<span key={index} className={nameClass}>
			{techName}, {" "}
		</span>
	));
	const linksContent = links.map(({ linkFor, link }, index) => (
		<a key={index} className="project-card__link" target="_blank" rel="noopener noreferrer" href={link}>
			{linkFor}
		</a>
	));
	return (
		<div className="project-card">
			<img className="project-card__image" src={image} alt={name} />
			<p className="project-card__title">{name}</p>
			<div className="project-card__links">{linksContent}</div>
			<div className="project-card__techs">
				<p className="project-card__tech">Techs:</p>
				{techContent}
			</div>
		</div>
	);
};
