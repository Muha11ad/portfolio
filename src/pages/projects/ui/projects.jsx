import "./projects.scss";
import { PROJECTS_CONTENT } from "../../../assets/consts";
import { ProjectsCard } from "../../../components/projects-card";

export const Projects = () => {
	const content = PROJECTS_CONTENT.map(
		({ name, image, links, techs }, index) => (
			<ProjectsCard
				key={index}
				name={name}
				image={image}
				links={links}
				techs={techs}
			/>
		)
	);
	return (
		<div>
			<h2 className="projects-title">Quality over Quantity</h2>
			<div className="projects-wrapper">{content}</div>
		</div>
	);
};
