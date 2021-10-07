import React from "react";
import { NavLink } from "react-router-dom";

// let linkAtivo = {
// 	color: "green"
// };

const Navegacao = () => {
	return (
		<ul>
			<li><a href="#home">Home</a></li>
			<li><a href="#news">News</a></li>
			<li><a href="#contact">Contact</a></li>
			<li><a href="#about">About</a></li>
		</ul>
	);
};

export default Navegacao;
