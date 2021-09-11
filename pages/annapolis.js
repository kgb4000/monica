import { useState } from 'react'
import Link from "next/link"
import ModalVideo from 'react-modal-video'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import { NextSeo } from 'next-seo'

import ReactPlayer from 'react-player/youtube'

const calendly = "https://calendly.com/monica-17/monica-browne-weddings-call"

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  const SEO = {
		title: "Annapolis Wedding Planner | Monica Browne Weddings",
		description: "Planning a wedding in Annapolis and don't know where to start? Let us help. We can help you plan the wedding of your dreams",
		openGraph: {
			type: "website",
			locale: "en_US",
			url: "https://monicabrowneweddings.com/annapolis",
			site_name: "Monica Browne Weddings",
			image: "bride-with-flowers.jpg"
		},
	}
  return (
    <div>
      <NextSeo {...SEO } />
      <HeroSection 
        heroText="Wedding Planning For Annapolis Couples"
        subText="We Create Beautiful Weddings For Busy Couples in Annapolis"
        buttonText="Book a Call"
        backgroundImage="../WebP-images/walking-down-aisle.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <section className='container'>
          <div className="content">
            <h1 className='title'>Wedding Planner in Annapolis</h1>
            <p className="intro">You can have the wedding of your dreams, even if you do not have the time to plan it. Monica Browne Weddings is here to help guide you through the wedding planning process and leave you more time in your busy schedule.</p>
            <div className='center'>
              <a href={calendly}><Button>Book a call</Button></a>
            </div>
          </div>
        </section>
        <section className='container'>
          <div className="service-content">
            {/* <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                width='100%'
                height='100%'
              />
            </div> */}
            <div className="painpoints">
              <div className="painpoints--content">
                <h2 className='title'>Planning A Wedding Can Be Time Consuming</h2>
                <PainPoints>
                  <li>Time looking for the right venue</li>
                  <li>Time finding the right wedding vendors</li>
                  <li>Time reading and reveiwing wedding vendor contracts</li>
                  <li>Time reading vendor contracts</li>
                  <li>Time creating your wedding timeline</li>
                  <li>Making timely decisions and staying organized</li>
                  <li>Time sending out wedding invitations</li>
                  <li>Figuring out new Covid-19 protocols</li>
                </PainPoints>
              </div>
            </div>
          </div>
          <h3 className="center-text">Book a 15 minute call with us and see how we can help you plan your dream wedding</h3>
          <div className='center'>
            <a href={calendly}><Button>Book a call</Button></a>
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
            <h2 className='title'>We Make Planning Your Wedding Simple</h2>
            <div>
              <Simple>
                <li>Schedule your call with Monica and see how she can help plan your wedding</li>
                <li>Let Monica help you plan your budget and work on the details for your ceremony and reception</li>
                <li>Enjoy your wedding day with no worries, no stress, and no problems</li>
              </Simple>
            </div>
            <h3 className="center-text">Book a 15 minute call with us and see how we can help you plan your dream wedding</h3>
            <div className='center'>
              <a href={calendly}><Button>Book a call</Button></a>
            </div>
          </div>
        </section>
        <section className='container'>
          <div className="content">
            <h2 className='title'>Watch This Romantic Wedding Video From One Of Our Happy Couples</h2>
            <section className='video-section'>
              <ModalVideo channel='custom' autoplay isOpen={isOpen} url="https://natashaweddingvideo.s3.amazonaws.com/wedding-video.mp4" allowFullScreen={true} onClose={() => setOpen(false)} />
              <WhiteButton className="btn-primary" onClick={()=> setOpen(true)}>Watch this video</WhiteButton>
            </section>
            <div className='center'>
              <a href={calendly}><Button>Book a call</Button></a>
            </div>
          </div>
        </section>
        <section className='container'>
          <div className="content">
            <h2 className='title'>Testimonials</h2>
            <Testimonial>
            I am so thankful that I used Monica Browne Weddings for my rooftop wedding in the summer of 2010. It has been 5 years and I still have family and friends tell me how beautiful my wedding day was. I could not have been more pleased at their work. They listened to all my wants and carried them out exactly how I asked them to. They were nice, understanding and very easy to work with...
              </Testimonial>
          <TestimonialAuthor>Katrina</TestimonialAuthor>
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
            <img src='../WebP-images/beautiful-bride-flowers.webp' alt="Bride with flowers" />
            <img src='../WebP-images/bride-groom-happy.webp' alt="Bride and Groom" />
            <img src='../WebP-images/tall-wedding-flowers-centerpiece.webp' alt="Wedding table centerpiece" />
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