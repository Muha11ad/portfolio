import "./asideCard.scss";

export const AsideCard = ({ onClick, title, link, icon, content }) => {
  const classNames = content === link ? "aside-card active-aside-card" : "aside-card";
  return (
    <button className={classNames} onClick={onClick}>
      <i className={icon} size="lg" color="white"></i>
      <span className="aside-card__title">{title}</span>
    </button>
  );
};
