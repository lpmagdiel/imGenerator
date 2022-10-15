import React from 'react';
import './Nav.scss';
export interface NavInterface {
	title?: string;
	children?: React.ReactNode;
}

const Nav: React.FC<NavInterface> = ({ title = '', children }) => {
	return (
		<nav className="navbar d-flex">
			<div className="container-fluid">
				<a className="navbar-brand"><h1>{title}</h1></a>
				<div className="nav-content">{children}</div>
			</div>
		</nav>
	)
};

export default Nav;
