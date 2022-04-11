import React, { FC } from 'react';
import Clock from './components/Clock/Clock';
import ClockES6 from './components/Clock/ClockES6';
import Greeting from './components/Greeting';
import LoginControl from './components/LoginControl';
import ToggleBtn from './components/ToggleBtn.tsx/ToggleBtn';
import Welcome from './components/Welcome/Welcome';
import './styles/App.module.scss'


const name1: string = 'Гуру тайпскрипта';
const element = <Welcome name="Алиса" />;

const App: FC = () => {




	return (
		<div className="App">
			<span>Я {name1}</span>
			{element}
			<Welcome name="Алиса" />
			{/* <Clock date={new Date()} /> */}
			{/* <ClockES6/> */}
			<ToggleBtn />
			<Greeting isLoggedIn={false}/>
			<LoginControl/>
		</div>
	);
};

export default App;
