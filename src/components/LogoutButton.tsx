import { type } from '@testing-library/user-event/dist/type';
import React, { FC } from 'react';

interface Button {
	onClick(): void;
}

const LogoutButton: FC<Button> = props => {
	return <button onClick={props.onClick}>Выйти</button>;
};

export default LogoutButton;
