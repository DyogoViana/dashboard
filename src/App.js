import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Wrapper from './containers/Wrapper';

// Pages
import Leads from './pages/Leads';
import Campanhas from './pages/Campanhas';
import Vendas from './pages/Vendas';
import Clientes from './pages/Clientes';
import Cobranca from './pages/Cobranca';
import NotFound from './pages/NotFound';

import Main from './containers/Main';
import Nav from './containers/Nav';
import Section from './containers/Section';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<Wrapper>
				<Nav />
				<Main>
					<Section>
						<Router>
							<Switch>
								<Route exact path="/leads" render={() => <Leads /> } />
								<Route exact path="/campanhas" render={() => <Campanhas /> } />
								<Route exact path="/vendas" render={() => <Vendas /> } />
								<Route exact path="/clientes" render={() => <Clientes /> } />
								<Route exact path="/cobranca" render={() => <Cobranca /> } />
								<Route component={NotFound} />
							</Switch>
						</Router>
					</Section>
				</Main>
			</Wrapper>
		</>
	)
}

export default App;
