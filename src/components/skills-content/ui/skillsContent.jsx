import "./skillsContent.scss";

export const SkillsContent = ({ name, data }) => {
	const content = data.map(({title, image}, index) => (
		<li key={index} className="skills__item">
			<img className="skills__item-image" src={image} alt={title} />
			<p className="skills__item-title">{title}</p>
		</li>
	));
	return (
		<div className="skills-content-wrapper">
			<h2 className="skills-title">{name}</h2>
			<ul className="skills__list">{content}</ul>
		</div>
	);
};
