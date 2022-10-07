import React from 'react';
import './style.css';
export interface ContentBoxInterface {
	children: React.ReactNode;
	icon?: string;
	title: string;
	color?: string;
}

export const ContentBox: React.FC<ContentBoxInterface> = ({ icon = '', title, color = '#ccc', children }) => {
	return (
		<div className="content-box" style={{borderColor: color}}>
			<div className="content-box-border-top" style={{ backgroundColor: color }}></div>
			<div className="constent-box-icon" style={{ borderColor: color }}>
				<h1>{icon}</h1>
			</div>
			<div className="content-box-title">
				<h1 className="text-dot">{title}</h1>
			</div>
			<div className="content-box-container">{children}</div>
		</div>
	);
};