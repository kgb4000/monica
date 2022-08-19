import dynamic from 'next/dynamic'
import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../../components/HeroSection'
import Button from '../../components/Button'
import Simple from '../../components/Simple'
import { NextSeo, FAQPageJsonLd } from 'next-seo'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

export default function Potomac() {
  const SEO = {
    title: 'Micro Wedding Packages | Maryland | Monica Browne Weddings',
    description:
      'Want a unique wedding experience? We specialize in micro wedding packages for Maryland couples looking for a stress-free intimate wedding. Call today!',
    canonical:
      'https://monicabrowneweddings.com/wedding-services/micro-wedding-packages-maryland',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/wedding-services/micro-wedding-packages-maryland',
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
        heroText="Micro Wedding Packages for Maryland Couples"
        subText="We Help Couples Create Small Intimate Weddings and Events"
        backgroundImage="/images/wedding-planner-vs-coordinator.webp"
        backgroundHeight="100vh"
        buttonText="Call (240) 665-3350"
        buttonLink="tel:+2406653350"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1 className="title">Micro Wedding Packages | Maryland</h1>
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
              So if you want a small, intimate wedding without sacrificing
              quality, then a micro wedding may be just what you're looking for.
            </p>
            <div className="center">
              <a href="tel:+2406653350">
                <Button>Call (240) 665-3350</Button>
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
                alt="Micro wedding packages from Monica Browne Weddings."
                loading="lazy"
                width="472"
                height="708"
              />
              <div className="micro-wedings-about">
                <p>
                  Micro weddings are smaller events that typically have 50
                  guests or less.
                </p>
                <p>
                  Unlike a big wedding, these events often focus on quality over
                  quantity, and couples usually save money by having a smaller
                  guest list, less food, and a smaller vendor team.
                </p>
                <p>
                  Micro weddings can be held at various venues, from traditional
                  venues to more unique locations like barns or wineries.
                </p>
                <p>
                  Plus, micro packages typically include all the amenities of a
                  traditional wedding, from the ceremony space to the reception
                  hall and even your overnight accommodations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="center">
          <a href={calendly} target="_blank">
            <Button>Schedule a call!</Button>
          </a>
        </div>
        <section className="container">
          <div className="content">
            <h2 className="title">
              The Advantages of Having a Micro Wedding in Maryland
            </h2>
            <p>
              In recent years, more and more couples in Maryland have opted for
              small weddings over large, traditional events. And several
              benefits come along with having a smaller intimate event.
            </p>
            <p>Here are just a few of the many benefits:</p>
            <h3>You'll Save Money</h3>
            <p>
              One of the biggest benefits of micro weddings is that you'll save
              money.
            </p>
            <p>
              With the{' '}
              <Link href="/blog/how-much-does-a-100-person-wedding-cost">
                <a>cost of a 100-person wedding</a>
              </Link>{' '}
              in the Washington, DC area at around $28,000 - $37,000, you'll
              spend less on everything from your venue to your catering when you
              have a smaller guest list. Plus, you can often get discounts on
              vendor services when you have a smaller ceremony and reception.
            </p>
            <h3>You'll Save Time</h3>
            <p>
              Planning a large traditional wedding can be extremely
              time-consuming. But with a smaller event, you'll have more time to
              enjoy the planning process and focus on the essential details.
              Plus, you won't have to spend as much time coordinating with your
              vendors or dealing with logistics.
            </p>
            <h3>You Can be More Creative</h3>
            <p>
              When you have a nano event, you have more freedom to be creative
              with your decorations and details. Plus, you can get discounts on
              your vendor services when you have a smaller event.
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
              <a href="tel:+2406653350">
                <Button>Call (240) 665-3350</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title">Intimate Wedding Venues in Maryland</h2>
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
                    href="https://www.google.com/search?q=Prisms+Annapolis&client=firefox-b-1-d&ei=a53_Yr7xLP-viLMPxJ2ayAg&ved=0ahUKEwj-0rT-jdP5AhX_F2IAHcSOBokQ4dUDCA0&uact=5&oq=Prisms+Annapolis&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEB4QFjIGCAAQHhAWMgIIJjoHCAAQRxCwAzoKCAAQRxCwAxDJAzoHCAAQsAMQQzoSCC4QxwEQrwEQyAMQsAMQQxgBSgQIQRgASgQIRhgBUKMKWKMKYIkRaANwAXgAgAE1iAE1kgEBMZgBAKABAqABAcgBFMABAdoBBggBEAEYCA&sclient=gws-wiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Prisms Annapolis
                  </a>
                </p>
                <address>49 Spa Rd, Annapolis, MD 21401</address>
                <p>
                  <small>(410) 295-0104</small>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://www.google.com/search?q=Annapolis+Maritime+Museum&client=firefox-b-1-d&ei=Tp3_YoSWOtzm5NoP-M2A2Ag&ved=0ahUKEwiE9dfwjdP5AhVcM1kFHfgmAIsQ4dUDCA0&uact=5&oq=Annapolis+Maritime+Museum&gs_lcp=Cgdnd3Mtd2l6EAMyEQguEIAEELEDEIMBEMcBEK8BMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyCwguEIAEEMcBEK8BMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgoIABBHELADEMkDOg0ILhDHARCvARCwAxBDSgQIQRgASgQIRhgAUIEMWIEMYOATaANwAXgAgAFFiAFFkgEBMZgBAKABAqABAcgBCcABAQ&sclient=gws-wiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Annapolis Maritime Museum
                  </a>
                </p>
                <address> 723 Second St, Annapolis, MD 21403</address>
                <p>
                  <small>(410) 271-7271</small>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://www.google.com/search?q=The+Country+Club+at+Woodmore&client=firefox-b-1-d&ei=NJ3_Yt6FA7msiLMPqoSe4Aw&ved=0ahUKEwje7-3jjdP5AhU5FmIAHSqCB8wQ4dUDCA0&uact=5&oq=The+Country+Club+at+Woodmore&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjICCCY6BwgAEEcQsAM6EgguEMcBEK8BEMgDELADEEMYAToSCC4QxwEQ0QMQyAMQsAMQQxgBSgQIQRgASgQIRhgAUOYKWOYKYOMTaANwAXgAgAFliAFlkgEDMC4xmAEAoAECoAEByAEMwAEB2gEECAEYCA&sclient=gws-wiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Country Club at Woodmore
                  </a>
                </p>
                <address>
                  12320 Pleasant Prospect, Mitchellville, MD 20721
                </address>
                <p>
                  <small>(301) 249-6100</small>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://www.google.com/search?q=Historic+Oakland&client=firefox-b-1-d&ei=F53_YryoOsKq5NoPq9OQoA8&ved=0ahUKEwj8j7vWjdP5AhVCFVkFHaspBPQQ4dUDCA0&uact=5&oq=Historic+Oakland&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEOgcIABBHELADOhIILhDHARCvARDIAxCwAxBDGAFKBAhBGABKBAhGGABQ7BJY7BJg8iFoBHABeACAAU6IAU6SAQExmAEAoAECoAEByAELwAEB2gEECAEYCA&sclient=gws-wiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Historic Oakland
                  </a>
                </p>
                <address>5430 Vantage Point Rd, Columbia, MD 21044</address>
                <p>
                  <small>(410) 730-4801</small>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://www.google.com/search?q=The+Blackwall+Barn+and+Lodge&client=firefox-b-1-d&ei=_Zz_YsK2Dtew5NoPxKeKsA4&ved=0ahUKEwiCqdzJjdP5AhVXGFkFHcSTAuYQ4dUDCA0&uact=5&oq=The+Blackwall+Barn+and+Lodge&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyCQgAEB4QyQMQFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWOgoIABBHELADEMkDOgcIABBHELADSgQIQRgASgQIRhgAUOEJWOEJYJYSaANwAXgAgAFDiAFDkgEBMZgBAKABAqABAcgBCMABAQ&sclient=gws-wiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Blackwall Barn and Lodge
                  </a>
                </p>
                <address>329 Gambrills Rd, Gambrills, MD 21054</address>
                <p>
                  <small>(410) 317-2276</small>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://www.google.com/search?q=William+Paca+House+and+Garden&client=firefox-b-1-d&ei=45z_YoCsE4uh5NoPqoymqA0&ved=0ahUKEwjAqa69jdP5AhWLEFkFHSqGCdUQ4dUDCA0&uact=5&oq=William+Paca+House+and+Garden&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMgIIJjIFCAAQhgM6BwgAEEcQsAM6CggAEEcQsAMQyQM6BwgAELADEEM6EgguEMcBEK8BEMgDELADEEMYAUoECEEYAEoECEYYAVCDDFiDDGDpFmgDcAF4AIABU4gBU5IBATGYAQCgAQKgAQHIARTAAQHaAQYIARABGAg&sclient=gws-wiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    William Paca House and Garden
                  </a>
                </p>
                <address>186 Prince George St, Annapolis, MD 21401</address>
                <p>
                  <small>(410) 990-4543</small>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://www.google.com/search?q=Chesapeake+Bay+Maritime+Museum&client=firefox-b-1-d&ei=OZz_YvbzLcPn5NoP-rKuyA4&ved=0ahUKEwi29MDsjNP5AhXDM1kFHXqZC-kQ4dUDCA0&uact=5&oq=Chesapeake+Bay+Maritime+Museum&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMggIABCABBDJAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEOgcIABBHELADOhIILhDHARCvARDIAxCwAxBDGAFKBAhBGABKBAhGGABQyglYyglggRJoA3ABeACAAUyIAUySAQExmAEAoAECoAEByAELwAEB2gEECAEYCA&sclient=gws-wiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chesapeake Bay Maritime Museum
                  </a>
                </p>
                <address>213 N Talbot St, St Michaels, MD 21663</address>
                <p>
                  <small>(410) 745-2916</small>
                </p>
              </li>
            </ul>
            <div className="center">
              <a href={calendly} target="_blank">
                <Button>Schedule a call!</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title">Next Steps</h2>
            <p>
              Now that you know the benefits, it's time to start planning your
              own. Here are a few tips to help you get started:
            </p>
            <h3>#1. Set a Budget</h3>
            <p>
              The first thing you'll need to do when planning is to set a
              budget. You'll save money on everything from your venue to
              catering when you have a smaller guest list. Plus, you can often
              get discounts on your wedding vendor services when you have a
              smaller wedding.
            </p>
            <h3>#2. Choose Your Wedding Venue</h3>
            <p>
              One of the best things about having a small wedding in Maryland is
              that you can be creative with your venue. You can choose to have
              your custom ceremony and reception at the exact location or opt
              for a unique setting like a park or an outdoor garden venue.
            </p>
            <h3>#3. Choose Your Guest List</h3>
            <p>
              Another good thing about having a micro wedding is focusing on
              quality over quantity. When you have a smaller guest list, you can
              spend more time and money on ensuring each guest has a wonderful
              time. Plus, you'll be able to create a more custom, private
              setting that will make your wedding day even more special.
            </p>
            <h3>#4. Start Planning</h3>
            <p>
              Now that you know what a micro wedding is and how to plan one,
              it's time to start planning your dream day. With some help from
              Monica Browne Weddings, you can have a small, unique wedding that
              you'll love.
            </p>
          </div>
        </section>
        <div className="center">
          <a href="tel:+2406653350">
            <Button>Call (240) 665-3350</Button>
          </a>
        </div>
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
                    Work out your costs and start planning your wedding details.
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
            <h2 className="title">
              Wedding Planning for a Micro Wedding: What Do I Need?
            </h2>
            <Simple>
              <li>
                <Link href="/">
                  <a>Wedding planner</a>
                </Link>
              </li>
              <li>
                <p>Your Closest family and friends</p>
              </li>
              <li>
                <p>Small wedding venue</p>
              </li>
              <li>
                <Link href="/wedding-services/wedding-decor-services">
                  <a>Wedding Decor</a>
                </Link>
              </li>
              <li>
                <p>Small wedding ceremony</p>
              </li>
              <li>
                <p>Small wedding reception</p>
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
            <a href="tel:+2406653350">
              <Button>Call (240) 665-3350</Button>
            </a>
          </div>
          <section className="container">
            <div className="content">
              <FAQPageJsonLd
                mainEntity={[
                  {
                    questionName: 'How Long Should a Micro Wedding Be?',
                    acceptedAnswerText:
                      'Micro weddings are just smaller than traditional weddings with a smaller guest count, smaller ceremony, and smaller reception. Reception length will depend on how long you want to celebrate!',
                  },
                  {
                    questionName:
                      'How Much Should You Spend on a Micro Wedding?',
                    acceptedAnswerText:
                      'There is no set amount that you must spend on a micro wedding. However, a micro wedding is typically more low-key than a traditional wedding and often costs less. Couples may want to save wedding.',
                  },
                  {
                    questionName: 'How Can I Save Money on a Micro Wedding?',
                    acceptedAnswerText: `Some ways to save money on a micro wedding include: 
                      Reducing the guest coun
                      Choosing a less expensive wedding venue
                      Asking friends and family to help with decor, food, and music
                      Eliminating or reducing the wedding party
                      Choosing simple decor and flowers
                      Selecting a shorter menu
                      Saving on the wedding dress and suit
                      Opting for digital invitations
                      Doing your makeup and hair
                      Choosing a less expensive photographer`,
                  },
                ]}
              />
              <h2>FAQs</h2>
              <h3>#1. How Long Should a Micro Wedding Be?</h3>
              <p>
                Micro weddings are just smaller than traditional weddings with a
                smaller guest count, smaller ceremony, and smaller reception.
                Reception length will depend on how long you want to celebrate!
              </p>
              <h3>#2. How Much Should You Spend on a Micro Wedding?</h3>
              <p>
                There is no set amount that you must spend on a micro wedding.
                However, a micro wedding is typically more low-key than a
                traditional wedding and often costs less. Couples may want to
                save approximately <b>$5,000 to $30,000</b> for their micro
                wedding.
              </p>
              <h3>#3. How Can I Save Money on a Micro Wedding?</h3>
              <p>Some ways to save money on a micro wedding include:</p>
              <ul className="wedding-saving-acts">
                <li>Reducing the guest count</li>
                <li>Choosing a less expensive wedding venue</li>
                <li>
                  Asking friends and family to help with decor, food, and music
                </li>
                <li>Eliminating or reducing the wedding party</li>
                <li>Choosing simple decor and flowers</li>
                <li>Selecting a shorter menu</li>
                <li>Saving on the wedding dress and suit</li>
                <li>Opting for digital invitations</li>
                <li>Doing your makeup and hair</li>
                <li>Choosing a less expensive photographer</li>
              </ul>
            </div>
          </section>
          <div className="center">
            <a href={calendly}>
              <Button>Book a call today</Button>
            </a>
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

  .wedding-saving-acts {
    margin-left: 3rem;
    margin-top: 1rem;
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
