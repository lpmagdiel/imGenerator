import React, { useEffect, useState } from 'react';
import { ContentBox } from '../ContentBox';
import { translate as t } from '@/translations/translate';
import './style.css';
import { InputNumber } from '../InputNumber';

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
		<ContentBox title={t("image")} color="#CB4335" icon="🌅">
			<div className="image-box" style={{ backgroundColor: bg }}>
				<div className="container text-center">
					<div className="row mb-2 align-items-center">
						<div className="col">{t('size')}: W<b>x</b>H</div>
						<div className="col">
							<InputNumber onChange={n => setWidth(n)} defaultValue={width} min={20} />
						</div>
						<div className="col">
							<InputNumber onChange={n => setHeight(n)} defaultValue={height} min={20} />
						</div>
					</div>
					<div className="row rounded text-center" style={{ backgroundColor: color, color: '#fff' }}>
						<label htmlFor="color">{t('changeBackground')} {color}</label>
						<input type="color" id='color' value={color} onChange={e => setColor(e.target.value)} className="in text-dot" />
					</div>
				</div>
				<div className="min-space"></div>
				<div className="image-box-row">
					<a href={url} target="_blank">{t('openImage')}</a>
				</div>
			</div>
		</ContentBox>
	);
};
