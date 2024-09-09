import "./educationCard.scss";

export const EducationCard = ({ data }) => {
    const { name, period, type, degree } = data;
    return (
        <div className="education-card">
            <div className="education__line"> </div>
            <div>
                <div className="education__item">
                    <strong>Name:</strong> {name}
                </div>
                <div className="education__item">
                    <strong>Period:</strong> {period}
                </div>
                <div className="education__item">
                    <strong>Format:</strong> {type}
                </div>
                <div className="education__item">
                    <strong>Degree:</strong> {degree}
                </div>
            </div>
        </div>
    );
};
