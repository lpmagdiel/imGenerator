import React, { useEffect, useState } from 'react';
import './style.css';

export interface ImageBoxInterface {
	bg?: string;
}

export const ImageBox: React.FC<ImageBoxInterface> = ({bg = '#fff'}) => {
	const [width, setWidth] = useState(80);
	const [height, setHeight] = useState(80);
	const [color, setColor] = useState('#000');
	const [url, setUrl] = useState(`${window.location.origin}/image/80x80/000`);

	useEffect(() => {
		setUrl(`${window.location.origin}/image/${width}x${height}/${color.replace('#', '')}`);
	}, [width, height, color]);

	return (
		<div className="image-box" style={{backgroundColor: bg}}>
			<div className="image-box-row">
				<h1>Generar imagen</h1>
			</div>
			<div className="image-box-row">
				<input type="number" min="20" placeholder='Ancho' value={width} onChange={e => setWidth(Number(e.target.value))} className="in" />
				<h1>/</h1>
				<input type="number" min="20" placeholder='Alto' value={height} onChange={e => setHeight(Number(e.target.value))} className="in" />
				<h1>/</h1>
				<label htmlFor="color">
					<div className="btn btn-color" style={{ backgroundColor: color }}>
						<p>Fondo</p>
					</div>
				</label>
				<input type="color" id='color' value={color} onChange={e => setColor(e.target.value)} className="in" />
			</div>
			<div className="image-box-row">
				<a href={url} target="_blank">{url}</a>
			</div>
		</div>
	);
};
