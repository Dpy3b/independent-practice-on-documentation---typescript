import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootNode = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(rootNode).render(
	<StrictMode>
		<App />
	</StrictMode>
);


let company = 'htmllessons.ru';

company = '234';

let lastName: string = 'Dev';

let age: number | string = 20;

age = '123';

enum users {
	Vanya,
	Yaroslav,
	Max,
}

let resss = users.Max + 2;

const person: {
	name: string;
	age: number;
	country: 'Russia' | 'USA' | 'UK';
	from?: string;
} = {
	name: 'Max',
	age: 23,
	country: 'USA',
};

//const names: string[] = ['Elena', 'Vasya', 'Ivan', 1]; // names:string[] типа ожидаем массив строк
const namesAndStrings: (string | number)[] = [1, '113']; //names:(string[] | number[]) или массив строк но и массив чисел тоже пойдет

const getRandomInt = (min: number, max: number): number => {
	return min + max;
};
// выше назначаем после аргументов тип того, что должна вернуть функция. ещё можно void (что-то делает но нихуя не возвращает) или null
let res = getRandomInt(1, 5);

console.log(res);

// типы / псевдонимы типов
type TypeCity = {
	bornYear: number;
	population: number;
	title?: string;
};
const newYork: TypeCity = {
	bornYear: 1400,
	population: 29000043,
	title: 'New York',
};

const cities: TypeCity[] = [
	newYork,
	{
		bornYear: 1400,
		population: 29000043,
		title: 'New York',
	},
	{
		bornYear: 1000,
		population: 1,
		// свойства тайтл может не быть)
	},
];

// интерфейсы

type TypeImage = {
	path: string;
	size: string;
	name: string;
};

interface IProductReviews {
	reviews?: string[];
}

interface IProduct extends IProductReviews {
	name: string;
	created_at: string;
	price: number;
	slug: string;
	image: TypeImage;
}

/* const product: IProduct = {
	name: 'Fen',
  price: 9012,
  slug: 'pen',
  reviews: ['ewr', 'asd']
};
 */

let product: IProduct = {} as IProduct; // типа задать как пустой объект
// типа если написать продукт точка... то будут подсказки))))
//console.log(product); // пустой объект

//==========================================
//дженейрики

const getArray = <T extends any>(items: T[]): T[] => [...items];

// в tsx обязательно extends any после начала дженейрика
const numArray = getArray<number>([1, 2, 3]);


let testArr:any[] = [43, "df"]

