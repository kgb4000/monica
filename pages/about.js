import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

export default function About() {
  const SEO = {
    title: 'About Monica Browne Weddings',
    description:
      'Monica Browne Weddings is a wedding planning company dedicated to hepling busy couples plan their dream wedding.',
    canonical: 'https://monicabrowneweddings.com/about',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/about',
      site_name: 'Monica Browne Weddings',
      images: [
        {
          url: 'https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495886/monica-browne-wedding-planner_qa1xcl.webp',
          width: 1500,
          height: 1000,
          alt: 'Couple just married, walking down the aisle.',
        },
      ],
      description:
        'We are a wedding planning company dedicated to making sure that you enjoy planning your wedding.',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <HeroSection
        heroText="About us"
        subText="Monica Browne Weddings"
        backgroundImage="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495886/monica-browne-wedding-planner_qa1xcl.webp"
        backgroundHeight="70vh"
        buttonText="Call (240) 665-3350"
        buttonLink="tel:+2406653350"
      />
      <Main itemscope itemType="https://schema.org/LocalBusiness">
        <section className="container">
          <div className="content">
            <h1 className="title" itemProp="name">
              Monica Browne Weddings
            </h1>
            <p className="intro" itemProp="description">
              Monica Browne Weddings is a{' '}
              <Link href="/wedding-services/full-service-wedding-planner">
                <a>full-service wedding planning</a>
              </Link>{' '}
              company that delivers the best and most memorable weddings and
              events. We understand if you're a busy couple and don't have a lot
              of time. We can help you plan the wedding of your dreams and give
              you more free time to do the essential things you need to do.
            </p>
            <div className="center">
              <a href="tel:+2406653350">
                <Button>Call (240) 665-3350</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="service-content">
            <h2 className="title">How We Can Help You</h2>
            <PainPoints>
              <ul>
                <li>Help prepare a budget and manage it</li>
                <li>Keep you organized to cut stress</li>
                <li>Help research and choose venues and vendors</li>
                <li>
                  Organize your wedding rehearsal and communicate with your
                  wedding party
                </li>
              </ul>
              <ul>
                <li>Read and negotiate vendor contracts</li>
                <li>Communicate with your wedding party and guests</li>
                <li>Handle problems that may come up</li>
                <li>
                  Be a dependable resource with 15+ years of experience, so we
                  know what to do
                </li>
                <li>Plus more</li>
              </ul>
            </PainPoints>
            <div className="center">
              <Link href="/wedding-services" passHref>
                <a>
                  <Button>See Our Services</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title"> About Monica</h2>
            <Team className="team">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495886/monica-browne-wedding-planner_qa1xcl.webp"
                className="about-img"
                alt="Monica browne Wedding Planner"
                title="Monica Browne Wedding Planner"
                loading="lazy"
              />
              <h2 className="title">Monica Browne</h2>
              <p>
                Planning a wedding or special event is something that I live
                for! I love when two people are so in love that they want to
                join together, create a family, and start a great life together.
                I also love being a part of a new beginning for every one of my
                clients.
              </p>

              <p>
                My family is my everything to me! I am a wife, mother,
                confidant, and friend. I should also add I am a massive fan of
                chocolate, and I love to enjoy a glass of red wine while
                binge-watching horror films!
              </p>

              <p>
                When I am not planning weddings or{' '}
                <Link href="/wedding-services/wedding-flowers" passHref>
                  <a>creating floral designs</a>
                </Link>
                , I like traveling, exploring different cultures, and trying
                other foods. Big emphasis on the food!
              </p>

              <p>
                What about my love for events? My desire to enter the event
                planning industry was when I was a little girl and witnessed
                fabulous events by my parents and grandparents. That desire grew
                into me working with wonderful clients like you.
              </p>
              <p>
                Over this past decade and a half, I've shared heartfelt memories
                and created bonds with clients that will last a lifetime. I am
                excited and looking forward to hearing more about your vision
                and working with you.
              </p>
              <p>Book a call and let's talk soon.</p>
            </Team>
            <div className="center">
              <a href={calendly} rel="noreferrer">
                <Button>Book a call today!</Button>
              </a>
            </div>
          </div>
        </section>
      </Main>
    </>
  )
}

const Main = styled('div')`
  .service-content {
    padding: 2rem;
  }

  li {
    list-style-type: disc;
  }

  @media (min-width: 768px) {
    .content {
      text-align: left;
      max-width: 60rem;
      margin: 0 auto;
    }
  }
`

const PainPoints = styled('ul')`
  ul {
    max-width: 25rem;
    margin: 0 auto;
    text-align: left;
  }

  li {
    font-weight: 200;
    margin: 1rem 0;
  }

  @media (min-width: 768px) {
    div {
      max-width: 20rem;
      margin: 0 auto;
      text-align: left;
    }

    li {
      font-weight: 200;
      margin: 1rem 0;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    max-width: 80rem;
    justify-content: space-evenly;
    margin: 0 auto;
    font-size: 1.6rem;

    div {
      width: 25rem;
      margin: 0 auto;
    }
  }
`

const Team = styled('div')`
  margin: 2em 0;

  .underline {
    text-decoration: underline;
  }
`
