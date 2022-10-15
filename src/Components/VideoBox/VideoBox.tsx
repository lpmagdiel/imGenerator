import React, { useState } from 'react';
import { ContentBox } from '@/Components';
import { translate as t } from '@/translations/translate';
import { Slider } from '../Slider';
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

	const handleChange = (newValue: number) => {
		const quality = marks.filter(mark => mark.value === newValue)[0];
		setUrl(`${window.location.origin}/video/${quality.label}`);
	};

	return (
		<ContentBox title="Video" icon="📺" color="#7D3C98">
			<div className="video-box" style={{ backgroundColor: bg }}>
				<div className="video-box-row p-20 w-100">
					<Slider min={1} max={7} step={1} onChange={handleChange} mark={marks} />
				</div>
				<div className="min-space"></div>
				<div className="video-box-row">
					<a href={url} target="_blank">{t('openImage')}</a>
				</div>
			</div>
		</ContentBox>
	);
}
