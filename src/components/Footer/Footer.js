import footerNav from '../Footer/FooterNav';
import { Container, Row, Col } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import FooterNav from '../Footer/FooterNav';

const Footer = () => {
	return (
		<>
			<Container className='d-flex justify-content-center Referenties-content '>
				<div className='center-div'>
					<h5>
						<b>
							Meer dan{' '}
							<span style={{ color: '#48cae4' }}>109.000</span>{' '}
							tevreden klanten
						</b>
					</h5>
					<Row className=''>
						<Col
							md='6'
							sm='12'
							className='d-flex flex-column align-items-center'
						>
							<ReactStars
								className='rating'
								count={5}
								size={24}
								isHalf={true}
								emptyIcon={<i className='far fa-star'></i>}
								halfIcon={
									<i className='fa fa-star-half-alt'></i>
								}
								fullIcon={<i className='fa fa-star'></i>}
								activeColor='#ffd700'
							/>

							<p className='op-footer '>
								Op een fantastische en correcte snelle manier
								geholpen!!
							</p>
							<p className='had-footer'>
								Had eerlijk gezegd niet verwacht dat mijn
								gevraagde opdracht zo snel tot een oplossing zou
								komen. Zeer tevreden over de dienst van
								Offertevergelijker.nl
							</p>
						</Col>
						<Col
							md='6'
							sm='12'
							className='d-flex flex-column align-items-center'
						>
							<ReactStars
								className='rating'
								count={5}
								size={24}
								isHalf={true}
								emptyIcon={<i className='far fa-star'></i>}
								halfIcon={
									<i className='fa fa-star-half-alt'></i>
								}
								fullIcon={<i className='fa fa-star'></i>}
								activeColor='#ffd700'
							/>

							<p className='op-footer '>Simpel, snel en goed</p>
							<p className='had-footer'>
								Eenvoudige onze wensen doorgegeven. Ik ben goed
								op de hoogte gehouden m.b.t. de status van mijn
								aanvraag. Snel benaderd door bedrijven en snel
								afspraken kunnen maken.
							</p>
						</Col>
					</Row>
				</div>
			</Container>
			<FooterNav></FooterNav>
		</>
	);
};
export default Footer;
