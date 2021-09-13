import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

const Services = () => {
  const [isOpen, setOpen] = useState(false)
  const SEO = {
    title: 'Wedding Services | Monica Browne Weddings',
    description:
      'Wedding Services from Monica Browne Weddings include Full Service Wedding Planning, Day-of Cordination, Wedding Decor, Flowers, and Floral Design.',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/wedding-services',
      site_name: 'Monica Browne Weddings',
      image: 'bride-with-flowers.jpg',
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
        backgroundImage="https://res.cloudinary.com/browne-company/image/upload/v1631495889/wedding-table-setting_opiqqu.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <div className="container">
          <h1 className="title">Our Services</h1>
          <div className="content">
            <div className="services-1">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/v1631495885/happy-bride-and-groom_bwyebx.webp"
                alt="Happy bride and groom"
              />
              <h3 className="title">Wedding Planning</h3>
              <p>
                We're proud to offer couples complete wedding planning services
                or day-of coordination. Whatever you need, we're happy to create
                a customized package that fits your needs. Give us a call to
                learn more about our full-service or ala carte packages.
              </p>
              <Link href="/wedding-services/wedding-planning">
                <a>Read more</a>
              </Link>
            </div>
            <div className="services-2">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/v1631495887/tall-wedding-flowers-centerpiece_ql8yf6.webp"
                alt="Wedding decorations"
              />
              <h3 className="title">Wedding Decorations</h3>
              <p>
                In addition to wedding planning, and custom floral designs, we
                are pleased to offer our couples wedding decor services.
              </p>
            </div>
            <div className="services-3">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/v1631495887/wedding-flower-centerpiece-design_vq2ofj.webp"
                alt="Wedding floral design"
              />
              <h3 className="title">Wedding Flowers</h3>
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

  .ipad-button {
    display: none;
  }

  .services-1,
  .services-2,
  .services-3 {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 100%;
      margin: 0 auto;
      gap: 20px;
    }

    .services-1,
    .services-2,
    .services-3 {
      margin-bottom: 0;
    }

    .services-1 {
      grid: 1 / 2;
    }

    .services-2 {
      grid: 2 / 3;
    }

    .services-3 {
      grid: 3 / 4;
    }

    .services-1 button,
    .services-2 button,
    .services-3 button {
      display: none;
    }

    .ipad-button {
      display: block;
    }
  }
`

export default Services
