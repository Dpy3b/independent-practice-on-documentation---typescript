import React, { Component, FC, useState } from 'react';
import FormatedDate from '../FormatedDate';

type ClockState = {
	date: Date;
};

type ClockProps = {
	// пропсы пустые т.к. ничего не передаем
};

// В этом примере указываем тип два раза, в дженейриках и в конструкторе
class ClockES6 extends Component<ClockProps, ClockState> {
	private timerID: number = 0; // приватное свойство

	// УКАЗЫВАЕМ ИНТЕРФЕЙС ИНМЕННО ДЛЯ ТОГО ОТ ЧЕГО НАСЛЕДУЕМ, ТИПА РЕАКТ.КОМПОНЕНТ "ТИПА" <ClockES6>
	// просто извлекли компонент самостоятельно, чтобы не писать extends React.Component

	constructor(props: ClockProps) {
		//указываем тип для пропсов т.к. тут есть super и короче надо передать props родительскому конструктору

		super(props);
		this.state = { date: new Date() }; // Clock должен отображать текущее время, поэтому мы задаём начальное состояние this.state объектом с текущим временем.
	}
	// ниже я типа использую эксперементальный синтаксис чтобы не привязывать контекст явно в конструкторе
	// Поля this.props и this.state в классах — особенные, и их устанавливает сам React (это касаемо того, что их нету в методах жизненного цикла)

	componentDidMount() {
		// Как только вывод рендера Clock вставлен в DOM, React вызывает метод жизненного цикла componentDidMount(). Внутри него компонент Clock указывает браузеру установить таймер, который будет вызывать tick() раз в секунду.
		this.timerID = window.setInterval(() => this.tick(), 1000); // здесь обязательно как метод объекта window указываем эту хуйню
	}

	componentWillUnmount() {
		// Если компонент Clock когда-либо удалится из DOM, React вызовет метод жизненного цикла componentWillUnmount() и сбросит таймер.
		clearInterval(this.timerID);
	}

	tick() {
		// Таймер вызывает tick() ежесекундно. Внутри tick() мы просим React обновить состояние компонента, вызывая setState() с текущим временем. React реагирует на изменение состояния и снова запускает render(). На этот раз this.state.date в методе render() содержит новое значение, поэтому React заменит DOM. Таким образом компонент Clock каждую секунду обновляет UI.
		this.setState({
			date: new Date(),
		});
	}

	render() {
		// React вызывает метод render() компонента Clock. Таким образом React узнаёт, что отобразить на экране. Далее React обновляет DOM так, чтобы он соответствовал выводу рендера Clock.
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>Привет, мир!</h1>
				{/* <h2>Сейчас {this.state.date}.</h2> // неотформатированный вариант */}
				<FormatedDate date={this.state.date} />
			</div>
		);
	}
}

export default ClockES6;
