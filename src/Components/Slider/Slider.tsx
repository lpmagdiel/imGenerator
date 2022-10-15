import React from 'react';

export interface SliderMark {
	value: number;
	label: string;
}
export interface SliderInterface {
	min?: number;
	max?: number;
	step?: number;
	defaultValue?: number;
	mark?: SliderMark[];
	onChange?: (value: number) => void;
}

export const Slider: React.FC<SliderInterface> = ({ mark=[], defaultValue = 1, min = 1, max = 100, step = 1, onChange = (val) => { } }) => {
	const [ value, setValue] = React.useState(defaultValue);
	const [ label, setLabel] = React.useState( mark.length>0? mark[0].label :"" );
	const onHandleChange = (val: number) => {
		onChange(val);
		setValue(val);
		if(mark.length>0){
			const selectedMark = mark.find( m => m.value == val)?.label || "";
			setLabel(selectedMark);
		}
	}
	return (
		<>
		<b>{label}</b>
		<input type="range" className="form-range" value={value} min={min} max={max} step={step} onChange={(e) => { onHandleChange(Number(e.target.value)) }}></input>
		</>
	)
};