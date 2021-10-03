import styled from 'styled-components'
import Button from '../components/Button'

const HeroSection = ({
  backgroundImage,
  heroText,
  subText,
  buttonText,
  backgroundHeight,
  buttonLink,
}) => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        backgroundHeight={backgroundHeight}
      >
        <div className="content">
          <h2 className="heroText">{heroText}</h2>
          <p>{subText}</p>
          {buttonText && (
            <a href={buttonLink}>
              <WhiteButton>{buttonText}</WhiteButton>
            </a>
          )}
        </div>
      </Hero>
    </>
  )
}

const Hero = styled('span')`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.42),
      rgba(162, 155, 254, 0.65)
    ),
    url(${(props) => props.backgroundImage});
  background-position: center;
  height: ${(props) => props.backgroundHeight};
  background-size: cover;
  margin: 0 auto;
  margin-top: -70px;
  max-width: 1500px;

  @media only screen and (min-device-width: 360px) {
    h2 {
      font-weight: 700;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.4;
      font-weight: 300;
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 4rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.4;
    }
  }

  .content {
    max-width: 80%;
    text-align: center;
    font-weight: 700;
  }
`

const WhiteButton = styled(Button)`
  border: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-size: 0.8rem;
  padding: 1.2rem 1.4rem;
  margin: 1rem 0;
  font-weight: 700;

  :hover {
    color: #000;
    background-color: rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
  }

  @media only screen and (max-device-width: 320px) and (orientation: landscape) {
    font-size: 0.5rem;
  }

  @media (min-width: 768px) {
    padding: 1.4rem 1.6rem;
    font-size: 1rem;
  }
`

export default HeroSection
