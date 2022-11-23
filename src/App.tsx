import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header'
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import { NewTodo } from './components/Header/NewTodo';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App() {

const [isNewToDoModalOpen, setIsNewToDoModalOpen] = useState(false);

function handleOpenNewTodoModal(){
   setIsNewToDoModalOpen(true);
}

function handleCloseNewTodoModal() { 
   setIsNewToDoModalOpen(false);
}


 return(
    <>
    <Header onOpenNewToDoModal={handleOpenNewTodoModal}/>
    <Dashboard/>

    <NewTodo isOpen={isNewToDoModalOpen} onRequestClose={handleCloseNewTodoModal}/>        

    <GlobalStyle />
    </>
  
 )
}
export default App
