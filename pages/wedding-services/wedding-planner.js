import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../../components/HeroSection'
import Button from '../../components/Button'
import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

function WeddingPlanning() {
  const SEO = {
    title: 'Wedding Planner in Bowie and DC | Monica Browne',
    description:
      'Monica Browne Weddings is a full-service wedding planner in the DMV. We take the stress out of wedding planning and make it enjoyable. Book a call with us!',
    canonical:
      'https://monicabrowneweddings.com/wedding-services/full-service-wedding-planner',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/wedding-services/full-service-wedding-planner',
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
        heroText="Wedding Planner for Busy Couples in Bowie and Washington, DC"
        subText="Full-service wedding planning for couples in Bowie & DC"
        backgroundImage="/images/wedding-reception-decor.webp"
        backgroundHeight="100vh"
        buttonText="Call (240) 665-3350"
        buttonLink="tel:+2406653350"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1>Full-Service Wedding Planner</h1>
            <p>
              Monica Browne Weddings offers wedding planning services for
              couples in Maryland and DC. Planning a wedding can be
              time-consuming, especially when you already have a busy life. Let
              us take some of the stress off of you so you can focus on enjoying
              your special day. Whether you just need help and guidance or a
              wedding planner to take over the entirety of planning, we're here
              to ensure your wedding is an enjoyable and memorable experience.
            </p>
            <h2>We'll Make Your Wedding a Day You'll Never Forget</h2>
            <p>
              The team at Monica Browne Weddings specializes in designing,
              implementing, and executing stylish and elegant weddings. Whether
              the wedding is going to be held in a grand ballroom or in your own
              backyard, we work diligently to create an unforgettable event for
              yourself and your loved ones. We're proud to help couples in the
              Annapolis, Bethesda, Chevy Chase, Rockville, Silver Spring, and
              other Washington DC areas.
            </p>
            <div className="center">
              <a href="tel:+2406653350">
                <Button>Call (240) 665-3350</Button>
              </a>
            </div>
            <section>
              <div className="service-content get-started">
                <h2>How To Get Started</h2>
                <Simple>
                  <li>
                    <h4>Talk To Monica</h4>
                    <p>
                      Book a call with us to discuss how we can help you plan
                      your wedding.
                    </p>
                  </li>
                  <li>
                    <h4>Create Your Budget</h4>
                    <p>
                      Determine your budget and start finalizing your wedding
                      details.{' '}
                    </p>
                  </li>
                  <li>
                    <h4>Enjoy Your Wedding Day</h4>
                    <p>Enjoy your wedding day and cherish the moment!</p>
                  </li>
                </Simple>

                <div className="center">
                  <a href={calendly}>
                    <Button>Book a call with Monica!</Button>
                  </a>
                </div>
              </div>
            </section>
            <h2>Before Your Wedding Day</h2>
            <p>
              We're proud to offer couples complete wedding planning services in
              addition to day-of coordination services in{' '}
              <Link href="/day-of-wedding-coordinator-bowie-md" passHref>
                <a>Bowie</a>
              </Link>{' '}
              and{' '}
              <Link href="/day-of-wedding-coordinator" passHref>
                <a>Washington, DC.</a>
              </Link>{' '}
              Whatever you need, we're happy to create a customized package that
              fits your needs. Give us a call to learn more about our
              full-service or ala carte packages.
            </p>

            <h3>Budget Development and Management</h3>
            <p>
              Wedding associated costs can quickly get out of hand unless you
              stay on top of what you're spending. We'll work with you to
              develop a wedding budget that you're comfortable with. We'll stay
              on top of all current and projected costs to ensure we don't go
              over budget. As part of our budget management services, we'll send
              you progress reports to let you know where we're at with your
              current budget, so there are no surprises.
            </p>

            <h3>Theme and Decor Development and Design</h3>
            <p>
              Determining the{' '}
              <Link href="/wedding-services/wedding-decor-services" passHref>
                <a>theme and decor</a>
              </Link>{' '}
              of your wedding is one of the most fun and exciting parts of
              wedding planning. We'll discuss all of the ideas and visions you
              have for your wedding, melding them together into a truly unique
              theme that represents you and your partner. We also work on
              ceremony style development. Different cultures and religions have
              various traditions when it comes to wedding ceremonies. We'll
              ensure that your traditions are reflected in your ceremony.
            </p>

            <h3>Ceremony and Reception Site Selection Assitance</h3>
            <p>
              Finding the best location for your ceremony and reception is a key
              part of wedding planning. You may want your wedding at a hotel and
              have both facets of your wedding at the same location. Or, you may
              request the ceremony to be at a church and the reception at
              another location. No matter what your needs are, we'll work with
              you to select the best locations possible within your budget.
            </p>
            <div className="center">
              <a href="tel:+2406653350">
                <Button>Call (240) 665-3350</Button>
              </a>
            </div>
            <h3>Wedding Invitation and Accessory Selection Assistance</h3>
            <p>
              We'll work with you to create your wedding guest list and send out
              your invitations. We'll manage the guestlist and responses. From
              the response list, we'll create a seating arrangement, going over
              it with you in detail to ensure it's to your specifications.
            </p>

            <h3>Vendor Management</h3>
            <p>
              Wedding vendors play a huge part in your big day. From florists to
              photographers to caterers, we'll provide you with vetted vendor
              referrals. We'll handle the scheduling of appointments and
              meetings with vendors and can attend them on your behalf. We'll
              review all wedding vendor contracts and service agreements and
              coordinate with them on the day of.
            </p>

            <h3>Gift Registry Assitance</h3>
            <p>
              Our team will help you register at a variety of locations and
              websites, uploading your lists into a central location for the
              convenience of your guest list.
            </p>

            <h3>Monthly Progress Updates</h3>
            <p>
              Throughout the process of planning your wedding, we'll provide you
              with a detailed wedding to-do list/checklist during the planning
              stages. You'll also have unlimited phone calls and emails during
              business hours.
            </p>

            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>

            <h3>Guest Lodging Arrangements</h3>
            <p>
              If your wedding is being held out of town, we'll work with nearby
              hotels to reserve blocks of rooms for your guests.
            </p>

            <h3>Etiquette Advice</h3>
            <p>
              We'll go over everything you need to know about attire, hosting,
              guests, behavior, plus all the details you need to know about
              post-wedding etiquette, including thank you notes.
            </p>

            <h3>Rehearsal Coordination and Supervision</h3>
            <p>
              We also offer rehearsal dinner planning and coordination. The
              rehearsal dinner is an important component of your wedding
              weekend. Whether it's hosted at a nearby restaurant or being
              catered at the ceremony location, we'll ensure everything goes
              smoothly.
            </p>

            <h3>Itinerary and Day-of Timeline</h3>
            <p>
              Monica Browne Weddings will provide all wedding party participants
              and vendors an itinerary and timeline for the day of your wedding.
              Everyone will know what time they're expected at each location, so
              there's no confusion.
            </p>

            <h3>On Your Wedding Day</h3>
            <p>
              Your big day is here! We'll give the bride and groom a wedding
              morning wake-up call at a pre-determined agreed-upon time. We'll
              also coordinate wedding night hotel arrangements for Bride and
              Groom. We'll check into the hotel room for the bride and groom.
              We'll also decorate the room, adding in any extra details that'll
              make your night even more special.
            </p>
            <p>
              Our wedding planning services include one lead{' '}
              <Link href="/day-of-wedding-coordinator" passHref>
                <a>coordinator</a>
              </Link>{' '}
              and two event assistants. You can feel confident that every aspect
              of your wedding will be handled flawlessly.{' '}
            </p>
            <div className="center">
              <a href="tel:+2406653350">
                <Button>Call (240) 665-3350</Button>
              </a>
            </div>
            <h3>Why Choose Monica Browne Weddings?</h3>
            <p>
              You don't want to be so stressed and busy that you don't have the
              time to enjoy your wedding. That's where we come in.
            </p>
            <p>
              Monica and her wedding planning team will take over every aspect
              of your wedding, ensuring you have the wedding of your dreams.
              Whatever your needs are, we can help take some of the pressure off
              of you so you can focus on enjoying the day.
            </p>
            <p>
              Our goal is to make your wedding as beautiful and stress-free as
              possible. Give us a call to discuss how we can help you as your
              full service wedding planner.
            </p>

            <h3>We Care About Our Couples</h3>
            <p>
              At Monica Browne Weddings, we consider our wonderful couples as
              family. We want our couples to have the most special day, so we
              will make every effort to make it happen. It always amazes us how
              kind and generous our clients are with their feedback and
              experiences.
            </p>
            <p>
              See our gallery of wedding photos from some of our happy couples{' '}
              <Link href="/wedding-gallery" passHref>
                <a>here</a>
              </Link>
              .
            </p>
            <p>
              Read testimonials from some of our valued clients{' '}
              <Link href="/testimonials" passHref>
                <a>here</a>
              </Link>
              .
            </p>
            <p>
              Also, see our{' '}
              <a
                href="https://www.google.com/search?client=firefox-b-1-d&q=monicabrowneweddings#lrd=0x89b7eb901b80745b:0x27f704e516f44ed0,1,,,"
                target="_blank"
              >
                5-star reviews
              </a>{' '}
              on Google here.
            </p>
            <div className="center">
              <a href="tel:+2406653350">
                <Button>Call (240) 665-3350</Button>
              </a>
            </div>
            <h2>FAQ</h2>
            <h3>Is it worth it to hire a full-service wedding planner?</h3>
            <p>
              Whether or not you should hire a full-service wedding planner
              depends on your specific needs. If you have a large, complicated
              wedding, it may be worth it to hire a full-service planner.
              However, if you have a smaller, simpler wedding, you may not need
              all the services a full-service planner offers. In that case, you
              can save money by using a wedding planner who offers à la carte
              services or by using a{' '}
              <Link href="/day-of-wedding-coordinator-bowie-md" passHref>
                <a>day of coordinator</a>
              </Link>
              .
            </p>
            <h3>What can I expect from a full-service wedding planner?</h3>
            <p>
              When you hire a full-service wedding planner, you can expect them
              to be involved in every aspect of your wedding planning. They will
              help you choose your venue, select your vendors, and create a
              timeline for your big day. On your wedding day, they will ensure
              everything runs smoothly, so you can relax and enjoy yourself.
            </p>
            <h3>What is the average cost of a full-service wedding planner?</h3>
            <p>
              The average cost of a full-service wedding planner is
              $2,000-$10,000. The exact cost will depend on the size and
              complexity of your wedding, as well as the location and services
              you require.
            </p>
          </div>
          <div className="center">
            <a href="tel:+2406653350">
              <Button>Call (240) 665-3350</Button>
            </a>
          </div>
        </section>
      </Main>
    </div>
  )
}

export default WeddingPlanning

const Main = styled('div')`
  @media (min-width: 768px) {
    .content {
      max-width: 60rem;
      margin: 0 auto;
    }
  }
`

const Simple = styled('ul')`
  margin: 0 auto;
  counter-reset: li;
  padding-top: 1rem;

  li {
    padding-left: 3.5rem;
    margin-bottom: 2rem;
    position: relative;
    list-style-type: none;
    font-weight: 200;

    :last-child {
      margin-bottom: 0;
    }

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
