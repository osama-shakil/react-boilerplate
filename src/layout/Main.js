import Header from '../components/Header/Header'

const Main = props => {
	return (
		<>
			<Header></Header>
			{props.children}
			{/* <footer>Main Footer</footer> */}
		</>
	);
};

export default Main;
