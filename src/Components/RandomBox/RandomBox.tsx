import { Slider } from '@mui/material';
import React, { useState } from 'react';
export interface RandomBoxInterface {
	bg?: string;
}

export const RandomBox : React.FC<RandomBoxInterface> = ({ bg = 'transparent' }) => {
	const [url, setUrl] = useState(`${window.location.origin}/random/medium`);
	const marks = [
		{
		  value: 1,
		  label: 'Pequeño',
		},
		{
		  value: 2,
		  label: 'Mediano',
		},
		{
		  value: 3,
		  label: 'Grande',
		},
	  ];

	  const handleChange = (event: Event, newValue: number | number[]) => {
		const quality = newValue === 1 ? 'small' : newValue === 2 ? 'medium' : 'large';
		setUrl(`${window.location.origin}/random/${quality}`);
	  };

	return (
		<div className="video-box" style={{ backgroundColor: bg }}>
			<div className="video-box-row p-20">
				<Slider
					aria-label="image size"
					track={false}
					defaultValue={2}
					step={1}
					min={1}
					max={3}
					valueLabelDisplay="off"
					marks={marks}
					color="secondary"
					onChange={handleChange}
				/>
			</div>
			<div className="video-box-row">
			<a href={url} target="_blank">{url}</a>
			</div>
		</div>
	);
};
