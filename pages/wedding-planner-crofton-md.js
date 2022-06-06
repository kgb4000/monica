import dynamic from 'next/dynamic'
import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import { Testimonial, TestimonialAuthor } from '../components/Testimonials'
import Button from '../components/Button'
import { NextSeo } from 'next-seo'
import Simple from '../components/Simple'
import BlogPosts from '../components/BlogPosts'
import { getPosts } from '../lib/data'

import PainSection from '../components/PainSection'

const ModalVideo = dynamic(() => import('react-modal-video'))

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

export default function Crofton({ data }) {
  const [isOpen, setOpen] = useState(false)
  const SEO = {
    title: 'Wedding Planner in Crofton MD | Monica Browne Weddings',
    description:
      'Monica Browne is a full-service wedding planner and day-of coordinator for couples in Crofton Maryland. Contact us today to plan your dream wedding!',
    canonical: 'https://monicabrowneweddings.com/wedding-planner-crofton-md',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/wedding-planner-crofton-md',
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
        heroText="Wedding Planning for Crofton Couples"
        subText="We Create Initmate Weddings For Couples in Crofton MD"
        buttonText="Book A Call"
        backgroundImage="/images/happy-couple.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1 className="title">Crofton Wedding Planner</h1>
            <p>
              Looking for an experienced and resourceful wedding planner in
              Crofton?
            </p>
            <p>Monica Browne Weddings is the wedding planner for you.</p>
            <p>
              If you don't know where to start planning and you're having
              trouble deciding on what you should do first, don't worry.
            </p>
            <p>You can still have the wedding of your dreams.</p>
            <p>
              Monica Browne Weddings is here to help couples in Crofton through
              the wedding planning process.
            </p>
            <p>
              With our help and guidance, you will get to have the wedding you
              want and have all the time to do the other important things in
              your life.
            </p>
            <h3 className="center-text">
              Book a 15 minute call and see how we can help you plan your dream
              wedding.
            </h3>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
          </div>
        </section>
        <PainSection
          title="Wedding Planning Can Be A Lot"
          src="/images/wedding-floral-design-472.webp"
          alt="Flowers designed by Annapolis wedding planner Monica Browne"
          width="472"
          height="708"
          pain1="Time looking on a wedding planner you can trust"
          pain2="Time finding the right venue"
          pain3="Time trying to plan and style a wedding, something you've never done before"
          pain4="Time looking for a venue"
          pain5="Making timely decisions and staying organized"
          pain6="Figuring out new Covid-19 protocols for events in Crofton MD"
        />
        <section className="container">
          <div>
            <h2 className="title">Crofton Wedding Services</h2>
            <Services>
              <div className="wedding-service">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1631495885/happy-bride-and-groom_bwyebx.webp"
                  alt="Happily Married Couple"
                  rel="noreferrer"
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="title">Wedding Planning</h3>
              </div>
              <div className="wedding-service">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1631495884/bride-with-flowers_xahpez.webp"
                  alt="Wedding Decorations and Design"
                  rel="noreferrer"
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="title">Wedding Decorations</h3>
              </div>
              <div className="wedding-service">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1631495887/wedding-flower-centerpiece-design_vq2ofj.webp"
                  alt="Wedding Floral Design"
                  rel="noreferrer"
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="title">Floral & Event Design</h3>
              </div>
            </Services>
            <div className="center">
              <Link href="/wedding-services" passHref>
                <a>
                  <Button>More Services</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="service-content get-started">
            <h2 className="title">
              We Make Wedding Planning For Crofton Couples Easy Pezy
            </h2>
            <div>
              <Simple>
                <li>
                  <h4>Talk To Monica</h4>
                  <p>
                    Schedule your call with Monica and see how she can help with
                    full-service planning or partial service.
                  </p>
                </li>
                <li>
                  <h4>Plan & Budget</h4>
                  <p>
                    Let Monica help you with the plan, your budget, finding
                    reputable vendors, and help style your entire event,
                    including the ceremony and reception.
                  </p>
                </li>
                <li>
                  <h4>Enjoy Your Wedding Day</h4>
                  <p>
                    Enjoy your wedding day with no worries, no stress, and
                    problems. We'll take care of your event coordination and the
                    details so your day is stress-free.
                  </p>
                </li>
              </Simple>
            </div>
            <h3 className="center-text">
              Book a 15 minute call with us and see how we can help as your
              Crofton wedding planner
            </h3>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div>
            <h2 className="title">
              Watch This Wedding Video From One Of Our Happy Couples
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
                <Button>Book a call</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div>
            <h2 className="title">Testimonials</h2>
            <Testimonial>
              I am so thankful that I used Monica Browne Weddings for my rooftop
              wedding in the summer of 2010. It has been 5 years, and I still
              have family and friends tell me how beautiful my wedding day was.
              I could not have been more pleased with their work. They listened
              to all my wants and carried them out exactly how I asked them to.
              They were friendly, understanding, and effortless to work with...
            </Testimonial>
            <TestimonialAuthor>Katrina</TestimonialAuthor>
            <div className="center">
              <Link href="/testimonials" passHref>
                <a>
                  <Button>More Testimonials</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <BlogPosts data={data} />
        <section className="gallery container">
          <h2 className="title">Our Gallery</h2>
          <Gallery>
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/v1631495883/beautiful-bride-flowers_ho8plu.webp"
              alt="Bride with flowers"
              rel="noreferrer"
              loading="lazy"
              width="472"
              height="708"
            />
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/v1631495884/bride-groom-happy_xr217b.webp"
              alt="Bride and Groom"
              rel="noreferrer"
              loading="lazy"
              width="472"
              height="708"
            />
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/v1631495887/tall-wedding-flowers-centerpiece_ql8yf6.webp"
              alt="Wedding table centerpiece"
              rel="noreferrer"
              loading="lazy"
              width="472"
              height="708"
            />
          </Gallery>
          <div className="center">
            <Link href="/wedding-gallery" passHref>
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
      text-align: left;
      max-width: 60rem;
      margin: 0 auto;
    }

    .service-content {

      img {
        display: none;
      }

      display: block;
      max-width: 60rem;
      margin: 0 auto;
      text-align: left;

      @media (min-width: 768px) {

        img {
        display: block;
      }


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
