import React, { FC } from 'react';
import Clock from './components/Clock/Clock';
import ClockES6 from './components/Clock/ClockES6';
import Greeting from './components/Greeting';
import LoginControl from './components/LoginControl';
import NameForm from './components/NameForm';
import NameFormES6 from './components/NameFormES6';
import NumberList from './components/NumberList';
import ToggleBtn from './components/ToggleBtn.tsx/ToggleBtn';
import Welcome from './components/Welcome/Welcome';
import './styles/App.scss';

const name1: string = 'Гуру тайпскрипта';
const element = <Welcome name="Алиса" />;

const numbers = [1, 2, 3, 4, 5];

const App: FC = () => {
	return (
		<div className="App">
			<span>Я {name1}</span>
			{element}
			<Welcome name="Алиса" />
			{/* <Clock date={new Date()} /> */}
			{/* <ClockES6/> */}
			<ToggleBtn />
			<Greeting isLoggedIn={false} />
			<LoginControl />
			<NumberList numbers={numbers} />
			{/* <NameFormES6 /> */}
			<NameForm />
		</div>
	);
};

export default App;
