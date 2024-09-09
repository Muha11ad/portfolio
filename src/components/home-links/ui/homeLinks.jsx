import  "./homeLinks.scss";

export const HomeLinks = () => {
	return (
		<div className="home-links">
			<a
				className="home-link"
				target="_blank"
				href="https://github.com/Muha11ad"
                rel="noreferrer"
			>
				<i className="bx bxl-github"></i>
				Github
			</a>
			<a className="home-link" target="_blank" href="https://t.me/murodovicma" rel="noreferrer">
				<i className="bx bxl-telegram"></i>
				 Telegram
			</a>
			<a
				className="home-link"
				target="_blank"
				href="https://mail.google.com/mail/?view=cm&fs=1&to=mukhammadjonadbushukurov70@gmail.com"
                rel="noreferrer"
			>
				<i className="bx bxl-gmail"></i>
				Gmail
			</a>
			<a className="home-link" target="_blank" href="tel:+998333393989" rel="noreferrer">
				<i className="bx bx-phone"></i>
				Phone
			</a>
			<a className="home-link" target="_blank" href="https://selective-slope-555.notion.site/IT-139ea9d28e134137ab85c84ff5adf83e?pvs=74" rel="noreferrer">
				<i className="bx bx-notepad"></i>
				Notion
			</a>
			<a className="home-link" target="_blank" href="https://leetcode.com/u/Muha11ad/" rel="noreferrer">
				<i className="bx bx-code-alt"></i>
				Leet-code
			</a>
		</div>
	);
};
