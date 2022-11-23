import Modal from 'react-modal';
import closeImg from '../../../assets/cancel.svg'
import { Container } from './styles'
import { FormEvent, useState } from 'react';

interface NewTodoModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

function handleCreateNewToDo(){
    
}

export function NewTodo({isOpen, onRequestClose}: NewTodoModalProps){

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      
        >
            <button className='react-modal-close' onClick={onRequestClose}>
                <img src={closeImg} alt='Fechar'/>
            </button>
    <Container onSubmit={handleCreateNewToDo}>
    <h2>Adicionar To Do</h2>

    <input
    type='text'
    placeholder='Digite seu ToDo'
    value={title}
    onChange={event => setTitle(event.target.value)}
    />

    <input
    type='text'
    placeholder='Digite o tipo da Nota'
    value={category}
    onChange={event => setCategory(event.target.value)}
    />

    <button type='submit'>Criar ToDo</button>
    </Container>
              
        </Modal>
    )
}