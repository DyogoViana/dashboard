import styled from "styled-components";

const Menu = styled.nav`
	width: 15vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;

	background: #fff;

	ul {
		width: 100%;
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	li a {
		display: block;
		color: #555;
		padding: 8px 16px;
		text-decoration: none;
	}

	/* Change the link color on hover */
	li a:hover {
	background-color: #555;
	color: white;
	}
`;

export default Menu;
