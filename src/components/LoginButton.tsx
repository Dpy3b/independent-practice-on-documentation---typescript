import { type } from '@testing-library/user-event/dist/type';
import React, { FC } from 'react';

interface Button {
	onClick(): void;
}

const LoginButton: FC<Button> = props => {
	return <button onClick={props.onClick}>Войти</button>;
};

export default LoginButton;
