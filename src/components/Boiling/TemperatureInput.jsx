import React from "react";

const scaleNames = {
	c: 'Цельсия',
	f: 'Фаренгейта',
};

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = { temperature: '' };
	}

	handleChange(e) {
		// Ранее было так: this.setState({temperature: e.target.value});
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		// Ранее было так: const temperature = this.state.temperature;
		const temperature = this.props.temperature;
		const scale = this.props.scale;
		return (
			<fieldset>
				<legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
				<input value={temperature} onChange={this.handleChange} />
			</fieldset>
		);
	}
}


export default TemperatureInput;
