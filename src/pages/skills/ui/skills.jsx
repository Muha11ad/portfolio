import React from "react";
import { SkillsContent } from "../../../components/skills-content/ui/skillsContent";
import { SKILLS_EXPORT } from "../../../assets/consts";

export const Skills = () => {
	const content = SKILLS_EXPORT.map(({ name, data }, index) => (
		<SkillsContent key={index} name={name} data={data} />
	));
	return <div className="container">{content}</div>;
};
