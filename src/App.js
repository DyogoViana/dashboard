// sem react;
import Wrapper from './containers/Wrapper';
// import Header from './components/Header';

import Main from './containers/Main';
import Nav from './containers/Nav';
import Section from './containers/Section';
import Brand from './components/Brand';

function App() {
	return (
		<>
			<Wrapper>
				<Nav />
				<Main>
					<Section>
						<h1>teste section</h1>
					</Section>
				</Main>
			</Wrapper>
		</>
	)
}

export default App;
