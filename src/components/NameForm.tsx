import React, { FC, useState } from 'react';

interface NameFormProps {
	//value: string;
}

const NameForm: FC<NameFormProps> = () => {
	const [value, setValue] = useState('');
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value); // записываем новый результат в состояние
	};
	const handleSubmit = (e: React.FormEvent) => {
		console.log('Отправленное имя: ' + value); // берем новый реузльтат из состояния
		e.preventDefault();
	};
	return (
		<form style={{ marginBottom: 20 }} onSubmit={handleSubmit}>
			<label>
				Имя:
				<input type='text' value={value} onChange={handleChange} />
			</label>
			<input type='submit' value='Отправить' />
		</form>
	);
};

export default NameForm;
