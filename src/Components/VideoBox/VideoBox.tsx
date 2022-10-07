import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import './style.css';

export interface VideoBoxInterface {
	bg?: string;
}

export const VideoBox: React.FC<VideoBoxInterface> = ({ bg = 'transparent' }) => {
	const [url, setUrl] = useState(`${window.location.origin}/video/SD`);
	const marks = [
		{
		  value: 1,
		  label: 'SD',
		},
		{
		  value: 2,
		  label: 'HD',
		},
		{
		  value: 3,
		  label: 'FHD',
		},
		{
		  value: 4,
		  label: 'QHD',
		},
		{
			value: 5,
			label: '2K',
		  },
		  {
			value: 6,
			label: '4K',
		  },
		  {
			value: 7,
			label: '8K',
		  },
	  ];

	  const handleChange = (event: Event, newValue: number | number[]) => {
		const quality = marks.filter(mark => mark.value === newValue)[0];
		setUrl(`${window.location.origin}/video/${quality.label}`);
	  };

	return (
		<div className="video-box" style={{ backgroundColor: bg }}>
			<div className="video-box-row p-20">
				<Slider
					aria-label="video size"
					track={false}
					defaultValue={2}
					step={1}
					min={1}
					max={7}
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
}
