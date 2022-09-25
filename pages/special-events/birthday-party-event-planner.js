import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../../components/HeroSection'
import Button from '../../components/Button'
import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

const BirthdayPartyPlanner = () => {
  const SEO = {
    title: 'Birthday Party Planner | Monica Browne',
    description:
      'The most stunning wedding flowers design services for your dream wedding. 5 star customer reviews. Effortless and affordable. Book a call today!',
    canonical: 'https://monicabrowneweddings.com/birhtday-party-event-planner',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/birhtday-party-event-planner',
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
        heroText="Birthday Party Event Planner in Maryland, DC, and Virginia"
        subText="We plan unique, unforgetable, epic birthday parties for children and adults"
        backgroundImage="/images/birthday-party-event-planner.jpg"
        backgroundHeight="100vh"
        buttonText="Call (240) 665-3350"
        buttonLink="tel:+2406653350"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1>Birthday Party Event Planner</h1>
            <p>
              We help take the stress out of planning unique and fun birthday
              parties for adults, teenagers, and children.
            </p>
            <p>
              A birthday party is held to recognize the lives of the people you
              care about and ensure that you have the best party possible.
            </p>
            <p>
              Celebrate yourself, your mother, father, spouse, child, or best
              friend on their birthday! Let's help you organize the most
              incredible surprise birthday gathering ever!
            </p>
            <p>
              Monica Browne Weddings is not only an accomplished{' '}
              <Link href="/" passhref>
                <a>wedding planner</a>
              </Link>{' '}
              but also a professional birthday party planner who will guide you
              through the birthday planning process from start to finish.
            </p>
            <p>
              We will help you create a birthday party tailored to your specific
              desires, ensuring that your event is as unique as the individual!
            </p>
            <p>
              We specialize in taking the stress out of planning birthday
              parties and adding enjoyment!
            </p>
            <p>
              Through our creativity, innovation, connections with vendors, and
              use of technology, we make the entire experience pleasant for you
              and your guests, and we are recognized for creating unforgettable
              events!
            </p>
            <p>
              Are you ready to memorialize yourself or someone you care about
              with a magnificent, unusual, and memorable birthday party just as
              distinctive as you are?
            </p>
            <p>
              Consider how pleasurable it will be to have a party according to
              what you want.
            </p>
            <div className="center">
              <a href="tel:+2402660588">
                <Button>Call (240) 665-3350</Button>
              </a>
            </div>
            <section>
              <div className="service-content get-started">
                <h2>
                  Get Started Planning Your Birhtday Celebration With Monica
                </h2>
                <Simple>
                  <li>
                    <h4>Talk To Monica</h4>
                    <p>
                      Book your first call with Monica and see how she can help
                      you.
                    </p>
                  </li>
                  <li>
                    <h4>Plan and Budget</h4>
                    <p>
                      Determine your budget and start deciding on what you want{' '}
                    </p>
                  </li>
                  <li>
                    <h4>Enjoy Your Birthday Celebration</h4>
                    <p>
                      We will handle the designs, delivery, arrangements -
                      everything for you. Just enjoy your party and celebrate.
                    </p>
                  </li>
                </Simple>
                <div className="center">
                  <a href={calendly}>
                    <Button>Book a call today</Button>
                  </a>
                </div>
              </div>
            </section>
            <h2>Our Birthday Party Planning Process</h2>
            <p>
              Monica Browne will guide you through the process of organizing
              your birthday party from start to finish. We will help you create
              a birthday celebration tailored to your specific needs and
              desires, ensuring that your event is as unique as you are!
            </p>
            <ul>
              <li>Choose a date</li>
              <li>
                Meet with us to discuss ideas, budget, food and drink, games and
                the party theme
              </li>
              <li>Send out invitations</li>
              <li>Decorate the venue</li>
              <li>Prepare party favors</li>
              <li>Relax and enjoy the party!</li>
              <li>Arrange clean up after the party</li>
            </ul>
            <div className="center">
              <a href="tel:+2402660588">
                <Button>Call (240) 665-3350</Button>
              </a>
            </div>
            <h2>Birthday Party We Specialize in Planning</h2>
            <p>We specialize in planning all types of parties, including:</p>
            <h3>Children's birthday parties</h3>
            <p>
              Children's birthday parties can be a lot of fun. There are games
              to play, cake to eat, and presents to open. But sometimes they can
              also be a bit stressful. You want the party to be fun for the
              kids, but you also want it to be fun for you.
            </p>
            <p>
              Ensure plenty of activities to keep the kids entertained and
              prevent them from getting bored.
            </p>
            <p>Let us take the stress out of your next birthday party!</p>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
            <h3>Adult birthday parties</h3>
            <p>
              When it comes to adult birthday parties, there are a few things
              you need to keep in mind.
            </p>
            <p>
              First and foremost, the party's focus should be on the guest of
              honor. Make sure that you consider their interests and preferences
              when planning the event.
            </p>
            <p>
              Secondly, choosing a venue and date that will be convenient for
              all party attendees is essential. You'll want to pick a centrally
              located place and easy to get to.
            </p>
            <p>
              Third, you'll need to decide on a budget. Once you know how much
              you're willing to spend, you can start looking for vendors and
              suppliers who can help make your party a success.
            </p>
            <p>
              Finally, don't forget to send out invitations promptly. Include
              all the essential details, such as the party's date, time, and
              location.
            </p>
            <div className="center">
              <a href={calendly}>
                <Button>Schedule a call today!</Button>
              </a>
            </div>
            <h3>Milestone birthday party planner for:</h3>
            <ul>
              <li>16th birthday parties</li>
              <li>18th birthday parties</li>
              <li>21st birthday parties</li>
              <li>30th birthday parties</li>
              <li>40th birthday parties</li>
              <li>50th birthday parties</li>
              <li>60th birthday parties</li>
              <li>70th birthday parties and more!</li>
            </ul>
            <div className="center">
              <a href="tel:+2402660588">
                <Button>Call (240) 665-3350</Button>
              </a>
            </div>
            <p>
              Milestone birthday parties are a time to celebrate and reflect on
              the past year. It's a time to reflect on all you have accomplished
              and have yet to do.
            </p>
            <p>
              For many people, milestone birthdays also mark a change in their
              lives - they are no longer kids but adults. They may be starting
              families of their own or embarking on new careers. Whatever the
              case, milestone birthdays are a time to celebrate life and look
              forward to the future.
            </p>
            <h2>Birthday Party Vendors</h2>
            <p>No birthday party is complete without a centerpiece.</p>
            <p>
              Whether petite and simplistic or grand and elaborate, floral
              centerpieces complement every table.
            </p>
            <p>
              Centerpieces are key for keeping the party color scheme consistent
              throughout the venue. Most importantly, the head table should have
              beautiful floral arrangements to encompass the happy birthday
              individual.
            </p>
            <p>We have connections with:</p>
            <ul>
              <li>DJs & MCs</li>
              <li>Audio & Visual Professionals</li>
              <li>Cocktail Mixologists</li>
              <li>Bartenders</li>
              <li>Transportation Hosts (limousine companies)</li>
              <li>City Guides</li>
              <li>
                <Link href="/wedding-services/wedding-flowers" passHref>
                  <a>Florists</a>
                </Link>
              </li>
              <li>Decoration Specialists</li>
              <li>Cake Bakers</li>
              <li>Pastry Chefs</li>
              <li>Tents Companies</li>
              <li>Tables and chairs rental companies</li>
              <li>Caterers</li>
              <li>Custom Party Favor Creators</li>
              <li>Singers and Bands</li>
              <li>Videographers</li>
              <li>Photographers</li>
            </ul>
            <h2>Looking for a Birthday Party Planner Near Me?</h2>
            <p>
              Monica Browne Weddings is one of Maryland and DC's best birthday
              party planners.
            </p>
            <p>
              Our goal is to make your birthday party planning experience as
              enjoyable and stress-free as possible. We will work closely with
              you to understand your vision for the event and then take care of
              all the details, big and small.
            </p>
            <p>
              From finding the perfect venue to choosing the right menu,
              decorations, and entertainment, we will handle everything so you
              can relax and enjoy your special day.
            </p>
            <p>
              Contact us today to learn more about our birthday party planning
              services. We look forward to helping you create a truly
              unforgettable event!
            </p>
          </div>
          <div className="center">
            <a href={calendly}>
              <Button>Book a call today!</Button>
            </a>
          </div>
        </section>
      </Main>
    </div>
  )
}

export default BirthdayPartyPlanner

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
