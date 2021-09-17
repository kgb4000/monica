import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

const About = () => {
  const SEO = {
    title: 'About Wedding Planner | Monica Browne Weddings',
    description:
      'Monica Browne Weddings is a wedding planning company dedicated to hepling busy couples plan their dream wedding.',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/about-wedding-planner',
      site_name: 'Monica Browne Weddings',
      image: 'bride-with-flowers.jpg',
      description:
        'We are a wedding planning company dedicated to making sure that you enjoy planning your wedding.',
    },
  }
  return (
    <>
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
        heroText="About us"
        subText="Monica Browne Weddings"
        buttonText="Book a Call"
        backgroundImage="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495886/monica-browne-wedding-planner_qa1xcl.webp"
        buttonLink={calendly}
        backgroundHeight="80vh"
      />
      <Main itemscope itemType="https://schema.org/LocalBusiness">
        <section className="container">
          <div className="content">
            <h1 className="title" itemProp="name">
              Monica Browne Weddings
            </h1>
            <p className="intro" itemProp="description">
              Monica Browne Weddings is a{' '}
              <Link href="/wedding-services/wedding-planning">
                <a>wedding planning</a>
              </Link>{' '}
              company focused on delivering the best and most memorable weddings
              and events. If you're a busy couple and don't have a lot of time,
              we understand. We can help you plan the wedding of your dreams and
              give you more free time to do the essential things you need to do.
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
            <h2 className="title">How We Can Help You</h2>
            <PainPoints>
              <ul>
                <li>Helping you get your budget together and managing it</li>
                <li>Keep you organized to alleviate unnecessary stress</li>
                <li>Help to research and select wedding venues and vendors</li>
                <li>Managing your wedding rehearsal, ceremony and reception</li>
              </ul>
              <ul>
                <li>Reading and negotiating vendor contracts</li>
                <li>Coomunicating with your wedding party and guests</li>
                <li>Dealing with problems that may come up</li>
                <li>
                  Be a dependable resource with 15+ years of experience, so we
                  know what to do
                </li>
                <li>Plus more</li>
              </ul>
            </PainPoints>
            <div className="center">
              <Link href="/wedding-services">
                <a>
                  <Button>See Our Services</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h1 className="title"> About Monica</h1>
            <Team className="team">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495886/monica-browne-wedding-planner_qa1xcl.webp"
                className="about-img"
                alt="Monica browne Wedding Planner"
                title="Monica Browne Wedding Planner"
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
                confidant, and friend. I should also add, I am a massive fan of
                chocolate, and I love to enjoy a glass of red wine while
                binge-watching horror films!
              </p>

              <p>
                When I am not planning weddings or{' '}
                <Link href="/wedding-services/wedding-flowers">
                  <a>creating floral designs</a>
                </Link>
                , I like traveling, exploring different cultures, and trying
                different foods. Big emphasis on the food!
              </p>

              <p>
                What about my love for events? My desire to enter the event
                planning industry goes back to when I was a little girl and
                witnessed fabulous events put on by my parents and grandparents.
                From there, that desire grew into me working with wonderful
                clients like you. Over this past decade and a half, I've shared
                heartfelt memories and created bonds with clients that will last
                a lifetime. I am excited and looking forward to hearing more
                about your vision and working with you too.{' '}
                <a href={calendly} className="underline">
                  Book a call
                </a>{' '}
                and let's talk soon.
              </p>
            </Team>
            <div className="center">
              <a href={calendly}>
                <Button>Book a 15 min call</Button>
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
    max-width: 20rem;
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
export default About
