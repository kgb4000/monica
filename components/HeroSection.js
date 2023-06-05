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
      rgba(0, 0, 0, 0.62),
      rgba(0, 0, 0, 0.65)
    ),
    url(${(props) => props.backgroundImage});
  background-position: center;
  height: ${(props) => props.backgroundHeight};
  background-size: cover;
  margin: 0 auto;
  margin-top: -100px;
  max-width: 100vw;

  @media only screen and (min-device-width: 360px) {
    h2 {
      font-size: 3rem;
      font-weight: 900;
      margin-bottom: 1rem;
      text-shadow: 1px 2px #000;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.6;
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
  border: #a29bfe;
  background-color: #a29bfe;
  color: #fff;
  font-size: 0.8rem;
  padding: 1.4rem 1.8rem;
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
