import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
	body,
	header,
	main {
		font-family: 'Quicksand', sans-serif;
		font-size: 1rem;
		text-align: left;
		overflow: hidden; /* Hide scrollbars */
		background-color: #ecf0f1;
	}
`;

export default Base;
