import dynamic from 'next/dynamic'
import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import Simple from '../components/Simple'
import { Testimonial, TestimonialAuthor } from '../components/Testimonials'
import { NextSeo } from 'next-seo'

const ModalVideo = dynamic(() => import('react-modal-video'))

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  const SEO = {
    title: 'Travilah Wedding Planner | Monica Browne Weddings',
    description:
      'Looking for a wedding planner in Travilah because you need some help? Call Monica Browne Weddings. We can help you plan the wedding of your dreams.',
    canonical: 'https://monicabrowneweddings.com/travilah',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/travilah',
      site_name: 'Monica Browne Weddings',
      images: [
        {
          url: 'https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/walking-down-aisle_o4wklu.webp',
          width: 3961,
          height: 2641,
          alt: 'Couple just married, walking down the aisle.',
        },
      ],
    },
  }
  return (
    <div>
      <NextSeo {...SEO} />
      <HeroSection
        heroText="Wedding Planning For Travilah Couples"
        subText="We Create Beautiful Weddings For Busy Couples in Travilah"
        buttonText="Book a video call"
        backgroundImage="/images/wedding-reception-table.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1 className="title">Wedding Planner in Travilah</h1>
            <p className="intro">
              Even though you may not know where to start planning your wedding,
              you can still have the wedding of your dreams. Monica Browne
              Weddings is here to help and guide you through the process. With
              our help and guidance, you will undoubtedly get the wedding you
              want and have time to do the other essential things in your life.
              We work with couples in Silver Spring, and throughout the
              Washington DC area.
            </p>
            <div className="center">
              <a href={calendly}>
                <Button>Book a video call</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="service-content">
            <div className="painpoints">
              <div className="painpoints--content">
                <h2 className="title">
                  Planning Your Wedding Can Be Really Stressful At Times
                </h2>
                <PainPoints>
                  <li>Not knowing what you want and where to start</li>
                  <li>
                    Information overload from corporate wedding websites and
                    blogs
                  </li>
                  <li>
                    Having to trust people that you don't know with the most
                    important day of your life
                  </li>
                  <li>Setting up a timeline for your wedding</li>
                  <li>Budgeting for your wedding</li>
                  <li>Relying on friends that may not come through</li>
                  <li>Dealing with new Covid-19 protocols</li>
                </PainPoints>
              </div>
            </div>
          </div>
          <h3 className="center-text">
            Book a 15 minute call with us and see how we can help you plan your
            dream wedding
          </h3>
          <div className="center">
            <a href={calendly}>
              <Button>Book a 15 min call</Button>
            </a>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title">Our Services</h2>
            <Services>
              <div className="wedding-service">
                <img
                  src="/images/bride-groom-happy.webp"
                  alt="Happily Married Couple"
                  loading="lazy"
                />
                <h3 className="title">Wedding Planning</h3>
              </div>
              <div className="wedding-service">
                <img
                  src="/images/wedding-table-setting.webp"
                  alt="Wedding Decor and Design"
                  loading="lazy"
                />
                <h3 className="title">Wedding Decorations</h3>
              </div>
              <div className="wedding-service">
                <img
                  src="/images/wedding-flower-centerpiece-design.webp"
                  alt="Wedding Floral Design"
                  loading="lazy"
                />
                <h3 className="title">Wedding Floral Design</h3>
              </div>
            </Services>
            <div className="center">
              <Link href="/wedding-services">
                <a>
                  <Button>More Services</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="service-content">
            <h2 className="title">
              We Make Planning Your Wedding in Travilah Less Stressful
            </h2>
            <div>
              <Simple>
                <li>
                  <h4>Talk To Monica</h4>
                  <p>
                    Book your first call with Monica and see how she can help
                    you plan your wedding.
                  </p>
                </li>
                <li>
                  <h4>Create A Budget</h4>
                  <p>
                    Work out your budget and start planning your wedding
                    details.
                  </p>
                </li>
                <li>
                  <h4>Enjoy Your Special Day</h4>
                  <p>Just enjoy your wedding day and cherish the moment.</p>
                </li>
              </Simple>
            </div>
            <h3 className="center-text">
              Book a 15 minute call with us and see how we can help you plan
              your dream wedding
            </h3>
            <div className="center">
              <a href={calendly}>
                <Button>Book a 15 min call</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title">
              Watch This Beautiful Wedding Video From One Of Our Happy Couples
            </h2>
            <section className="video-section">
              <ModalVideo
                channel="custom"
                autoplay
                isOpen={isOpen}
                url="https://natashaweddingvideo.s3.amazonaws.com/wedding-video.mp4"
                allowFullScreen={true}
                onClose={() => setOpen(false)}
              />
              <WhiteButton
                className="btn-primary"
                onClick={() => setOpen(true)}
              >
                Watch this video
              </WhiteButton>
            </section>
            <div className="center">
              <a href={calendly}>
                <Button>Book a 15 min call</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title">Testimonials</h2>
            <Testimonial>
              I am soooo indecisive when it comes to almost anything! Monica was
              super patient and extremely helpful in making my vision come to
              life! I am so thankful for her creative ability and
              professionalism! THANK YOU!!
            </Testimonial>
            <TestimonialAuthor>Aleta</TestimonialAuthor>
            <div className="center">
              <Link href="/testimonials">
                <a>
                  <Button>More Testimonials</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="gallery container">
          <h2 className="title">Gallery</h2>
          <Gallery>
            <img
              src="/images/bride-with-flowers.webp"
              alt="Bride with flowers"
              loading="lazy"
            />
            <img
              src="/images/bride-groom-happy.webp"
              alt="Bride and Groom"
              loading="lazy"
            />
            <img
              src="/images/wedding-cake.webp"
              alt="Bride and Groom"
              loading="lazy"
            />
          </Gallery>
          <div className="center">
            <Link href="/wedding-gallery">
              <a>
                <Button>See More Pictures</Button>
              </a>
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
      font-weight: 200;
      margin: 1rem 0;
    }

    max-width: 100%;
    margin-left: 2rem;
  }
`

const Services = styled('div')`
  margin: 0 auto;

  .wedding-service {
    margin: 0 auto;
    text-align: center;
  }

  h3 {
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
