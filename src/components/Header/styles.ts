import  styled  from 'styled-components';

export const Container = styled.header`
    background: var(--brown);
    padding: 2rem 1rem 12rem;
    margin: 0 auto;
    
    
` 
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        font-size: 1rem;
        color: #fff;
        background: var(--cyan);
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        width: 10rem;

        transition: filter 0.2;

        &:hover{
            filter: brightness(120%) saturate(60%);
        }

    }
`