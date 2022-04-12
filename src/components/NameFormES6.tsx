import React, { Component } from 'react';

type NameFormES6State = {
	value: string;
};

type NameFormES6Props = {
	// пропсы пустые т.к. ничего не передаем
};

class NameFormES6 extends Component<NameFormES6Props, NameFormES6State> {
	constructor(props: NameFormES6Props) {
		super(props);
		this.state = { value: '' };
		// привязываем контекст явно  // Эта привязка обязательна для работы `this` в колбэке.
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({ value: e.target.value });
	}

	handleSubmit(e: React.FormEvent) {
		console.log('Отправленное имя: ' + this.state.value);
		e.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Имя:
					<input
						type="text"
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<input type="submit" value="Отправить" />
			</form>
		);
	}
}

export default NameFormES6;
