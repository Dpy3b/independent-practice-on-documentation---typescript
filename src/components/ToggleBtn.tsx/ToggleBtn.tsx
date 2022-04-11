import React, { Component } from 'react';

type ToggleState = {
	isToggleOn: boolean;
};

type ToggleProps = {};

export default class ToggleBtn extends Component<ToggleProps, ToggleState> {
	constructor(props: ToggleProps) {
		super(props);
		this.state = { isToggleOn: true };

		// Эта привязка обязательна для работы `this` в колбэке.
		this.handleClick = this.handleClick.bind(this); // привязываем контекст
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn,
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick}> {/* передаем функцию с сохраненным контекстом, она вызывается при срабатывании события */}
			{/* либо мы привязываем контекст через bind, либо передаем в обработчик стрелочную функцию-коллбэк с this (он будет работать правильно), либо используем публичные поля в классах (эксперементальный синтаксис) */}
				{this.state.isToggleOn ? 'Включено' : 'Выключено'}
			</button>
		);
	}
}
