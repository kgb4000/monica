import { useState } from 'react'
import Link from 'next/link'
import ModalVideo from 'react-modal-video'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import { Testimonial, TestimonialAuthor } from '../components/Testimonials'
import Button from '../components/Button'
import Simple from '../components/Simple'
import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  const SEO = {
    title: 'Bethesda Wedding Planner | Monica Browne Weddings',
    description:
      "Are you a couple in Bethesda planning your wedding and need help? Don't. We are Monica Browne Weddings and we can help you plan the wedding of your dreams. Call us.",
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/bethesda',
      site_name: 'Monica Browne Weddings',
      image: 'bride-with-flowers.jpg',
    },
  }
  return (
    <div>
      <NextSeo
        {...SEO}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
      />
      <HeroSection
        heroText="Wedding Planning For Bethesda Couples"
        subText="We Create Beautiful Weddings For Busy Couples in Bethesda"
        buttonText="Book a Call"
        backgroundImage="../WebP-images/newly-married-couple.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1 className="title">Bethesda Wedding Planner</h1>
            <p className="intro">
              Even though you may not know where to start planning your wedding,
              you can still have the wedding of your dreams. Monica Browne
              Weddings is here to help couples in Bethesda through the planning
              process. With our help and guidance, you will undoubtedly get the
              wedding you want and have all the time to do the other important
              things in your life.
            </p>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="service-content">
            <div className="painpoints">
              <div className="painpoints--content">
                <h2 className="title">
                  Planning A Wedding Can Be Overwhelming
                </h2>
                <PainPoints>
                  <li>Not knowing what you want and where to start</li>
                  <li>Information overload from corporate wedding blogs</li>
                  <li>
                    Deciding on a{' '}
                    <a
                      href="https://woodendsanctuary.org/virtual-tour/"
                      target="_blank"
                    >
                      wedding venue near you
                    </a>
                  </li>
                  <li>Worrying about out of town guests</li>
                  <li>You still have a busy life and your time is valuable</li>
                  <li>Relying on friends that are also too busy</li>
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
                  src="../WebP-images/bride-groom-happy.webp"
                  alt="Happily Married Couple"
                />
                <h3 className="title">Wedding Planning</h3>
              </div>
              <div className="wedding-service">
                <img
                  src="../WebP-images/wedding-table-setting.webp"
                  alt="Wedding Decor and Design"
                />
                <h3 className="title">Wedding Decorations</h3>
              </div>
              <div className="wedding-service">
                <img
                  src="../WebP-images/wedding-flower-centerpiece-design.webp"
                  alt="Wedding Floral Design"
                />
                <h3 className="title">Wedding Flowers</h3>
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
              We Make Planning Your Wedding in Bethesda Easier
            </h2>
            <div>
              <Simple>
                <li>
                  <h4>Talk To Monica</h4>
                  <p>
                    Schedule your call with Monica and see how she can help plan
                    your wedding
                  </p>
                </li>
                <li>
                  <h4>Plan & Budget</h4>
                  <p>
                    Let Monica help you plan your budget and work on the details
                    for your ceremony and reception and even{' '}
                    <a
                      href="https://www.hyatt.com/en-US/hotel/maryland/hyatt-regency-bethesda/bethe/rooms"
                      target="_blank"
                    >
                      hotel reservations
                    </a>{' '}
                    for your guests
                  </p>
                </li>
                <li>
                  <h4>Enjoy Your Special Day</h4>
                  <p>
                    Enjoy your wedding day with no worries,{' '}
                    <a
                      href="https://www.theknot.com/content/signs-youre-stressed-out"
                      target="_blank"
                    >
                      no stress
                    </a>
                    , and no problems. We'll take care of everything for you.
                  </p>
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
              src="../WebP-images/bride-with-flowers.webp"
              alt="Bride with flowers"
            />
            <img
              src="../WebP-images/bride-groom-happy.webp"
              alt="Bride and Groom"
            />
            <img src="../WebP-images/wedding-cake.webp" alt="Bride and Groom" />
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
