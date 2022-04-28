import React, {FC, SyntheticEvent, useState} from "react";

interface Clock {
	date: Date;
}

const Clock:FC<Clock> = (props) => {
	/* const [date, setDate] = useState({date: new Date})
	const tick = () => {
		setDate(date)
	} */

	//const {date, setDate} = useState({date: new Date()})
	//todo не забыть реализовать часы на хуках
  return (
		<div>
			<h1>Привет, мир!</h1>
			<h2>Сейчас {props.date.toLocaleTimeString()}.</h2>
		</div>
	);
};

export default Clock;
