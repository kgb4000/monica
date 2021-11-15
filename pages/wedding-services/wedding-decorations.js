import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../../components/HeroSection'
import Button from '../../components/Button'
import { NextSeo } from 'next-seo'
import Simple from '../../components/Simple'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

export default function WeddingDecorations() {
  const SEO = {
    title: 'Wedding Decorators in Maryland & DC | Monica Brown Weddings',
    description:
      'If you are looking for the best wedding decorators in Maryland or DC, to create your dream wedding, contact Monica Brown Weddings.',
    canonical:
      'https://monicabrowneweddings.com/wedding-services/wedding-decorations',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/wedding-services/wedding-decorations',
      site_name: 'Monica Browne Weddings',
      images: [
        {
          url: 'https://monicabrowneweddings.com/public/images/wedding-reception-decor.webp',
          width: 4000,
          height: 2667,
          alt: 'Wedding decorations by Monica Browne Weddings.',
        },
      ],
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
        heroText="Wedding Decorations"
        subText="The Best Wedding Decorators and Design Service In Maryland &amp; DC"
        buttonText="Book a Call"
        backgroundImage="/images/wedding-reception-decor.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1>Top Wedding Decorators in Maryland and Washington DC</h1>
            <p>
              If you are looking for the best wedding decorators in Maryland or
              Washington DC., to make the environment look beautiful at your
              wedding, contact Monica Browne Weddings.
            </p>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
            <h2>Make Your Big Day a Beautiful Memory</h2>
            <p>
              How your event is designed matters, as the vision of the
              environment will last a lifetime for you and your guests. With
              Monica Browne Weddings there as your Reception decorator, no stone
              will be unturned. We can transform any venue into a beautiful
              place with gorgeous floral designs, designer linens, or whatever
              your heart desires.
            </p>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
            <h2>What We Do</h2>
            <p>
              Monica Browne Weddings is a wedding planning and decoration
              service in Maryland that serves couples in both Maryland and
              Washington, DC. Locations in Maryland we cover include:
            </p>
            <Locations>
              <li>Annapolis</li>
              <li>Bowie</li>
              <li>Bethesda</li>
              <li>Chevy Chase</li>
              <li>Crofton</li>
              <li>Davidsonville</li>
              <li>Rockville</li>
              <li>Silver Spring</li>
              <li>Potomac</li>
            </Locations>
            <p>
              We offer partial wedding planning services and full services along
              with customized flowers design services, wedding decoration
              services, and more. We know how hectic it can be when you’re busy
              with everyday life activities while trying to plan a wedding at
              the same time. Just contact us to book a call and we will help.
              Even if you only need guidance, reach out to us. We help take the
              struggle out of planning your wedding decorations so you could
              spend your time on other important things.
            </p>
            <h2>Main Benefits of Hiring A Wedding Decorator</h2>
            <p>
              How many people actually have the time, creativity, and motivation
              to decorate their own wedding? It’s not as simple as some may
              think, but most of all, it’s not the same as decorating for a
              birthday party. Everything has to be perfect and set up just
              right. The flowers have to be arranged a certain way, the colors
              must coordinate, and so much more. For someone who has never done
              this type of work before, it can be extremely frustrating and
              exhausting. It is so much easier just to hire a professional
              wedding decorator to handle all the decorative details for you.
              Here are the main benefits of hiring a wedding decorator:
            </p>
            <ol>
              <li>
                <h3>Hand The Decorations Over To A Professional</h3>
                <p>
                  When you have your hands full planning, inviting people,
                  deciding what food to prepare for your guests, choosing the
                  right venue, selecting the perfect entertainment, contacting
                  photographers, and more, while trying to keep up with your job
                  and your daily routine, it’s not easy to also create the
                  beautiful display you want for your big day. Hiring a
                  professional wedding decorator can take a huge chunk off your
                  list of things to do and give you some relief.
                </p>
              </li>
              <li>
                <h3>Help Decide How Your Wedding Should Look</h3>
                <p>
                  Some people haven’t even thought of how they want their
                  wedding scenery to look. Choosing a theme, colors, styles,
                  flowers, and more can be daunting for some, but an experienced
                  wedding decoration organizer can help. A decorator can give
                  you wedding reception decoration ideas including wedding decor
                  for church, wedding decor for tables, wedding decor with
                  flowers, lighting decor, and more, by showing you pictures of
                  different displays allowing you to choose the one you love.
                </p>
              </li>
              <li>
                <h3>Make Your Wedding Look Just as You Imagine It</h3>
                <p>
                  Most people already have an idea of what their wedding should
                  look like. Although you can envision a beautiful display in
                  your head, you may not know how to achieve the look. However,
                  a professional decorator can help you design the settings
                  exactly how you imagined it, so your wedding will have a
                  beautiful all-around display.
                </p>
              </li>
              <li>
                <h3>Obtaining The Decorations</h3>
                <p>
                  Once you know how you want to decorate for your wedding, there
                  is also the question of getting all the decorations you need
                  for an affordable price. A full-service wedding decorations
                  agency can help provide everything needed for a beautiful
                  display for one price.
                </p>
              </li>

              <li>
                <h3>Setting Up</h3>
                <p>
                  Even if you do decide to decorate yourself, there are certain
                  things that need to be added on the day of your wedding that
                  may require a team, including setting up tables with table
                  decor. Being the bride or groom, you probably won’t have the
                  time to go around setting up decorations. So hiring a
                  decorator for your wedding seems like your best option.
                </p>
              </li>
            </ol>
            <h2>How To Get Started</h2>
            <Simple>
              <li>
                <h4>Contact Us</h4>
                <p>
                  Start by contacting us and speak to Monica about your wedding
                  plans.
                </p>
              </li>
              <li>
                <h4>Create Your Budget</h4>
                <p>Work out your wedding budget and plan the details</p>
              </li>
              <li>
                <h4>Enjoy Your Wedding</h4>
                <p>Enjoy your beautiful day and congratulations!  </p>
              </li>
            </Simple>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
            <h2>What Our Clients Have To Say About Our Services</h2>
            <p>
              The clients we were fortunate enough to work with loved what we
              did to the place and you will too. You can view some{' '}
              <Link href="/testimonials">
                <a>testimonials</a>
              </Link>{' '}
              right on our website.
            </p>
            <h2>Pricing For Wedding Decorations</h2>
            <p>
              There are several factors that have to do with determining how
              much a wedding ceremony decorator will charge you for your
              professional wedding decorations.{' '}
              <ol>
                <li>
                  <h3>Location</h3>
                  Your location is one of the things that will be considered.
                  For example, a wedding in a high-income area will cost more
                  than in a low-income area and the cost also depends on how far
                  your decorator will have to travel.
                </li>
                <li>
                  <h3>Number of Guests</h3>
                  The number of guests attending and the size of the venue will
                  also be factored in. Another thing to be included in the price
                  is how much work it will take to pull your display off and the
                  items required as well.
                </li>
                <li>
                  <h3>Complexity of Decorations</h3>
                  The complexity of the decorations you want, how elaborate they
                  may be, and how hard it would be to find them.
                </li>
              </ol>
            </p>
            <h2>Let Us Help Decorate For Your Special Day</h2>
            <p>
              Planning a wedding can get quite expensive, considering all the
              things you will need. However, it is well worth the cost of
              everything to look great and run smoothly. But you should try to
              keep costs down as much as possible. Hiring Monica Brown Weddings
              is a wise choice for your decorating services as we have
              affordable prices and you get the most value for your money by
              choosing us for all your wedding decoration needs. Wedding
              decorations may not be the most important thing on your wedding
              plans to-do list, but it is still an important part of your
              wedding. The way you decorate for your wedding is what those who
              attend will remember for the rest of their lives and so will you.
              Let us help make your big day a beautiful one.
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

  ul,
  ol {
    margin: 2rem 0;
    margin-left: 2rem;
  }
`

const Locations = styled('ul')`
  padding: 0 2rem;
`
