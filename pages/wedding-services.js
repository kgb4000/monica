import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import { NextSeo } from 'next-seo'
import Button from '../components/Button'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

const Services = () => {
  const SEO = {
    title: 'Wedding Services | Monica Browne Weddings',
    description:
      'Wedding Services from Monica Browne Weddings include Full Service Wedding Planning, Day-of Cordination, Wedding Decor, Flowers, and Floral Design.',
    canonical: 'https://monicabrowneweddings.com/wedding-services',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/wedding-services',
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
    <>
      <NextSeo {...SEO} />
      <HeroSection
        heroText="Wedding Services"
        subText="Services We Provide To Our Wonderful Couples"
        buttonText="Book a Call today!"
        backgroundImage="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495889/wedding-table-setting_opiqqu.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <div className="container">
          <h1 className="title">Our Wedding Services</h1>
          <div className="content">
            <div className="services">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495885/happy-bride-and-groom_bwyebx.webp"
                alt="Full service wedding planning from Monica Browne Weddings."
                loading="lazy"
              />
              <div className="service-info">
                <h3 className="title">Full-Service Wedding Planning</h3>
                <p>
                  We're proud to offer couples full-service wedding planning.
                  Whatever you need, we're happy to create a customized package
                  that fits your needs. Give us a call to learn more about our
                  full-service or or partial planning service.
                </p>
                <Link
                  href="/wedding-services/full-service-wedding-planner"
                  passHref
                >
                  <a>
                    <p>Read more</p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="services">
              {/* <img
                src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/tall-wedding-flowers-centerpiece_ql8yf6.webp"
                alt="Wedding decorations"
                loading="lazy"
              /> */}
              <img
                src="/images/happy-bride.webp"
                loading="lazy"
                alt="Day of wedding planning services from Monica Browne Weddings."
              />
              <div className="service-info">
                <h3 className="title">Day of Wedding Coordination</h3>
                <p>
                  When you have everything else planned and you just need
                  someone to help you coordinate eveything on the day of your
                  wedding, call Monica browne Weddings. With Monica Browne
                  Weddings there as your day of wedding coordinator, you will
                  not...
                </p>
                <Link href="/day-of-wedding-coordinator" passHref>
                  <a>
                    <p>Read more</p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="services">
              <img
                src="/images/maryland-wedding-planner-472w.webp"
                alt="Micro wedding packages."
                loading="lazy"
              />
              <div className="service-info">
                <h3 className="title">Micro Weddings</h3>
                <p>
                  Are you looking to have a small, intimate ceremony but don't
                  want to sacrifice quality? If so, a micro wedding package may
                  be just what you're looking for. A micro wedding package
                  offers all the amenities of a traditional wedding but on a
                  much smaller scale...
                </p>
                <Link
                  href="/wedding-services/micro-wedding-packages-maryland"
                  passHref
                >
                  <a>
                    <p>Read more</p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="services">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/tall-wedding-flowers-centerpiece_ql8yf6.webp"
                alt="Wedding decoration services from Monica Browne Weddings."
                loading="lazy"
              />
              <div className="service-info">
                <h3 className="title">Wedding Décor Services</h3>
                <p>
                  The overall look of your wedding will last a lifetime for you
                  and your guests. With Monica Browne Weddings there as your
                  reception decorator, no stone will be unturned. We can
                  transform any venue into a beautiful place with gorgeous
                  floral designs...
                </p>
                <Link href="/wedding-services/wedding-decor-services" passHref>
                  <a>
                    <p>Read more</p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="services">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/wedding-flower-centerpiece-design_vq2ofj.webp"
                alt="Wedding floral design services from Monica Browne Weddings."
                loading="lazy"
              />
              <div className="service-info">
                <h3 className="title">Floral & Event Design</h3>
                <p>
                  Your local wedding planners and wedding florists at Monica
                  Browne Weddings are here to help. We offer a stunning range of
                  flowers for every aspect of your wedding. We will help you
                  choose designs around what you like while offering new wedding
                  flower ideas. If you need us to plan...
                </p>
                <Link href="/wedding-services/wedding-flowers" passHref>
                  <a>
                    <p>Read more</p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="services">
              <img
                src="/images/birthday-party-event-planner.jpg"
                alt="Birhtday party event planner - Monica Browne."
                loading="lazy"
              />
              <div className="service-info">
                <h3 className="title">Birthday Party Planning</h3>
                <p>
                  A birthday party is held to recognize the lives of the people
                  you care about and ensure that you have the best party
                  possible. Celebrate yourself, your mother, father, spouse,
                  child, or best friend ...
                </p>
                <Link href="/birthday-party-event-planner" passHref>
                  <a>
                    <p>Read more</p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="center">
              <a href="tel:+2402660588">
                <Button>Call (240) 665-3350</Button>
              </a>
            </div>
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

  .services,
  .services,
  .services {
    margin-bottom: 2rem;
  }

  @media (min-width: 600px) {
    ${
      '' /* .content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 100%;
      margin: 0 auto;
      gap: 20px;
    } */
    }

    .services {
      max-width: 60rem;
      margin: 0 auto;
      display: flex;
      margin-bottom: 2rem;
      justify-content: center;
      align-items: center;

      img {
        max-width: 45%;
        margin-right: 5%;
      }

      .service-info {
        max-width: 45%;

        h3.title {
          text-align: left;
          margin-top: 0;
        }
      }
    }

    .ipad-button {
      display: block;
    }
  }
`

export default Services
