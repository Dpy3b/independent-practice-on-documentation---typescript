import React, { FC } from 'react';
import BoilingCalculator from './components/Boiling/BoilingCalculator';
import Clock from './components/Clock/Clock';
import ClockES6 from './components/Clock/ClockES6';
import FormatedDate from './components/FormatedDate';
import Greeting from './components/Greeting/Greeting';
import LoginControl from './components/LoginControl';
import NameForm from './components/NameForm';
import NameFormES6 from './components/NameFormES6';
import NumberList from './components/NumberList';
import BannerPage from './components/PreventRender/BannerPage';
import TextareaForm from './components/TextareaForm';
import ToggleBtn from './components/ToggleBtn.tsx/ToggleBtn';
import Welcome from './components/Welcome/Welcome';
import './styles/App.scss';

const name1: string = 'Гуру тайпскрипта';
const element = <Welcome name="Алиса" />;

const numbers = [1, 2, 3, 4, 5];

const App: FC = () => {
	return (
		<div className='App'>
			<span>Я {name1}</span>
			{element}
			<Welcome name='Оксана' />
			<Clock date={new Date()} />
			{/* {<ClockES6/> } */}{' '}
			{/* тут мы уже управляем состоянием, и здесь пропа date кстати не нужно */}
			<ToggleBtn />
			<Greeting isLoggedIn={false} />
			<Greeting isLoggedIn={true} />
			<LoginControl />
			<BannerPage/>
			<NumberList numbers={numbers} />
			{/* <NameFormES6 /> */}
			<NameForm />
			<TextareaForm/>
			<BoilingCalculator/>
		</div>
	);
};

export default App;
