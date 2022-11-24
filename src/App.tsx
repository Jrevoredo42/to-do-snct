import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { ContainerInput, Lista, Item } from './styles/app';

import { GlobalStyle } from './styles/global';

export function App() {
	const [items, setItems] = useState<string[] | []>([]);

	const addTodo = (e: any) => {
		e.preventDefault();
		setItems([...items, e.target[0].value]);
	};

	return (
		<>
			<Header count={items.length} />
			<ContainerInput onSubmit={addTodo}>
				<input required />
				<button>Adicionar</button>
			</ContainerInput>
			<Lista>
				{items.map((item: string, index: number) => (
					<Item key={String(index)}>{item}</Item>
				))}
			</Lista>
			<GlobalStyle />
		</>
	);
}
export default App;
