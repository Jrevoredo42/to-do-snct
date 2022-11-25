import { Container, Content } from './styles';
import iconTodo from '../../assets/todo-icone.svg';

interface HeaderProps {
	count: number;
}

export function Header({ count }: HeaderProps) {
	return (
		<Container>
			<Content>
				<img className="icon" alt="icon" src={iconTodo} />
				<span>{count}</span>
			</Content>
		</Container>
	);
}
