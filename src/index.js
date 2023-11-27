import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.js'
import Store from './store.js'

export function randomCode(max, min) {
	return Math.floor(Math.random() * (max - min) + min)
}

const store = new Store({
	list: [
		{
			code: randomCode(1, 999),
			title: 'Название элемента',
			count: 0,
		},
		{ code: randomCode(1, 999), title: 'Некий объект', count: 0 },
		{ code: randomCode(1, 999), title: 'Заголовок', count: 0 },
		{
			code: randomCode(1, 999),
			title: 'Очень длинное название элемента из семи слов',
			count: 0,
		},
		{ code: randomCode(1, 999), title: 'Запись', count: 0 },
		{ code: randomCode(1, 999), title: 'Шестая запись', count: 0 },
		{ code: randomCode(1, 999), title: 'Седьмая запись', count: 0 },
	],
})

const root = createRoot(document.getElementById('root'))

store.subscribe(() => {
	root.render(<App store={store} />)
})

// Первый рендер приложения
root.render(<App store={store} />)
