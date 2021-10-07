import React from "react";
import Menu from "../Menu";
import { NavLink } from "react-router-dom";

// let linkAtivo = {
// 	color: "green"
// };

const Navegacao = () => {
	return (
		<Menu>
			<ul>
				<li><a href="#home">Dahsboard</a></li>
				<li><a href="#news">Leads</a></li>
				<li><a href="#contact">Campanhas</a></li>
				<li><a href="#about">Vendas</a></li>
				<li><a href="#about">Clientes</a></li>
				<li><a href="#about">Cobrança</a></li>
				{/* Confg colocar embaixo. */}
				<li><a href="#about">Configurações</a></li>
			</ul>
		</Menu>
	);
};

export default Navegacao;
