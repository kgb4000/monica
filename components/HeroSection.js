import styled from 'styled-components'
import Button from '../components/Button'

const HeroSection = ({backgroundImage, heroText, subText, buttonText, backgroundHeight, buttonLink}) => {
	return (
		<>
			<Hero backgroundImage={backgroundImage}
						backgroundHeight={backgroundHeight}>
				<div className='content'>
					<h2 className="heroText">{heroText}</h2>
					<p>{subText}</p>
					<a href={buttonLink}>
						<WhiteButton>{buttonText}</WhiteButton>
					</a>
				</div>
			</Hero>
		</>
	)
}

const Hero = styled('div')`

	color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.53)), url(${props => props.backgroundImage});
	background-position: center;
	height: ${props => props.backgroundHeight};
	background-size: cover;
	margin: 0 auto;
	margin-top: -70px;
	max-width: 1500px;;

	@media only screen 
  and (max-device-width: 320px) 
  and (orientation: landscape) { 
		height: 100vh;

		h2 {
		font-size: 2rem;
		font-weight: 200;
		margin-bottom: 1rem;
		}

		p {
			font-size: 1rem;
		}

	}

	h2 {
		font-size: 2rem;
		font-weight: 300;
		margin-bottom: 1rem;
	}

	p {
			font-size: 1rem;
			line-height: 1.4;
		}

	@media (min-width: 768px) {

		h2 {
			font-size: 5rem;
		}

		p {
			font-size: 2.5rem;
			line-height: 1.6;
		}
	}

	.content {
		max-width: 70%;
		text-align: center;
		font-weight: 400;
	}

`

const WhiteButton = styled(Button)`
	border: #fff;
	background-color: transparent;
	border: 1px solid #fff;
	color: #fff;
	font-size: 0.7rem;
	padding: 0.8rem 1.4rem;
	margin: 1rem 0;

	:hover {
		color: #000;
		background-color: rgba(255, 255, 255, 0.5);
		border-color: rgba(255, 255, 255, 0.1);
	}

	@media only screen 
  and (max-device-width: 320px) 
  and (orientation: landscape) {

		font-size: 0.5rem;

	}

	@media (min-width: 768px) {
		padding: 1rem 2rem;
		font-size: 1.4rem;
	}
`

export default HeroSection