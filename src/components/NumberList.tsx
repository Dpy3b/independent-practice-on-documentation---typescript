import React, { FC } from 'react';
import ListItem from './ListItem';

interface NumberListProps {
	numbers: number[];
}

const NumberList: FC<NumberListProps> = props => {
	const numbers = props.numbers;
	/* const listItems = numbers.map(number => (
		<ListItem key={number.toString()} value={number} />
	)); */
	// и ниже вставляем переменную listItems в ul
	// либо ниже без переменной
	return (
		<ul>
			{numbers.map(number => (
				<ListItem key={number.toString()} value={number} />
			))}
		</ul>
	);
};

export default NumberList;
