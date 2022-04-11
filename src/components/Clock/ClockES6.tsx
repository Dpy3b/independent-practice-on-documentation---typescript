import React, { Component, FC, useState } from 'react';



type ClockState = {
	date: Date;
};

type ClockProps = {
	// пропсы пустые т.к. ничего не передаем
};


// В этом примере указываем тип два раза, в дженейриках и в конструкторе
class ClockES6 extends Component<ClockProps, ClockState> {
	private timerID: number = 0 // приватное свойство

	// УКАЗЫВАЕМ ИНТЕРФЕЙС ИНМЕННО ДЛЯ ТОГО ОТ ЧЕГО НАСЛЕДУЕМ, ТИПА РЕАКТ.КОМПОНЕНТ "ТИПА" <ClockES6>
	// просто извлекли компонент самостоятельно, чтобы не писать extends React.Component

	constructor(props: ClockProps) { //указываем тип для пропсов т.к. тут есть super и короче надо передать всё это

		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerID = window.setInterval(() => this.tick(), 1000); // здесь обязательно как метод объекта window указываем эту хуйню
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	render() {
		return (
			<div>
				<h1>Привет, мир!</h1>
				<h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

export default ClockES6;
