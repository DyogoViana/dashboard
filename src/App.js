// sem react;
// import Header from './components/Header';
import Nav from './containers/Nav';
import Main from './containers/Main';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			{/* <Header>
				<h2>teste Header</h2>
			</Header> */}
			<Nav>
				<Navbar />
			</Nav>
			<Main>
				<h1>teste main</h1>
			</Main>
		</>
	)
}

export default App;
