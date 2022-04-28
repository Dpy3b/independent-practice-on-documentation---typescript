import React, { FC } from "react";

interface FormatedDate {
	date: Date;
}

const FormatedDate:FC<FormatedDate> = (props) => {
  return (
		// Компонент FormattedDate получает date через пропсы, но он не знает, откуда они взялись изначально — из состояния Clock, пропсов Clock или просто JavaScript-выражения
		<div>
			Сейчас (отформатированная дата): {props.date.toLocaleTimeString()}
		</div>
	);
};

export default FormatedDate;
