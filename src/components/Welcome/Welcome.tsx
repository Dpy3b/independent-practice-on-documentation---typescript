import React, { FC } from 'react';
import cl from './Welcome.module.scss';

interface Welcome {
	name?: string;
}

const Welcome: FC<Welcome> = props => {
	return <h1 className={cl.hiAlice}>Привет, {props.name}</h1>;
};

export default Welcome;
