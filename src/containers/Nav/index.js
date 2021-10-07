import styled from "styled-components";

const Nav = styled.nav`
	width: 15vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: right;

	background: #fff;

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		width: 200px;
	}

	li a {
	display: block;
	color: #000;
	padding: 8px 16px;
	text-decoration: none;
	}

	/* Change the link color on hover */
	li a:hover {
	background-color: #555;
	color: white;
	}
`;

export default Nav;
