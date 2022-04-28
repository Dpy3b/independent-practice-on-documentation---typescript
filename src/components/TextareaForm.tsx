import React, { FormEvent } from "react";

interface TextareaFormState{

}

interface TextareaFormProps{
	value: string
}

class TextareaForm extends React.Component<
	TextareaFormState,
	TextareaFormProps
> {
	constructor(props: TextareaFormProps) {
		super(props);
		this.state = {
			value: 'Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.',
			// Обратите внимание, что мы инициализировали this.state.value в конструкторе, так что в текстовой области изначально есть текст.
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		this.setState({ value: e.target.value });
	}

	handleSubmit(e: FormEvent) {
		console.log('Сочинение отправлено: ' + this.state.value);
		e.preventDefault();
	}

	render() {
		return (
			<form style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 30}} onSubmit={this.handleSubmit}>
				<label style={{display: 'flex', flexDirection: 'column'}}>
					Сочинение:
					<textarea value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type='submit' value='Отправить' />
			</form>
		);
	}
}

export default TextareaForm