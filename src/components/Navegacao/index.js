import React from "react";
import Menu from '../Menu';

// let linkCorrente = { color: "#027399" };

const Navegacao = () => {
	return (
		<Menu>
			<ul>
				<li><a href="/dashboard">Dahsboard</a></li>
				<li><a href="/leads">Leads</a></li>
				<li><a href="/campanhas">Campanhas</a></li>
				<li><a href="/vendas">Vendas</a></li>
				<li><a href="/clientes">Clientes</a></li>
				<li><a href="/cobranca">Cobrança</a></li>
				{/* Confg colocar embaixo. */}
				<li><a href="/configuracoes">Configurações</a></li>
			</ul>
		</Menu>
	)
};

export default Navegacao;
