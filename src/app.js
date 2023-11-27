import React from 'react'
import './styles.css'

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
	const list = store.getState().list

	let wordCount
	function Counter(item) {
		if (item.count == 0) {
			return null
		}
		if (item.count == 12 || item.count == 13 || item.count == 14) {
			wordCount = `Выделили ${item.count} раз`
		} else if (
			item.count == 2 ||
			item.count == 3 ||
			item.count == 4 ||
			item.count == 22 ||
			item.count == 23 ||
			item.count == 24
		) {
			wordCount = `Выделили ${item.count} раза`
		} else {
			wordCount = `Выделили ${item.count} раз`
		}
		return wordCount
	}
	return (
		<div className='App'>
			<div className='App-head'>
				<h1>Приложение на чистом JS</h1>
			</div>
			<div className='App-controls'>
				<button onClick={() => store.addItem()}>Добавить</button>
			</div>
			<div className='App-center'>
				<div className='List'>
					{list.map(item => (
						<div key={item.code} className='List-item'>
							<div
								className={'Item' + (item.selected ? ' Item_selected' : '')}
								onClick={() => store.selectItem(item.code)}
							>
								<div className='Item-code'>{item.code}</div>
								<div className='Item-title'>
									{item.title}
									<div style={{ fontSize: '12px' }}>{Counter(item)}</div>
								</div>
								<div className='Item-actions'>
									<button onClick={() => store.deleteItem(item.code)}>
										Удалить
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default App
