import React, { Component, FC } from 'react';
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

type LoginControlState = {
	isLoggedIn: boolean;
};

type LoginControlProps = {};

export default class LoginControl extends Component<
	LoginControlProps,
	LoginControlState
> {
	constructor(props: LoginControlProps) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = { isLoggedIn: false };
	}

	handleLoginClick() {
		this.setState({ isLoggedIn: true });
	}

	handleLogoutClick() {
		this.setState({ isLoggedIn: false });
	}

	render() {
		//условный рендеринг способ первый
		const isLoggedIn = this.state.isLoggedIn;

		// ниже первый вариант условной отрисовки (есть два более коротких)
		/* let button;
		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick} />;
		} else {
			button = <LoginButton onClick={this.handleLoginClick} />;
		} */

		// Нет ничего плохого в том, чтобы объявить переменную и условно рендерить компонент if-выражением. Но иногда хочется синтаксис покороче. Давайте посмотрим на несколько других способов писать условия прямо в JSX.

		return (
			<div className='greeting'>
				<Greeting isLoggedIn={isLoggedIn} />
				{isLoggedIn ? (
					<LogoutButton onClick={this.handleLogoutClick} />
				) : (
					<LoginButton onClick={this.handleLoginClick} />
				)}
				{/* есть ещё через оператор && */}
			</div>
		);
	}
}
