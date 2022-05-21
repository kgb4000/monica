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
    title: 'Day of Wedding Coordinator in Maryland and near DC',
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
        heroText="Day of Wedding Coordinator Services"
        subText="When You Need a Day of Wedding Coordinator Just For Your Wedding Day."
        buttonText="Book a Call Today"
        backgroundImage="/wedding-table-at-vineyard.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1>Day of Wedding Coordinator</h1>
            <p>
              Monica Browne Weddings offers day of wedding coordinator services
              to couples in Maryland and Washington DC for that special day.
              When all you need is someone to manage the wedding day for you,
              give us a call to see why we are one of the top day of wedding
              coordinators in Maryland and DC.
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
                <Link href="wedding-services/wedding-decor-services">
                  <a>wedding decorations</a>
                </Link>{' '}
              </li>
              <li>Your dance floor</li>
              <li>The wedding florist</li>
              <li>Your hair-stylist and makeup pro</li>
              <li>Secured your wedding cake</li>
              <li>The officiant</li>
              <li>Your getaway car (limo) driver</li>
            </ul>
            <p>
              As a bride or groom, you don't want to be the person coordinating
              your wedding on your wedding day, and you need to hire a day of
              wedding coordinator.
            </p>
            <p>It would be best if you had someone:</p>
            <ul>
              <li>With experience as a wedding day coordinator</li>
              <li>
                You could trust to make sure your event starts and ends on time
              </li>
              <li>
                To make sure the decorations are exactly what you expected
              </li>
              <li>To ensure that everything else gets executed properly</li>
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
                  <h4>Talk To Monica</h4>
                  <p>
                    Book a call with Monica to discuss how she can help as your
                    day of coordinator.
                  </p>
                </li>
                <li>
                  <h4>Give Us Your Info</h4>
                  <p>
                    Let us create a detailed timeline for you, contact your
                    vendors, and oversee every detail of your event.
                  </p>
                </li>
                <li>
                  <h4>Enjoy Your Wedding Day</h4>
                  <p>Enjoy your wedding and cherish the moment!</p>
                </li>
              </Simple>
              <div className="center">
                <a href={calendly}>
                  <Button>Book a call</Button>
                </a>
              </div>
            </div>
            <h2>What is a Day of Wedding Coordinator?</h2>
            <p>
              A day of wedding coordinator is a professional responsible for
              managing your entire wedding day and helping you finalize the
              details weeks leading up to the big event. They are the point of
              contact for all you wedding vendors, and they oversee every
              critical detail of your wedding like:
            </p>
            <ul>
              <li>
                Discuss the order of events for the ceremony with the officiant
              </li>
              <li>Coordinate the layout of the tables for the reception</li>
              <li>
                Make sure the bartender never runs out of your signature drink
              </li>
              <li>Who has the wedding rings</li>
              <li>
                Keep your wedding ceremony and reception in line with the rules
                of the venue
              </li>
              <li>
                What time the florist arrives and sets up the floral decorations
              </li>
            </ul>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
            <h2>What Does a Day of Wedding Coordinator Do?</h2>
            <p>
              Unlike a full service wedding planner, a day of wedding
              coordinator is there to manage your wedding day when the day
              arrives. They do not help you plan your wedding like wedding
              planners.
            </p>
            <p>
              A wedding planner will help you plan your wedding from start to
              finish. They may start working with you a year or six months
              before your big day and help you with the initial wedding planning
              stages. A Wedding planner will help you:
            </p>
            <ul>
              <li>Develop and manage your wedding budget</li>
              <li>Coordinate with your bridal party</li>
              <li>Choose a wedding theme</li>
              <li>Choose the best venue</li>
              <li>Choose the best place for your ceremony and reception</li>
              <li>Set up your gift registry</li>
              <li>Form your guest list</li>
              <li>Design your floor plan</li>
              <li>Refer vetted vendors</li>
              <li>Read all vendor contracts</li>
              <li>Provide progress updates and status reports</li>
              <li>Choose and send out your wedding invitations</li>
              <li>
                Set up hotels and lodging for your family members and guests
              </li>
              <li>Set up and coordinate your wedding rehearsal</li>
              <li>Prepare a detailed timeline of your special event</li>
              <li>Coordinate the big day</li>
            </ul>

            <p>
              <Link href="/wedding-services/full-service-wedding-planner">
                <a>Full-service planning</a>
              </Link>{' '}
              is an excellent service for busy couples who don't have the time
              to plan their wedding or need a professional wedding planner to do
              most of the work.
            </p>
            <p>
              A <b>day of wedding coordinator</b> will manage your wedding after
              you have secured your vendors, selected your venue, and signed all
              your vendor contracts.
            </p>
            <p>A day of coordinator will:</p>
            <ul>
              <li>Oversee the entire wedding day for you</li>
              <li>Coordinate and supervise your wedding rehearsal</li>
              <li>Review your wedding vendor contracts</li>
              <li>Perform a ceremony and reception site walk-through</li>
              <li>Coordinate the wedding day decoration setup</li>
              <li>Confirm final fittings for bride and groom</li>
              <li>Provide progress updates leading up to the wedding day</li>
              <li>Be the point of contact for all vendor communication</li>
              <li>Prepare a day of wedding timeline for the wedding couple</li>
              <li>
                Prepare a day of wedding timeline for the wedding party and
                family members
              </li>
            </ul>
            <p>
              A good day of wedding coordinator will still make sure you didn't
              forget anything while planning your wedding. They will review your
              contracts and make sure that every detail.
            </p>
            <p>
              On the day of your wedding, your wedding coordinator will be the
              first to call you and make sure you are ready for the big day.
            </p>
            <p>
              They will be the first person to arrive at the ceremony venue or
              the reception venue to ensure the other vendors have access, are
              on their way, and have no issues.{' '}
            </p>
            <div className="center">
              <a href={calendly}>
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
              by not hiring a full-service wedding planner.{' '}
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
            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
            <p>Here's an example.</p>
            <p>
              Imagine you're getting married and you and your fiance decide to
              plan your wedding.{' '}
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
              Instead of trusting your friend to handle anything, you decide to
              do it yourself and the next thing you know,{' '}
              <b>you're coordinating your wedding.</b>{' '}
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
              This is just one example of why you should hire a wedding
              coordinator.
            </p>
            <div className="center">
              <a href={calendly}>
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
            <h2>When To Hire a Day of Wedding Coordinator?</h2>
            <p>
              The best time to hire a day of wedding coordinator is between six
              to eight weeks before your wedding date. This leaves enough time
              to read vendor contracts, do a walk-through of the different
              sites, form a relationship with the other vendors, and sort out
              any missing details that you may have missed while planning your
              event.
            </p>
            <h2>How Much Does a Day of Wedding Coordinator Cost?</h2>
            <p>
              Every couple is different, and every couple's wedding is
              different. Because every couple is different, the cost of hiring
              us as your day-of coordinator will be different for every couple.
            </p>
            <p>
              The factors we take into account when pricing our day of
              coordinator services are:
            </p>
            <ol>
              <li>The size of the wedding</li>
              <li>The location of all your events</li>
              <li>The time to coordinate your event</li>
            </ol>
            <p>
              We encourage you to call us so we can give you the best price
              possible.
            </p>
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
              <li>Oversee your wedding day logistics for up to eight hours.</li>
            </ul>
            <p>
              We are excited to work with you and want to help make this the
              best day of your life. Give us a call or click the button below to
              book a call.
            </p>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
            <h2>FAQ</h2>
            <h3>Why Should I Consider Hiring a Day-of Coordinator?</h3>
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
            <h3>What is the Cost of a Day-of Coordinator?</h3>
            <p>
              The cost of day-of coordination for your wedding depends on many
              factors. I know you've read many blogs that say the national
              average is between <strong>$800 and $4000</strong>, but it's hard
              to give the cost for our services when we don't know all the
              details of your wedding.
            </p>
            <p>
              If you've done all the planning already and we don't have to do
              anything but show up and run your event, that's one thing, but it
              never happens. There's always something that needs to be addressed
              or was missed when planning.
            </p>
            <p>
              {' '}
              So to get the cost for day-of coordination services, please give
              us a call. We'll give you your custom day-of-service price.
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

const FloralDesigns = styled('ul')`
  padding: 0 2rem;
`

const Locations = styled('ul')`
  padding: 0 2rem;
`
