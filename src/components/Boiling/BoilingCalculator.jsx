import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

function toCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

class BoilingCalculator extends React.Component {
	constructor(props) {
		super(props);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
		this.state = { temperature: '', scale: 'c' };
	}

	handleCelsiusChange(temperature) {
		this.setState({ scale: 'c', temperature });
	}

	handleFahrenheitChange(temperature) {
		this.setState({ scale: 'f', temperature });
	}

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius =
			scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit =
			scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

		return (
			<div>
				<TemperatureInput
					scale='c'
					temperature={celsius}
					onTemperatureChange={this.handleCelsiusChange}
				/>
				<TemperatureInput
					scale='f'
					temperature={fahrenheit}
					onTemperatureChange={this.handleFahrenheitChange}
				/>
				<BoilingVerdict celsius={parseFloat(celsius)} />
			</div>
		);
	}
}

export default BoilingCalculator;

/*
Давайте посмотрим, что происходит, когда вы редактируете поле ввода:

1) React вызывает функцию, указанную в onChange на DOM-элементе <input>. В нашем случае это метод handleChange() компонента TemperatureInput.

2) Метод handleChange() в компоненте TemperatureInput вызывает this.props.onTemperatureChange() с новым требуемым значением. Его пропсы, включая onTemperatureChange, были предоставлены его родительским компонентом — Calculator.

3) ReactКогда Calculator рендерился ранее, он указал, что onTemperatureChange в компоненте TemperatureInput по шкале Цельсия — это метод handleCelsiusChange в компоненте Calculator, а onTemperatureChange компонента TemperatureInput по шкале Фаренгейта — это метод handleFahrenheitChange в компоненте Calculator. Поэтому один из этих двух методов Calculator вызывается в зависимости от того, какое поле ввода редактируется.

4)Внутри этих методов компонент Calculator указывает React сделать повторный рендер себя, используя вызов this.setState() со значением нового поля ввода и текущей шкалой.

5) React вызывает метод render() компонента Calculator, чтобы узнать, как должен выглядеть UI. Значения обоих полей ввода пересчитываются исходя из текущей температуры и шкалы. В этом методе выполняется конвертация температуры.

6) React вызывает методы render() конкретных компонентов TemperatureInput с их новыми пропсами, переданными компонентом Calculator. Он узнает, как должен выглядеть UI.

7) React вызывает метод render() компонента Boiling Verdict, передавая температуру в градусах Цельсия как проп.

8) React DOM обновляет DOM, чтобы привести его в соответствие с нужными нам значениями в полях ввода. Отредактированное нами только что поле ввода получает его текущее значение, а другое поле ввода обновляется конвертированным значением температуры.

Каждое обновление проходит через одни и те же шаги, поэтому поля ввода остаются синхронизированными.
 */