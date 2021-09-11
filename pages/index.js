import { useState } from 'react'
import Link from "next/link"
import ModalVideo from 'react-modal-video'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'

const calendly = "https://calendly.com/monica-17/monica-browne-weddings-call"

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <HeroSection 
        heroText="Wedding Planning For Busy Couples"
        subText="We Create Beautiful Weddings For Busy Couples"
        buttonText="Book a Call"
        backgroundImage="../WebP-images/happy-couple.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <section className='container'>
          <div className="content">
            <h1 className='title'>Bowie Wedding Planner</h1>
            <p className="intro">Many busy couples getting married nowadays struggle to find the time to plan the wedding they want. We at Monica Browne Weddings can help you plan the wedding of your dreams and leave you with more time for your busy schedule.</p>
            <div className='center'>
              <a href={calendly}><Button>Book a call</Button></a>
            </div>
          </div>
        </section>
        <section className='container'>
          <div className="service-content">
            <div className="painpoints">
              <div className="painpoints--content">
                <h2 className='title'>Planning A Wedding Can Be Really Tough And Time Consuming</h2>
                <PainPoints>
                  <li>Time finding reliable wedding vendors</li>
                  <li>Time searching for the right wedding venue</li>
                  <li>Time reading and reviewing wedding vendor contracts</li>
                  <li>Creating and managing your wedding budget</li>
                  <li>Keeping organized and making timely decisions</li>
                  <li>Time creating your wedding timeline and seating charts</li>
                  <li>Navigating new Covid-19 protocols</li>
                </PainPoints>
              </div>
            </div>
          </div>
          <h3 className="center-text">Book a 15-minute call with us and see how we can help you plan your dream wedding</h3>
          <div className='center'>
            <a href={calendly}>
              <Button>Book a call</Button>
            </a>
          </div>
        </section>
        <section className='container'>
          <div className="content">
            <h2 className='title'>Our Services</h2>
            <Services>
              <div className='wedding-service'>
                <img 
                  src='../WebP-images/bride-groom-happy.webp' 
                  alt="Happily Married Couple"
                />
                <h3 className='title'>Wedding Planning</h3>
              </div>
              <div className='wedding-service'>
                <img src='../WebP-images/wedding-table-setting.webp' alt="Wedding Decor and Design"/>
                <h3 className='title'>Wedding Decor</h3>
              </div>
              <div className='wedding-service'>
              <img src='../WebP-images/wedding-flower-centerpiece-design.webp' alt="Wedding Floral Design"/>
                <h3 className='title'>Floral Design</h3>
              </div>
            </Services>
            <div className='center'>
              <Link href="/wedding-services">
                <a><Button>More Services</Button></a>
              </Link>
            </div>
          </div>
        </section>
        <section className='container'>
          <div className="service-content">
            <h2 className='title'>We Make Planning Your Wedding Simple </h2>
            <div>
              <Simple>
                <li>Book your first call with Monica and see how she can help you plan your wedding.</li>
                <li>Work out your budget and start planning your wedding details.</li>
                <li>Just enjoy your wedding day and cherish the moment.</li>
              </Simple>
            </div>
            <h3 className="center-text">Book a 15-minute call with us and see how we can help you plan your dream wedding</h3>
            <div className='center'>
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
          </div>
        </section>
        <section className='container'>
          <div className="content">
            <h2 className='title'>Watch This Beautiful Wedding Video From One Of Our Happy Couples</h2>
            <section className='video-section'>
              <ModalVideo channel='custom' autoplay isOpen={isOpen} url="https://natashaweddingvideo.s3.amazonaws.com/wedding-video.mp4" allowFullScreen={true} onClose={() => setOpen(false)} />
              <WhiteButton className="btn-primary" onClick={()=> setOpen(true)}>Watch this video</WhiteButton>
            </section>
            <div className='center'>
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
          </div>
        </section>
        <section className='container'>
          <div className="content">
            <h2 className='title'>Testimonials</h2>
            <Testimonial>
              Working with Monica as my wedding planner was one of the best decisions I made. At the time, I lived in Philadelphia while I was planning for my wedding in Washington DC. With Monica’s expertise and experience with wedding planning, I was left stress-free on my wedding day. Each month, Monica sent me monthly “to-do lists“ ...
              </Testimonial>
          <TestimonialAuthor>Diane</TestimonialAuthor>
            <div className='center'>
              <Link href="/testimonials">
                <a><Button>More Testimonials</Button></a>
              </Link>
            </div>
            </div>
        </section>
        <section className='gallery container'>
          <h2 className='title'>Gallery</h2>
          <Gallery>
            <img src='../WebP-images/bride-with-flowers.webp' alt="Bride with flowers" />
            <img src='../WebP-images/bride-groom-happy.webp' alt="Bride and Groom" />
            <img src='../WebP-images/wedding-cake.webp' alt="Bride and Groom" />
          </Gallery>
          <div className='center'>
            <Link href="/gallery">
              <a><Button>See More Pictures</Button></a>
            </Link>
          </div>
        </section>
      </Main>
    </div>
  )
}

const Main = styled('div')`

.content {
  text-align: center;
}

.center-text {
  max-width: 40rem;
  padding: 1rem 2rem;
  text-align: center;
  margin: 0 auto;
}

  .gallery {
    padding-bottom: 4rem;
  }

  @media (min-width: 768px) {

    .content {
      display: block;
      margin: 0 auto;

      .intro {
        max-width: 60rem;
        margin: 0 auto;
      }
    }

    .service-content {

      img {
        display: none;
      }

      display: block;
      max-width: 30rem;
      margin: 0 auto;
      text-aling: left;

      @media (min-width: 768px) {

      img {
        display: block;
      }

      max-width: 50rem;

      h2 {
        margin: 4rem auto;
      }

      ul {
        max-width: 40rem;
        margin: 0 auto;
      }
    }
  }

`

const PainPoints = styled('ul')`
  margin-left: 2rem;
  font-size: 1.2rem;
  max-width: 20rem;
  margin: 0 auto;
  padding: 0 2rem;

  li {
    font-weight: 200;
    margin: 1rem 0;
  }

  @media (min-width: 600px) {
  
    h2 {
      text-align: left;
    }

    li {
      font-size: 1.5rem;
      font-weight: 200;
      margin: 1rem 0;
    }

    max-width: 100%;
    margin-left: 2rem;

    }
`

const Simple = styled('ul')`
  max-width: 40rem;
  margin: 0 auto;
  font-size: 1.2rem;
  counter-reset: li;

  li {
    padding-left: 3.5rem;
    margin-bottom: 2rem;
    position: relative;
    list-style-type: none;
    font-weight: 200;

    ::before {
      counter-increment: li;
      content: counter(li);
      color: inherit;
      font-size: 1rem;
      background: transparent;
      line-height: 35px;
      width: 35px;
      height: 35px;
      border-radius: 100%;
      display: inline-block;
      text-align: center;
      left: 0px;
      position: absolute;
      top: 0.5rem;
      border: 1px solid #000;
      font-weight: 200;
    }
  }
`

const Services = styled('div')`

  margin: 0 auto;

  .wedding-service {
    margin: 0 auto;
    text-align: center;
  }

  h3 {
    font-size: 1.8rem;
    display: inline-block;
    padding: 0.5rem 0;
  }
  @media (min-width: 736px) {

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    max-width: 100%;
    margin: 0 auto;
  }

`

const WhiteButton = styled(Button)`
	border: #fff;
  color: #fff;
	background-color: transparent;
	border: 2px solid #fff;
  font-weight: bold;

  :hover {
		color: #000;
		background-color: rgba(255, 255, 255, 0.5);
		border-color: rgba(255, 255, 255, 0.1);
	}
`

const Gallery = styled('div')`

  img {
        margin-bottom: 1rem;
      }

  @media (min-width: 768px) {

    img {
      margin-bottom: 2rem;
    }

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    max-width: 100%;
    margin: 0 auto;
  }
`

const Testimonial = styled('p')`
		max-width: 60rem;
		margin: 0 auto;
		margin-top: 2rem;
    font-size: 1.2rem;
    line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
	
`

const TestimonialAuthor = styled('p')`

		text-align: center;
		margin-top: 2rem;
		font-weight: 200;
    font-size: 1.4rem;

`