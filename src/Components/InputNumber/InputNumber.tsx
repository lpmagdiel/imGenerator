import React, { useState } from 'react';
export interface InputNumberInterface {
	onChange: (value: number) => void;
	defaultValue?: number;
	min?: number;
}

export const InputNumber: React.FC<InputNumberInterface> = ({ min = 0, defaultValue = 0, onChange = (value: number) => { } }) => {
	const [value, setValue] = useState(defaultValue);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newVal = Number(e.target.value);
		setValue(newVal);
		onChange(newVal);
	}
	const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) =>{
		const newVal = Number(e.target.value);
		if(newVal < min) setValue(min);
	}
	return (
		<>
			<input type="number"
			min={min}
			value={value}
			onChange={handleChange}
			onBlur={handleBlur}
			onFocus={e => e.target.value = ''}
			className={`form-control ${ value >= min ? 'is-valid':'is-invalid'}`} />
		</>
	);
};
