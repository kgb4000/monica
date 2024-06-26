import styled from 'styled-components'
import Button from './Button'

const calendly = 'https://calendly.com/mbweddings/30min'

export default function PainSection({
  title,
  src,
  alt,
  width,
  height,
  pain1,
  pain2,
  pain3,
  pain4,
  pain5,
  pain6,
}) {
  return (
    <section className="container">
      <Service>
        <h2 className="title">{title}</h2>
        <Painpoint>
          <div className="painpoints--content">
            <PainPoints>
              <li>{pain1}</li>
              <li>{pain2}</li>
              <li>{pain3}</li>
              <li>{pain4}</li>
              <li>{pain5}</li>
              <li>{pain6}</li>
            </PainPoints>
          </div>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            width={width}
            height={height}
          />
        </Painpoint>
      </Service>
      <h3 className="center-text">
        Book a 15-minute call with us and see how we can help you plan your
        wedding day
      </h3>
      <div className="center">
        <a href={calendly}>
          <Button>Book a 15 min call</Button>
        </a>
      </div>
    </section>
  )
}

const Service = styled.div`
  max-width: 70rem;
  margin: 0 auto;
`

const Painpoint = styled.div`
  img {
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 1500px;
    margin: 0 auto;
    justify-content: flex-end;
    justify-items: end;
    grid-gap: 20px;
    margin-bottom: 2rem;
    align-items: center;

    img {
      margin-bottom: 2rem;
    }
  }
`

const PainPoints = styled('ul')`
  padding: 0 2rem;

  @media (min-width: 1000px) {
    li {
      font-size: 1.6rem;
    }
  }
`
