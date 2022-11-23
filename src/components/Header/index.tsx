import { Container, Content } from './styles';
import iconTodo from '../../assets/todo-icone.svg';

interface HeaderProps{

    onOpenNewToDoModal: () => void;
}


export function Header({ onOpenNewToDoModal }: HeaderProps) {
    return(
        <Container>
            <Content>
            <img className='icon' alt='icon' src={iconTodo}/>
            <button type='button' onClick={onOpenNewToDoModal}>Adicionar To Do</button>
            </Content>
          
        </Container>
    )
}