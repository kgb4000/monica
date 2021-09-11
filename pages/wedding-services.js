import { useState } from 'react'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import { NextSeo } from 'next-seo'

const calendly = "https://calendly.com/monica-17/monica-browne-weddings-call"

const Services = () => {
  const [isOpen, setOpen] = useState(false)
  const SEO = {
		title: "Wedding Services | Monica Browne Weddings",
		description: "Wedding Services from Monica Browne Weddings include Full Service Wedding Planning, Day-of Cordination, Wedding Decor, Flowers, and Floral Design.",
		openGraph: {
			type: "website",
			locale: "en_US",
			url: "https://monicabrowneweddings.com/services",
			site_name: "Monica Browne Weddings",
			image: "bride-with-flowers.jpg"
		},
	}
  return (
    <>
      <NextSeo {...SEO } />
      <HeroSection 
          heroText="Wedding Services"
          subText="Services We Provide To Our Wonderful Couples"
          buttonText="Book a Call"
          backgroundImage="../WebP-images/black-red-wedding-decor.webp"
          buttonLink={calendly}
          backgroundHeight="100vh"
      />
      <Main>
      <div className='container'>
        <h2 className='title'>Our Services</h2>
        <div className="content">
          <div className='services-1'>
            <img src='../WebP-images/happy-bride-and-groom.webp' alt="Happy bride and groom"/>
            <h3 className='title'>Wedding Planning</h3>
            <ServiceList>
              <li>Budget development and management</li>
              <li>Wedding theme development and design</li>
              <li>Scheduling appointments and meetings</li>
              <li>Meeting with wedding vendors</li>
              <li>Wedding vendor contract and service aggreement review</li>
              <li>Wedding rehearsal coordination and supervision</li>
              <li>Wedding vendor contract and service agreement review</li>
              <li>Plus more</li>
            </ServiceList>
            <div className='center'>
              <a href={calendly}>
								<Button>Book a call</Button>
							</a>
            </div>
          </div>
          <div className='services-2'>
            <img src='../WebP-images/tall-wedding-flowers-centerpiece.webp' alt="Wedding decorations"/>
            <h3 className='title'>Wedding Decor</h3>
            <ServiceList>
              <li>Ceremony design</li>
              <li>Reception design (tent, lighting, dancefloor, signage, etc)</li>
              <li>Cocktail hour design</li>
              <li>Seating charts</li>
              <li>Lounge area design</li>
              <li>Lighting design</li>
              <li>Table design (tables, linens, chairs, centerpieces, napkins, placecards, glassware, etc)</li>
              <li>Plus more</li>
            </ServiceList>
            <div className='center'>
              <a href={calendly}>
								<Button>Book a call</Button>
							</a>
            </div>
          </div>
          <div className='services-3'>
            <img src='../WebP-images/wedding-flower-centerpiece-design.webp' alt="Wedding floral design"/>
            <h3 className='title'>Wedding Flowers</h3>
            <ServiceList>
              <li>Flower recommendations (based on the season)</li>
              <li>Custom floral designs</li>
              <li>Table Centerpieces</li>
              <li>Boutonnieres</li>
              <li>Bouquets</li>
              <li>Arch / Arbor with floral accents</li>
              <li>Table design</li>
              <li>Linen selection</li>
              <li>Plus more</li>
            </ServiceList>
            <div className='center'>
              <a href={calendly}>
								<Button>Book a call</Button>
							</a>
            </div>
          </div>
        </div>
        <div className='center'>
          <a href={calendly}>
            <Button>Book a call</Button>
          </a>
        </div>
      </div>
      </Main>
    </>
  )
}

const Main = styled.main`

  .content {
    text-align: left;
  }

  .outside-btn {
    display: none;
  }

  .btn {
    display: none;
  }

  .services-1,
  .services-2,
  .services-3 {
    margin-bottom: 2rem;
  }


  @media (min-width: 768px) {

    .content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 100%;
      margin: 0 auto;
      gap: 20px;
    }

    .services-1,
    .services-2,
    .services-3 {
      margin-bottom: 0;
    }

    .services-1 {
    grid: 1 / 2;
    }

    .services-2 {
      grid: 2 / 3;
    }

    .services-3 {
      grid: 3 / 4;
    }

    .services-1 button,
    .services-2 button,
    .services-3 button {
      display: none;
    }

    .outside-btn {
      display: block;
    }

    
  }

`

const ServiceList = styled('ul')`

  .content {
    text-align: left;
  }

  max-width: 15rem;
  margin: 0 auto;

  li {
    font-size: 1.4rem;
    font-weight: 100;
  }

  @media (min-width: 768px) {

    display: grid;
    grid-template-colums: repeat(4, 1fr);
    max-width: 80%;
  }
`

export default Services