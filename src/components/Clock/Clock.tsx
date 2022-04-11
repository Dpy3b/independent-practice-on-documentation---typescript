import React, {FC} from "react";

interface Clock {
	date: Date;
}

const Clock:FC<Clock> = (props) => {
  return (
		<div>
			<h1>Привет, мир!</h1>
			<h2>Сейчас {props.date.toLocaleTimeString()}.</h2>
		</div>
	);
};

export default Clock;
