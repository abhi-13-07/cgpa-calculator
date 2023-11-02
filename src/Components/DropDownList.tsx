import React from "react";
import { v4 as uuidV4 } from "uuid";

interface Props {
	id: number;
	list: string[];
	value: string;
	onChange(id: number, value: string): void;
}

const DropDownList = ({ id, list, value, onChange }: Props) => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;
		onChange(id, value);
	};

	return (
		<select value={value} onChange={handleChange}>
			{list.map(item => (
				<option key={uuidV4()}>{item}</option>
			))}
		</select>
	);
};

export default DropDownList;
