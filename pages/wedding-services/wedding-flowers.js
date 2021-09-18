import { useState } from 'react'
import Link from 'next/link'
import ModalVideo from 'react-modal-video'
import styled from 'styled-components'
import HeroSection from '../../components/HeroSection'
import Button from '../../components/Button'
import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  const SEO = {
    title: 'Custom Wedding Flower Design MD DC | Monica Browne Weddings',
    description:
      'The most stunning wedding flowers design services for your dream wedding. 5 star customer reviews. Effortless and affordable. Book a 15min call today.',
    canonical:
      'https://monicabrowneweddings.com/wedding-services/wedding-flowers',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/wedding-services/wedding-flowers',
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
        heroText="Wedding Flowers Design"
        subText="The Best Custom Wedding Flowers Design Service In Maryland &amp; DC"
        buttonText="Book a Call"
        backgroundImage="../WebP-images/wedding-reception-decor.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1>Custom Wedding Flowers Design Service In Maryland & DC</h1>
            <p>
              We understand that planning a wedding is exciting but
              time-consuming. With so many aspects to plan, it can be a little
              overwhelming.
            </p>
            <p>
              Your local wedding planners and wedding florists at Monica Browne
              Weddings are here to help. We offer a stunning range of flowers
              for every aspect of your wedding. We will help you choose designs
              around what you like while offering new wedding flower ideas. If
              you need us to plan everything or just ask for some guidance, we
              are here for you.
            </p>

            <h2>Get Your Perfect Wedding Flowers</h2>
            <p>
              The team at Monica Browne Weddings specializes in designing,
              implementing, and executing stylish and elegant weddings. Whether
              the wedding is going to be held in a grand ballroom or in your own
              backyard, we work diligently to create an unforgettable event for
              yourself and your loved ones. We're proud to help couples in the
              Annapolis, Bethesda, Chevy Chase, Rockville, Silver Spring, and
              Washington DC areas.
            </p>

            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>

            <h2>Flower Recommendations</h2>
            <p>
              With years of experience in the wedding planning industry, our
              team has created countless custom floral designs. We help couples
              visualize the flower design possibilities for their wedding venue
              and wedding party. Carefully select each item, or leave it to us
              to do the work for you. Some examples of the custom designs you
              may like are:
            </p>

            <h3>Custom Floral Designs</h3>
            <p>
              With years of experience in the wedding planning industry, our
              team has created countless wedding flowers designs. We help
              couples visualize the flower design possibilities for their
              wedding venue and wedding party. Carefully select each item, or
              leave it to us to do the work for you. Some examples of the custom
              designs you may like are:
            </p>

            <FloralDesigns>
              <li>Bouquets</li>
              <li>Waist corsage</li>
              <li>Wrist corsage</li>
              <li>Headdresses and crowns</li>
              <li>
                Venue signage- welcome signboard, seating arrangements, bar
                signage, and more.
              </li>
              <li>Venue entranceway</li>
              <li>Aisle flower arrangements</li>
              <li>Chair decorations</li>
              <li>Overhead chandelier pieces</li>
            </FloralDesigns>

            <h3>Table Centerpieces</h3>
            <p>
              No wedding table is complete without a centerpiece. Whether petite
              and simplistic or grand and elaborate, floral centerpieces
              complement every table. Centerpieces are key for keeping the
              wedding color scheme consistent throughout the venue. Most
              importantly, the head table should have beautiful floral
              arrangements to encompass the happy couple and their wedding
              party.{' '}
            </p>

            <h3>Boutonnieres</h3>
            <p>
              Also known as ‘buttonholes,’ these are small flower arrangements
              worn by the male wedding party members on their jacket or lapel.
              We carefully handcraft each one to ensure consistency and quality.
              Of course, the groom’s is made extra special and will be in
              keeping with the style of the bride’s bouquet if desired.{' '}
            </p>

            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>

            <h3>The Wedding Arbor</h3>
            <p>
              The most important location in the wedding venue- where the happy
              couple will say “I do”. Or a beautifully creative backdrop for
              wedding photos. A wedding arbor or arch is a must-have at any
              wedding. Get creative with exciting shapes and designs for
              memorable wedding photos. We can create the perfect arbor for your
              style and theme. Choose from cascading floral arrangements, simple
              modern designs, exciting uplighting, personalized monogram
              lighting, flowing linen drapes- the choices are endless. Create a
              very special scene that will enhance your wedding photos.
            </p>

            <h3>Table design</h3>
            <p>
              Centerpieces are not the only choice when it comes to floral
              designs for wedding tables. Try something different, or add to
              your centerpiece designs. Floral arrangements for the head table
              can include cascading table edge arrangements, backdrops, overhead
              floral chandeliers, and chair decorations. Floral table runners,
              party favors, and place settings are very popular choices. Give
              guests that WOW factor and create a beautiful surrounding for your
              special day.
            </p>

            <h3>Linen selection</h3>
            <p>
              It may not seem that way, but like flowers, linens are an
              important part of weddings, from table cloths and chair covers to
              arch drapes, napkins, and table runners. Linens are functional in
              that they protect guests and furniture from spills and stains.
              However, they also play a big part in aesthetics and are used as
              decoration. They contribute to the color scheme and overall look
              and atmosphere of the wedding. Complementing linens with flower
              arrangements can be tricky, so we are always more than happy to
              help with this.
            </p>

            <h2>We Make Planning Your Wedding Flowers Simple</h2>
            <Simple>
              <li>
                <h4>Talk To Monica</h4>
                <p>
                  Book your first call with Monica and see how she can help you
                  pick out the flowers for your wedding.
                </p>
              </li>
              <li>
                <h4>Budget And Plan</h4>
                <p>
                  Work out your budget and decide which floral designs are right
                  for you.
                </p>
              </li>
              <li>
                <h4>Enjoy Your Big Day</h4>
                <p>
                  We will handle the designs, delivery, arrangement- everything-
                  for you. Just enjoy your wedding day and celebrate.
                </p>
              </li>
            </Simple>

            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>

            <h2>We Care About Your Big Day</h2>
            <p>
              Here in Maryland and DC, we consider our wonderful couples as
              family. We want our clients to have the most special day, so we do
              what we can to help. It always amazes us how kind and generous our
              clients are with their feedback and experiences. See our gallery
              of wedding photos from some of our happy couples{' '}
              <Link href="/wedding-gallery">
                <a>here</a>
              </Link>
              . Read testimonials from some of our valued clients{' '}
              <Link href="/testimonials">
                <a>here</a>
              </Link>
              . Also, see our{' '}
              <a
                href="https://www.google.com/search?client=firefox-b-1-d&q=monicabrowneweddings#lrd=0x89b7eb901b80745b:0x27f704e516f44ed0,1,,, "
                target="_blank"
              >
                5-star reviews
              </a>{' '}
              on Google here.
            </p>

            <h2>Wedding Flower Pricing</h2>
            <p>
              Weddings can be costly enough, but luckily the cost of wedding
              flowers doesn’t have to be sky-high. We work with you to help you
              achieve the designs you want within your budget. Simply book a
              call, chat with Monica, and we’ll create your quote.
            </p>

            <h2>Get Started With Your Perfect Wedding Flowers</h2>
            <p>
              Create lasting memories on the most special day with a beautiful
              scene of flowers at your wedding. Don’t delay in discovering the
              possibilities within your budget, and let Monica Browne Weddings
              do the hard work for you.
            </p>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
          </div>
        </section>
      </Main>
    </div>
  )
}

const Main = styled('div')`
  h1 {
    max-width: 50rem;
  }

  .content {
    @media (min-width: 768px) {
      max-width: 60rem;
      margin: 0 auto;
    }
  }
`

const FloralDesigns = styled('ul')`
  padding: 0 2rem;
`

const Simple = styled('ul')`
  margin-left: 2rem
  font-size: 1.2rem;
  counter-reset: li;

  li {
    padding-left: 3.5rem;
    margin-bottom: 2rem;
    position: relative;
    list-style-type: none;
    font-weight: 200;

    @media (min-width:768px) {
      padding-left: 5rem;
    }

    ::before {
      counter-increment: li;
      content: counter(li);
      color: #fff;
      font-size: 1rem;
      background: #000;
      line-height: 35px;
      width: 35px;
      height: 35px;
      border-radius: 100%;
      display: inline-block;
      text-align: center;
      left: 0px;
      position: absolute;
      top:  -0.3rem;
      border: 1px solid #000;
      font-weight: 200;

      @media (min-width: 768px) {

        top:  0.1rem;
        line-height: 50px;
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
      }
  }
`
