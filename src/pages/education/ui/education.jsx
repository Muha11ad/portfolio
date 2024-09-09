import "./education.scss";
import { EducationCard } from "../../../components/education-card";
import {
	FORMAL_EDUCATION_CONTENT,
	PRIVATE_EDUCATION_CONTENT,
} from "../../../assets/consts";

export const Education = () => {
	const formalContent = FORMAL_EDUCATION_CONTENT.map((data, index) => (
		<EducationCard key={index} data={data} />
	));
	const privateContent = PRIVATE_EDUCATION_CONTENT.map((data, index) => (
		<EducationCard key={index} data={data} />
	));

	return (
		<div className="education-section">
			<h2 className="education-title">Formal Education</h2>
			<div className="formal-education education-content">{formalContent}</div>
			<h2 className="education-title">Private Education</h2>
			<div className="private-education education-content">
				{privateContent}
			</div>

			<div className="education-bottom">
				<p>Also you can explore my study strategy and notes</p>
				<a
					target="_blank"
					className="education-link"
					rel="noreferrer"
					href="https://selective-slope-555.notion.site/IT-139ea9d28e134137ab85c84ff5adf83e?pvs=74"
				>
					here in notion
				</a>
			</div>
		</div>
	);
};
