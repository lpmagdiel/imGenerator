import React, { useEffect, useState } from 'react';
import './style.css';

export interface ImageBoxInterface {
	bg?: string;
}

export const ImageBox: React.FC<ImageBoxInterface> = ({ bg = 'transparent' }) => {
	const [width, setWidth] = useState(180);
	const [height, setHeight] = useState(180);
	const [color, setColor] = useState('#000');
	const [url, setUrl] = useState(`${window.location.origin}/image/80x80/000`);

	useEffect(() => {
		setUrl(`${window.location.origin}/image/${width}x${height}/${color.replace('#', '')}`);
	}, [width, height, color]);

	return (
		<div className="image-box" style={{ backgroundColor: bg }}>
			<div className="image-box-row image-box-row-input-row">
				<input type="number" min="20" placeholder='Ancho' value={width} onChange={e => setWidth(Number(e.target.value))} className="in text-dot" />
				<h1 className="text-dot invisible-mobile">/</h1>
				<input type="number" min="20" placeholder='Alto' value={height} onChange={e => setHeight(Number(e.target.value))} className="in text-dot" />
				<h1 className="text-dot invisible-mobile">/</h1>
				<label htmlFor="color">
					<div className="btn btn-color text-dot" style={{ backgroundColor: color }}>
						<p>Fondo</p>
					</div>
				</label>
				<input type="color" id='color' value={color} onChange={e => setColor(e.target.value)} className="in text-dot" />
			</div>
			<div className="min-space"></div>
			<div className="image-box-row">
				<a href={url} target="_blank">Abrir imagen</a>
			</div>
		</div>
	);
};
