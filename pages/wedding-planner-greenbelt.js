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

export default function Home({ data }) {
  const [isOpen, setOpen] = useState(false)
  const SEO = {
    title: 'Wedding Planner in Greenbelt | Monica Browne Weddings',
    description:
      'As a top wedding planner in Greenbelt, we give the best services to our clients including planning and coordination for any wedding. Contact us today!',
    canonical: 'https://monicabrowneweddings.com/wedding-planner-greenbelt',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/wedding-planner-annapolis-md',
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
        heroText="Wedding Planning For Busy Greenbelt Couples"
        subText="We Create Beautiful Weddings For Couples in Greenbelt MD"
        buttonText="Book A Call"
        backgroundImage="/images/reception-details.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1 className="title">Wedding Planner Greenbelt</h1>
            <p>
              Monica Browne Weddings is are professional wedding planners here
              to help you plan one of the most memorable events.
            </p>
            <p>
              We provide{' '}
              <Link href="/wedding-services/full-service-wedding-planner">
                <a>full-service planning</a>
              </Link>{' '}
              , partial planning, and{' '}
              <Link href="/day-of-wedding-coordinator">
                <a>day-of coordination</a>
              </Link>{' '}
              services.
            </p>

            <p>
              We help guide you through the planning process and help alleviate
              the frustration and stress of wedding planning.
            </p>
            <p>
              As a professional event planner, Monica and her team will manage
              your entire wedding day and make sure it goes off without a hitch.
              If there are any unexpected problems, you will not have to worry,
              because we have already taken care of them.
            </p>
            <p>
              We are experts at event management and creating enchanting events
              with over 15 years of experience in wedding and event management.
              You tell us your vision, and we'll take care of all the details.
            </p>
            <p>
              Many couples trust us to bring their wedding dreams to life, and
              we do.
            </p>
            <p>
              We always do our best to create enchanting, unique, and fun
              events. As one of the top wedding planners in Maryland, you can
              count on us to be there from the beginning of the planning process
              to the end.
            </p>
            <p>
              We stay with you to make sure your big day is beautiful and
              stress-free.
            </p>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
          </div>
        </section>
        <PainSection
          title="Planning a Wedding Can Get Overwhelming"
          src="/images/wedding-floral-design-472.webp"
          alt="Flowers designed by Annapolis wedding planner Monica Browne"
          width="472"
          height="708"
          pain1="Time looking on for the best wedding vendors"
          pain2="Time finding the right wedding planner and coordinator"
          pain3="Time trying to plan and style a wedding, something you've never done before"
          pain4="Time looking for a venue"
          pain5="Making timely decisions and staying organized"
          pain6="Figuring out new Covid-19 protocols for events in Maryland"
        />
        <section className="container">
          <div>
            <h2 className="title">Our Wedding Services</h2>
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
              <Link href="/wedding-services">
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
              We Make Wedding Planning Simple in Greenbelt Couples
            </h2>
            <div>
              <Simple>
                <li>
                  <h4>Talk To Monica</h4>
                  <p>
                    Schedule your call with Monica and see how she can help with
                    full-service planning, partial service, or event management.
                  </p>
                </li>
                <li>
                  <h4>Plan & Budget</h4>
                  <p>
                    Let Monica help you with the planning process, your budget,
                    finding reputable vendors, and help style your entire event,
                    including the ceremony and reception.
                  </p>
                </li>
                <li>
                  <h4>Enjoy Your Special Day</h4>
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
              wedding planner
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
              Watch This Romantic Wedding Video From One Of Our Happy Couples
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
          <div className="content">
            <h2 className="title">Testimonials</h2>
            <Testimonial>
              Choosing Monica Browne Weddings to meet my needs during one of the
              most important events in my life was a decision that hosts no
              regrets. True professionalism, at its best! While planning a
              wedding can be very stressful and hectic, my experience with
              Monica Browne Weddings was definitely one that was fun and
              exciting! All tasks were completed in a very organized manner and
              with so many things to accomplish, such organization was very
              important...
            </Testimonial>
            <TestimonialAuthor>Teresa</TestimonialAuthor>
            <div className="center">
              <Link href="/testimonials">
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
