import  styled  from 'styled-components';

export const Container = styled.header`
    background: var(--brown);
    padding: 2rem 1rem 12rem;
    margin: 0 auto;
`;


export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
		span {
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: var(--white);
			font-size: 1rem;
			height: 1.5rem;
			width: 1.5rem;
			border-radius: 9999px;
		}
`;