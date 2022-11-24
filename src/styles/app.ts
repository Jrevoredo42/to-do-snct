import styled from 'styled-components';

export const ContainerInput = styled.form`
	display: flex;
	width: fit-content;
	margin: 0 auto;
	margin-top: -1.5rem;
	input {
		font-size: 1rem;
		height: 3rem;
		width: 360px;
		padding-left: 5px;
		outline: none;
		border: none;
		border-radius: 6px;
		border-bottom: 1px solid var(--gray);
	}
	button {
		cursor: pointer;
		color: var(--white);
		font-size: 1rem;
		font-weight: 600;
		padding: 0 12px;
		border: none;
		border-radius: 6px;
		margin-left: 6px;
		background-color: var(--gray);
		transition: 0.3s;
		&:hover {
			filter: brightness(0.8);
		}
	}

	@media (max-width: 720px) {
		& {
      flex-direction: column;
			width: 90%;
		}
		input {
			width: 100%;
		}
    button {
      width: 100%;
      height: 4rem;
      margin: 0;
      margin-top: 5px;
    }
	}
`;

export const Lista = styled.ul`
	margin: 0 auto;
	max-width: 600px;
	list-style: none;
	padding-top: 20px;
	@media (max-width: 720px) {
		max-width: 90%;
	}
`;

export const Item = styled.li`
	height: 3rem;
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	border-radius: 6px;
	padding-left: 6px;
	margin-bottom: 6px;
	background-color: var(--white);
`;
