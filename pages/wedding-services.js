import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import { NextSeo } from 'next-seo'

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
        heroText="Wedding Services"
        subText="Services We Provide To Our Wonderful Couples"
        buttonText="Book a Call"
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
                alt="Happy bride and groom"
                loading="lazy"
              />
              <div className="service-info">
                <h3 className="title">Wedding Planning</h3>
                <p>
                  We're proud to offer couples complete wedding planning
                  services or day-of coordination. Whatever you need, we're
                  happy to create a customized package that fits your needs.
                  Give us a call to learn more about our full-service or ala
                  carte packages.
                </p>
                <Link href="/wedding-services/full-service-wedding-planning">
                  <a>Read more</a>
                </Link>
              </div>
            </div>
            <div className="services">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/tall-wedding-flowers-centerpiece_ql8yf6.webp"
                alt="Wedding decorations"
                loading="lazy"
              />
              <div className="service-info">
                <h3 className="title">Wedding Decoration Services</h3>
                <p>
                  The overall look of your wedding will last a lifetime for you
                  and your guests. With Monica Browne Weddings there as your
                  reception decorator, no stone will be unturned. We can
                  transform any venue into a beautiful place with gorgeous
                  floral designs...
                </p>
                <Link href="/wedding-decoration-services">
                  <a>Read more</a>
                </Link>
              </div>
            </div>
            <div className="services">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/wedding-flower-centerpiece-design_vq2ofj.webp"
                alt="Wedding floral design"
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
                <Link href="/wedding-services/wedding-flowers">
                  <a>Read more</a>
                </Link>
              </div>
            </div>
            <div className="services">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/tall-wedding-flowers-centerpiece_ql8yf6.webp"
                alt="Wedding decorations"
                loading="lazy"
              />
              <div className="service-info">
                <h3 className="title">Day of Wedding Coordination</h3>
                <p>
                  When you have everything else planned and you just need
                  someone to help you coordinate eveything on the day of your
                  wedding, call Monica browne Weddings. With Monica Browne
                  Weddings there as your day of wedding coordinator, you will
                  not have to worry about anything, because everything has
                  already been taken care of...
                </p>
                <Link href="/day-of-wedding-coordinator">
                  <a>Read more</a>
                </Link>
              </div>
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
