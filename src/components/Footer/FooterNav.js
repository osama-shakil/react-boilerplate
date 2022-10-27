import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
const FooterNav = () => {
	return (
		<Container fluid className='FooterNav-prop'>
			<Row>
				<Col>
					<img src={logo} className='p-2'></img>
					<p>
						Offertevergelijker is dé vergelijkingswebsite voor bouw-
						en verbouwklussen van Nederland.
					</p>
					<hr className='footer-hr'></hr>
					<p>
						Cookie policy | Disclaimer | Privacy statement | Contact
					</p>
				</Col>
			</Row>
		</Container>
	);
};
export default FooterNav;
