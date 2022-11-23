import { Container } from './styles'

export function Submit(){
    return(
        <Container>
            <input placeholder='Digite aqui seu To Do' type='text' className='entrada'/>
            <button type='submit' className='addNotation'>Adicionar</button>
        </Container>

    )
}