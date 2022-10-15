import React, { useState } from 'react';
import { translate as t } from '@/translations/translate';
import { ContentBox, Slider } from '@/Components';
export interface RandomBoxInterface {
	bg?: string;
}

export const RandomBox: React.FC<RandomBoxInterface> = ({ bg = 'transparent' }) => {
	const [url, setUrl] = useState(`${window.location.origin}/random/medium`);
	const marks = [
		{
			value: 1,
			label: 'small',
		},
		{
			value: 2,
			label: 'medium',
		},
		{
			value: 3,
			label: 'large',
		},
	];

	const handleChange = (newValue: number) => {
		const quality = newValue === 1 ? 'small' : newValue === 2 ? 'medium' : 'large';
		setUrl(`${window.location.origin}/random/${quality}`);
	};

	return (
		<ContentBox title={t("random")} color="#00796B" icon="⚡">
			<div className="video-box" style={{ backgroundColor: bg }}>
				<div className="video-box-row p-20 w-100">
					<Slider
						min={1}
						max={3}
						mark={marks}
						onChange={handleChange}
					/>
				</div>
				<div className="min-space"></div>
				<div className="video-box-row">
					<a href={url} target="_blank">{t('openImage')}</a>
				</div>
			</div>
		</ContentBox>
	);
};