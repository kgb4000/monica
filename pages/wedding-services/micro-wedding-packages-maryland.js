import dynamic from 'next/dynamic'
import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../../components/HeroSection'
import Button from '../../components/Button'
import Simple from '../../components/Simple'
import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

export default function Potomac() {
  const SEO = {
    title: 'Micro Wedding Packages | Maryland',
    description:
      'Want to have a Micro Wedding and need some guidance? Call Monica Browne Weddings. We specialize in planning intimate events.',
    canonical:
      'https://monicabrowneweddings.com/mirco-wedding-packages-maryland',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/mirco-wedding-packages-maryland',
      site_name: 'Monica Browne Weddings',
      images: [
        {
          url: 'https://monicabrowneweddings.com/public/images/wedding-planner-vs-coordinator.webp',
          width: 1000,
          height: 1500,
          alt: 'Micro wedding at winery in Maryland.',
        },
      ],
    },
  }
  return (
    <div>
      <NextSeo {...SEO} />
      <HeroSection
        heroText="Micro Wedding Packages"
        subText="We Help Couples Create Small Intimate Weddings and Events"
        buttonText="Book a call today"
        backgroundImage="/images/wedding-planner-vs-coordinator.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1 className="title">Micro Wedding Packages in Maryland</h1>
            <p>
              Are you looking to have a small, intimate ceremony but don't want
              to sacrifice quality?
            </p>
            <p>
              If so, a micro wedding package may be just what you're looking
              for.
            </p>
            <p>
              A micro wedding package offers all the amenities of a traditional
              wedding but on a much smaller scale. This can be perfect for
              couples looking to save money and time while still having a
              beautiful and memorable wedding day.
            </p>
            <p>
              So if you're looking to have a small, intimate wedding without
              sacrificing quality, then a micro wedding may be just what you're
              looking for.
            </p>
            <div className="center">
              <a href={calendly}>
                <Button>Book a 15 min call</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title">What are Micro Weddings?</h2>
            <div className="about-micro-section">
              <img
                src="/images/maryland-wedding-planner-472w.webp"
                alt="Bride and Groom"
                loading="lazy"
                width="472"
                height="708"
              />
              <div className="micro-wedings-about">
                <p>
                  Micro weddings are small weddings that typically have 50
                  guests or less.
                </p>
                <p>
                  Unlike a big wedding, these weddings often focus on quality
                  over quantity, and couples usually save money by having a
                  smaller guest list, less food, and a smaller vendor team.
                </p>
                <p>
                  Micro weddings can be held at various venues, from traditional
                  venues to more unique locations like barns or wineries. Plus,
                  micro packages typically include all the amenities of a
                  traditional wedding, from the ceremony space to the reception
                  hall and even your overnight accommodations.
                </p>
              </div>
            </div>
          </div>
          <div className="center">
            <Link href="/contact" passHref>
              <a>
                <Button>Contact us to get started</Button>
              </a>
            </Link>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title">
              The Benefits of Having a Micro Wedding in Maryland
            </h2>
            <p>
              In recent years, more and more couples have been opting for small
              weddings over large, traditional weddings. And several benefits
              come along with having a small wedding.
            </p>
            <p>
              Here are just a few of the many benefits of having a micro
              wedding:
            </p>
            <h3>You'll save money</h3>
            <p>
              One of the biggest benefits of micro weddings is that you'll save
              money. You'll spend less on everything from your venue to your
              catering when you have a smaller guest list. Plus, you can often
              get discounts on your wedding vendor services when you have a
              smaller ceremony and reception.
            </p>
            <h3>You'll save time</h3>
            <p>
              Planning a large traditional wedding can be extremely
              time-consuming. But when you have a micro wedding, you'll have
              more time to enjoy the planning process and focus on the essential
              details. Plus, you won't have to spend as much time coordinating
              with your wedding vendors or dealing with logistics.
            </p>
            <h3>You Can be More Creative</h3>
            <p>
              When you have a small, intimate wedding, you have more freedom to
              be creative with your wedding décor and details. Plus, you can get
              discounts on your vendor services when you have a smaller event.
            </p>
            <h3>You Can Focus on Quality Over Quantity</h3>
            <p>
              One of the best things about having a micro wedding is that you
              can focus on quality over quantity. When you have a smaller guest
              list, you can spend more time and money on making sure each guest
              has a wonderful time. Plus, you'll be able to create a more
              intimate setting that will make your wedding day even more
              special.
            </p>
            <p>
              Micro weddings are becoming increasingly popular, so if you're
              considering having one, then start planning your dream day today
              with one of Maryland's unique micro wedding packages.
            </p>
            <div className="center">
              <Link href="/contact" passHref>
                <a>
                  <Button>Contact us to get started</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2>Intimate Wedding Venues in Maryland</h2>
            {/* <div className="micro-wedding-venues">
              <img
                src="/images/william-paca-house-stairs-facing-house.jpg"
                width="300px"
              />
              <div className="venue-info">
                <p>William Paca House</p>
              </div>
            </div> */}
            <ul className="micro-wedding-venues">
              <li>
                <p>
                  <a
                    href="https://www.prismannapolis.com/"
                    target="_blank"
                    rel="noreferrer"
                    loading="lazy"
                  >
                    Prisms Annapolis
                  </a>
                </p>
                <addres>49 Spa Rd, Annapolis, MD 21401</addres>
                <p>
                  <small>
                    <a href="tel:4102950104">(410) 295-0104</a>
                  </small>
                </p>
              </li>
              <hr></hr>
              <li>
                <p>
                  <a
                    href="https://amaritime.org/"
                    target="_blank"
                    rel="noreferrer"
                    loading="lazy"
                  >
                    Annapolis Maritime Museum
                  </a>
                </p>
                <addres> 723 Second St, Annapolis, MD 21403</addres>
                <p>
                  <small>
                    <a href="tel:4102717271">(410) 271-7271</a>
                  </small>
                </p>
              </li>
              <hr></hr>
              <li>
                <p>
                  <a
                    href="https://www.ccwoodmore.com/"
                    target="_blank"
                    rel="noreferrer"
                    loading="lazy"
                  >
                    The Country Club at Woodmore
                  </a>
                </p>
                <addres>
                  12320 Pleasant Prospect, Mitchellville, MD 20721
                </addres>
                <p>
                  <small>
                    <a href="tel:3102496100">(301) 249-6100</a>
                  </small>
                </p>
              </li>
              <hr></hr>
              <li>
                <p>
                  <a
                    href="https://www.historic-oakland.com/"
                    target="_blank"
                    rel="noreferrer"
                    loading="lazy"
                  >
                    Historic Oakland
                  </a>
                </p>
                <addres>5430 Vantage Point Rd, Columbia, MD 21044</addres>
                <p>
                  <small>
                    <a href="tel:4107304801">(410) 730-4801</a>
                  </small>
                </p>
              </li>
              <hr></hr>
              <li>The Blackwall Barn and Lodge</li>
              <hr></hr>
              <li>
                <p>
                  <a
                    href="https://www.annapolis.org/contact/william-paca-house-garden"
                    target="_blank"
                    rel="noreferrer"
                    loading="lazy"
                  >
                    William Paca House and Garden
                  </a>
                </p>
                <addres>186 Prince George St, Annapolis, MD 21401</addres>
                <p>
                  <small>
                    <a href="tel:4109904543">(410) 990-4543</a>
                  </small>
                </p>
              </li>
              <hr></hr>
              <li>
                <p>
                  <a
                    href="https://www.cbmmweddings.com/"
                    target="_blank"
                    rel="noreferrer"
                    loading="lazy"
                  >
                    Chesapeake Bay Maritime Museum
                  </a>
                </p>
                <addres>213 N Talbot St, St Michaels, MD 21663</addres>
                <p>
                  <small>
                    <a href="tel:4107452916">(410) 745-2916</a>
                  </small>
                </p>
              </li>
            </ul>
            <div className="center">
              <a href={calendly}>
                <Button>Contact us</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2>Next Steps</h2>
            <p>
              Now that you know the benefits, it's time to start planning your
              own. Here are a few tips to help you get started:
            </p>
            <h3>#1. Set a Budget</h3>
            <p>
              The first thing you'll need to do when planning is to set a
              budget. When you have a smaller guest list, you'll save money on
              everything from your venue to your catering. Plus, you can often
              get discounts on your wedding vendor services when you have a
              smaller wedding.
            </p>
            <h3>#2. Choose Your Wedding Venue</h3>
            <p>
              One of the best things about having a micro wedding in Maryland is
              that you can be creative with your venue. You can choose to have
              your ceremony and reception at the same location, or you can opt
              for a unique setting like a park or an outdoor garden venue.
            </p>
            <h3>#3. Choose Your Guest List</h3>
            <p>
              Another good thing about having a micro wedding is that you can
              focus on quality over quantity. When you have a smaller guest
              list, you can spend more time and money on making sure each guest
              has a wonderful time. Plus, you'll be able to create a more
              intimate setting that will make your wedding day even more
              special.
            </p>
            <h3>#4. Start Planning</h3>
            <p>
              Now that you know what a micro wedding is and how to plan one,
              it's time to start planning your dream day. With a bit of help
              from{' '}
              <Link href="/" passHref>
                <a>Monica Browne Weddings</a>
              </Link>{' '}
              Monica Browne Weddings, you can have a small, unique, intimate
              wedding that you'll love.
            </p>
          </div>
        </section>
        <section className="container">
          <div className="service-content get-started">
            <h2 className="title">
              We Make Planning Micro Weddings in Maryland Easy
            </h2>
            <div>
              <Simple>
                <li>
                  <h4>Talk To Monica</h4>
                  <p>
                    Call and talk with Monica and see how she can help you plan
                    everything.
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
                  <h4>Enjoy Your Wedding Day</h4>
                  <p>Just enjoy your wedding day and cherish the moment.</p>
                </li>
              </Simple>
            </div>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="service-content">
            <h2 className="title">What Do I Need for a Micro Wedding?</h2>
            <Simple>
              <li>
                <p>Wedding Planner</p>
              </li>
              <li>
                <p>Your Closest family and friends</p>
              </li>
              <li>
                <p>Small wedding venue</p>
              </li>
              <li>
                <p>Officiant</p>
              </li>
              <li>
                <p>Marriage license</p>
              </li>
              <li>
                <p>Photographer</p>
              </li>
              <li>
                <p>
                  <Link href="/wedding-services/wedding-decor-services">
                    <a>Decorations</a>
                  </Link>
                </p>
              </li>
              <li>
                <p>Small Wedding ceremony</p>
              </li>
              <li>
                <p>Small reception</p>
              </li>
            </Simple>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call today</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="content"></div>
        </section>
        <section className="gallery container">
          <h2 className="title">Wedding Gallery</h2>
          <Gallery>
            <img
              src="/images/maryland-wedding-planner-472w.webp"
              alt="Bride and Groom"
              loading="lazy"
              width="472"
              height="708"
            />
            <img
              src="/images/wedding-cake.webp"
              alt="Wedding cake picture"
              loading="lazy"
              width="472"
              height="708"
            />
            <img
              src="/images/wedding-decor.webp"
              alt="Wedding table decorations by Monica Browne Weddings"
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

 @media (min-width: 768px) {
    .content {
      text-align: left;
      max-width: 60rem;
      margin: 0 auto;
    }
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
    grid-gap: 10px;
    max-width: 100%;
    margin: 0 auto;
  }
`
