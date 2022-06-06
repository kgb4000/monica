import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import { NextSeo } from 'next-seo'
import Simple from '../components/Simple'
import PictureBox from '../components/picture-box'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

export default function DayOfWeddingCoordinator() {
  const SEO = {
    title: 'Day of Wedding Coordinator in Maryland, DC, and Virginia',
    description:
      'Monica Browne Weddings is a day of wedding coordinator serving Maryland and DC. If you want someone you can trust to coordinate your wedding, book a call!',
    canonical: 'https://monicabrowneweddings.com/day-of-wedding-coordinator',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/day-of-wedding-coordinator',
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
      <NextSeo {...SEO} />
      <HeroSection
        heroText="Day of Wedding Coordinator Services in the DMV"
        subText="When You Need a Day of Wedding Coordinator Just For Your Wedding Day."
        buttonText="Book a Call Today"
        backgroundImage="/wedding-table-at-vineyard.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1>Day of Wedding Coordinator in Maryland, DC, and Virginia</h1>
            <p>
              Monica Browne Weddings offers day-of wedding coordinator services
              to couples in Maryland, Washington DC, and Virginia.
            </p>
            <p>
              When all you need is someone to manage the wedding day for you,
              give us a call to see why we are one of the top day-of wedding
              coordinators in the DMV.
            </p>
            <p>When you have hired all your wedding vendors yourself like:</p>
            <ul>
              <li>The DJ </li>
              <li>The caterer</li>
              <li>The photographer</li>
              <li>The videographer</li>
              <li>Secured the wedding venue</li>
              <li>Confirm the tables and chairs from your rental company</li>
              <li>
                Your{' '}
                <Link href="/wedding-services/wedding-decor-services" passHref>
                  <a>wedding decorations</a>
                </Link>{' '}
              </li>
              <li>Your dance floor</li>
              <li>The wedding florist</li>
              <li>Your hairstylist and makeup pro</li>
              <li>Secured your wedding cake</li>
              <li>The officiant</li>
              <li>Your getaway car (limo) driver</li>
            </ul>
            <p>
              As a bride or groom, you don't want to be the person coordinating
              your wedding on your wedding day, and you should hire a day of
              wedding coordinator.
            </p>
            <p>
              You want to hire a wedding professional like{' '}
              <Link href="/about" passHref>
                <a>Monica Browne</a>
              </Link>{' '}
              who is a wedding planner and coordinator:
            </p>
            <ul>
              <li>With 15 years experience in the wedding industry</li>
              <li>
                You could trust to make sure your event starts and ends on time
              </li>
              <li>
                To make sure the decorations are exactly what you expected
              </li>
              <li>To ensure that everything else gets executed properly</li>
              <li>
                To take care of problems and keep your wedding running smoothly
              </li>
            </ul>
            <PictureBox
              Image1="images/tea-lights.webp"
              alt1="Tea lights for wedding ailse"
              width1="472"
              height1="708"
              Image2="images/wedding-cake.webp"
              alt2="Browne wedding cake"
              width2="472"
              height2="708"
            />
            <div className="get-started">
              <h2>How To Get Started</h2>
              <Simple>
                <li>
                  <h4>Book a call with Monica</h4>
                  <p>
                    Book a call with Monica to discuss how she can help as your
                    day of coordinator.
                  </p>
                </li>
                <li>
                  <h4>Let's talk about your event</h4>
                  <p>
                    Let us create a detailed timeline for you, contact your
                    vendors, and oversee the details of your wedding day.
                  </p>
                </li>
                <li>
                  <h4>Enjoy your Wedding Day</h4>
                  <p>Enjoy your wedding and cherish the moment!</p>
                </li>
              </Simple>
              <div className="center">
                <a href={calendly}>
                  <Button>Book a call</Button>
                </a>
              </div>
            </div>
            <h2>
              What Does Monica Browne Weddings Do as Your Day-of Coordinator?
            </h2>
            <p>
              A day of wedding coordinator is a professional responsible for
              managing your entire wedding day and helping you finalize the
              details weeks leading up to the big event.
            </p>
            <p>
              We become the point of contact for all you wedding vendors, and we
              oversee all the critical details of your wedding like:
            </p>
            <ul>
              <li>Reviewing your wedding vendor contracts</li>
              <li>
                Preparing a timeline for the vendors and your wedding party
              </li>
              <li>Supervising your wedding rehearsal</li>
              <li>Giving you progress updates on actions to be done</li>
              <li>
                Discussing the order of events for the ceremony with the
                officiant
              </li>
              <li>Coordinating the layout of the tables for the reception</li>
              <li>
                Doing ceremony and reception site inspection and walk-throughs
              </li>
              <li>Plus more</li>
            </ul>
            <p>
              A day of wedding coordinator will manage your wedding day when the
              day arrives.
            </p>
            <p>
              They do not help you plan your wedding like a{' '}
              <Link
                href="/wedding-services/full-service-wedding-planner"
                passHref
              >
                <a>full service wedding planner</a>
              </Link>
              .
            </p>
            <p>
              A wedding planner will help you plan your wedding from start to
              finish.
            </p>
            <p>
              They may start working with you a year or six months before your
              big day and help you with the initial wedding planning stages.
            </p>
            <div className="center">
              <a href={calendly} rel="noreferrer">
                <Button>Book a call</Button>
              </a>
            </div>
            <img
              src="images/happy-wedding-couple.webp"
              alt="Newly married couple"
              width="1000"
              height="667"
            />
            <h2>Is a Day of Wedding Coordinator Worth It?</h2>
            <p>The simple answer is yes.</p>
            <p>
              A day of wedding coordinator is priceless if you want peace of
              mind and someone you can trust to manage the biggest day in your
              life.
            </p>
            <p>
              Many couples choose to plan their weddings themselves, and they
              plan their weddings only thinking about the money they will save
              by not hiring a full-service wedding planner.
            </p>
            <p>
              Although planning a wedding yourself allows you to save money,
              you'll also want to save yourself the stress of managing your
              wedding, and that's where a day-of wedding coordinator will be
              your best investment.
            </p>
            <p>
              Apart from all the help and additional tips a day of wedding
              coordinator can give you, the amount of stress they can save you
              is worth the price of hiring one.
            </p>
            <p>Here's an example.</p>
            <p>
              You're getting married and you and your fiance{' '}
              <Link
                href="/blog/wedding-planning-what-to-consider-before-planning-a-wedding"
                passHref
              >
                <a>decide on planning your wedding</a>
              </Link>{' '}
              yourselves.
            </p>
            <p>
              Instead of hiring a wedding coordinator, you ask one of your
              friends to help with the planning and be the coordinator's day.{' '}
            </p>
            <p>Of course, they say yes.</p>
            <p>
              You've picked out your dress, got your guest list together,
              contacted different wedding vendors, signed contracts with
              vendors, communicated with the venue coordinator, and everything
              is going according to your plan.{' '}
            </p>
            <p>Or so you hope.</p>
            <p>You ask your friend to supervise the rehearsal.</p>
            <p>
              They have never managed one before, and they don't have any
              experience as a day of coordinator.
            </p>
            <p>
              Your friend doesn't call and confirm the rehearsal time with the
              other wedding party members, and some of them don't show up to
              your rehearsal.
            </p>
            <p>So they wing it.</p>
            <p>Now it's the day of the wedding.</p>
            <p>
              Your friend is tired because they went out with you for your
              bachelorette party.
            </p>
            <p>You try to remain calm, but you are still worried.</p>
            <p>
              Instead of trusting your friend to handle everything, you decide
              help.
            </p>
            <p>
              The next thing you know, <b>you're coordinating your wedding.</b>{' '}
            </p>
            <p>
              You're directing vendors on where to set up, calling the
              photographer to see what time they're coming, reaching your
              bridesmaids to get their makeup done, and arranging place cards on
              the tables.
            </p>
            <p>Is this what you want to do on your wedding day?</p>
            <p>We hope not.</p>
            <p>
              This is just one example of why you should hire a professional
              wedding coordinator like{' '}
              <Link href="/" passHref>
                <a>Monica Browne Weddings</a>
              </Link>
              .
            </p>
            <div className="center">
              <a href={calendly} rel="noreferrer">
                <Button>Book a call</Button>
              </a>
            </div>
            <PictureBox
              Image1="images/happy-bride-and-groom.webp"
              alt1="Happy married couple on their wedding day."
              width1="472"
              height1="708"
              Image2="images/wedding-decor.webp"
              alt2="Weeding decor by Monica Browne Weddings."
              width2="472"
              height1="708"
            />
            <h2>
              Why Choose Monica Browne Weddings as Your Day of Wedding
              Coordinator?
            </h2>
            <p>
              Monica Browne Weddings is one of the top day of wedding
              coordinators in Maryland and DC. Monica and her team are industry
              professionals that will make sure you get exactly what you want
              and that your wedding goes off as you planned it.
            </p>
            <p>You will not be aware of any issues on this memorable day.</p>
            <p>You will only enjoy and cherish the moment.</p>
            <p>
              Once you've hired as your day-of coordinator, we will be available
              for any questions you have.
            </p>
            <p>
              When we are eight weeks before your wedding date, you can trust us
              to:
            </p>
            <ul>
              <li>Collect and review all your vendor contracts</li>
              <li>Confirm all payments to your vendors</li>
              <li> Confirm all final vendor payments</li>
              <li>Confirm final fittings for your dress and groom's tuxedo</li>
              <li>
                Ensure that your bridesmaids and groomsmen have secured their
                dresses and tuxedos
              </li>
              <li>
                Perform a walk-through at the ceremony and reception location
              </li>
              <li>Create a timeline for all wedding participants</li>
              <li>
                Supervise and coordinate the rehearsal for up to two hours the
                week of the event
              </li>
              <li>Coordinate for the rehearsal and the wedding</li>
              <li>
                Be the point of contact for your bridal party beginning on the
                day of your rehearsal
              </li>
              <li>
                Oversee your wedding day logistics for the duration of your
                event
              </li>
            </ul>
            <p>
              We are excited to work with you and want to help make this the
              best day of your life. Give us a call or click the button below to
              book a call.
            </p>
            <div className="center">
              <a href={calendly} rel="noreferrer">
                <Button>Book a call</Button>
              </a>
            </div>
            <h2>FAQ</h2>
            <h3>#1. Why Should I Consider Hiring a Day-of Coordinator?</h3>
            <p>
              You should consider hiring a day-of wedding coordinator if you're
              on a budget.
            </p>
            <p>
              If you want to do most of the planning yourself and find your
              wedding venue and vendors on your own but still want to enjoy your
              wedding day without worrying about anything, consider hiring
              Monica Browne Weddings.
            </p>
            <h3>#2 What Does a Day-of Coordinator Cost?</h3>
            <p>
              The cost to hire a day-of coordinator for your wedding depends on
              many factors.
            </p>
            <p>
              Some of the factors we take into account when pricing our day of
              coordinator services are:
            </p>
            <ol>
              <li>The size of the wedding</li>
              <li>How many guests you are having</li>
              <li>The location of your ceremony and your reception</li>
              <li>The how much time we spend managing your event</li>
            </ol>
            <p>
              Also, we start preparing for your wedding <b>8 weeks before</b>{' '}
              your wedding day.
            </p>
            <p>
              I know you've read many blogs that say the national average is
              between <strong>$800 and $4000</strong>, but it's hard to give the
              cost for our services when we don't know all the details of your
              wedding.
            </p>
            <p>
              If you've done all the planning already and we don't have to do
              anything but show up and manage your event, that's one thing, but
              it never happens.
            </p>
            <p>
              There's always something that needs to be addressed or was missed
              during the planning process.
            </p>
            <p>
              {' '}
              So to get the cost for a day-of coordinator for your wedding,
              please give us a call. We'll give you a custom day-of coordination
              price for your event.
            </p>
            <h3>#3 When To Hire a Day of Wedding Coordinator?</h3>
            <p>
              The best time to hire a day of wedding coordinator is between six
              to eight weeks before your wedding date.
            </p>
            <p>
              This leaves enough time to read vendor contracts, do a
              walk-through of the different sites, form a relationship with the
              other vendors, and sort out any missing details that you may have
              missed while planning your event.
            </p>
            <div className="center">
              <a href={calendly} rel="noreferrer">
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

const FloralDesigns = styled('ul')`
  padding: 0 2rem;
`

const Locations = styled('ul')`
  padding: 0 2rem;
`
