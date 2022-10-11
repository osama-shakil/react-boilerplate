import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Main = props => {
	return (
		<>
			<Header></Header>
			{props.children}
			<Footer></Footer>
		</>
	);
};

export default Main;
