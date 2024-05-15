import dynamic from 'next/dynamic'
import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import { Testimonial, TestimonialAuthor } from '../components/Testimonials'
import Button from '../components/Button'
import { NextSeo } from 'next-seo'
import Simple from '../components/Simple'
import BlogPosts from '../components/BlogPosts'
import { getPosts } from '../lib/data'

import PainSection from '../components/PainSection'

const ModalVideo = dynamic(() => import('react-modal-video'))

const calendly = 'https://calendly.com/mbweddings/30min'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

function Annapolis({ data }) {
  const [isOpen, setOpen] = useState(false)
  const SEO = {
    title: 'Wedding Planner Northern Virginia | Monica Browne Wedings',
    description:
      'Looking for a wedding planner in Northern Virginia? We are local wedding planning experts that can help plan your day perfect. Schedule a call with us today!',
    canonical:
      'https://monicabrowneweddings.com/wedding-planner-northern-virginia',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/wedding-planner-northern-virginia',
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
        heroText="Wedding Planner For Busy Couples in Northern Virginia"
        subText="We help couples in Alexandria, Fairfax, Chantilly, and Falls Church Plan the Perfect Day."
        buttonText="Book a Call today!"
        buttonLink={calendly}
        backgroundHeight="100vh"
        backgroundImage="/images/wedding-ceremony.webp"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1 className="title">Wedding Planner in Northern Virginia</h1>
            <p>
              Planning your wedding day should be a happy time and a fun
              experience.
            </p>
            <p>But for some couples, it can be time-consuming and stressful.</p>
            <p>
              Unfortunately, some couples are too busy to plan the ceremony and
              reception they want. They end up trying to plan the event
              themselves and working on their wedding day.
            </p>
            <p>That's where we come in.</p>
            <p>
              We're an event management and wedding planning company that can
              manage your entire wedding planning process for you.
            </p>
            <p>
              We make sure your wedding has the artfully curated details you
              want and that it runs smoothly without any issues.
            </p>
            <p>
              Our{' '}
              <Link href="/wedding-services/full-service-wedding-planner">
                <a>full-service planning</a>
              </Link>{' '}
              gives you the freedom and flexibility to plan events and maintain
              your busy lifestyle.
            </p>
            <p>
              Our{' '}
              <Link href="/day-of-wedding-coordinator">
                <a>day-of coordination service</a>
              </Link>{' '}
              allows you to do some or all of the planning and let us manage the
              big day for you.
            </p>
            <p>
              We offer full-service, partial-service, and special event planning
              in:
            </p>
            <ul className="wedding-services">
              <li>Alexandria, VA</li>
              <li>Chantilly, VA</li>
              <li>Fairfax, VA</li>
              <li>Falls Church, VA</li>
              <li>Loudoun County, VA</li>
            </ul>
            <p>
              We give you helpful tips and suggestions, which save you from
              worrying about all the essential and unique details.
            </p>
            <p>
              Our talented professionals work closely with you to create a
              custom plan that fits your vision.
            </p>
            <p>
              We help choose the best vendors, pick a theme and style for your
              event, and handle all the small details.
            </p>
            <p>
              We will help make it a meaningful and happy experience, not a
              stressful one.
            </p>
            <p>
              {' '}
              Check out our{' '}
              <a
                href="https://www.google.com/search?client=firefox-b-1-d&q=monica+browne+weddings#lrd=0x89b7eb901b80745b:0x27f704e516f44ed0,1,,,"
                target="_blank"
              >
                5-star reviews
              </a>{' '}
              on Google.
            </p>
            <p>
              If you are looking for wedding planners in Northern Virginia,
              please get in touch with us today to schedule a consultation.
            </p>
            <p className="center-text">
              Book a 15-minute call with us and see how we can help you.
            </p>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call today!</Button>
              </a>
            </div>
          </div>
        </section>
        <PainSection
          title="Planning the Details of Your Ceremony and Reception Can Be Time Consuming"
          src="/images/wedding-floral-design-472.webp"
          alt="Flowers designed by wedding planner Monica Browne"
          width="472"
          height="708"
          pain1="Time looking on for the best wedding vendors"
          pain2="Time finding the right event professionals in Northern, VA to help you"
          pain3="Time trying to plan and style a wedding, something you've never done before"
          pain4="Time looking for a venue"
          pain5="Making timely decisions and staying organized"
          pain6="Figuring out new safety protocols for events in VA"
        />
        {/* <section className="container">
          <div className="content">
            <h2 className="title">
              Why Choose Monica Browne Weddings as Your Wedding Planner?
            </h2>
            <p>
              When you trust Monica Browne Weddings to plan your event, you can
              be confident that everything will be taken care of – from the
              smallest detail to the big picture. We have a proven track record
              of delivering flawless events repeatedly, and our clients rave
              about our creative vision, calm demeanor, and impeccable
              organizational skills.
            </p>
            <p>
              Check out our{' '}
              <a
                href="https://www.google.com/search?client=firefox-b-1-d&q=monica+browne+weddings#lrd=0x89b7eb901b80745b:0x27f704e516f44ed0,1,,,"
                target="_blank"
              >
                5-star reviews
              </a>{' '}
              on Google.
            </p>
            <p>
              We love what we do, and it shows. We're passionate about creating
              beautiful celebrations that reflect each couple's unique style and
              personality, and we take great pride in our work.
            </p>
            <p>
              You can be confident that your wedding or event will be in good
              hands when you choose Monica Browne Weddings. We're professional,
              reliable, and fun to work with – everything you could want in a
              wedding planner!
            </p>
            <p>
              Contact us today to learn more about our services or to schedule a
              free consultation. We can't wait to start planning your perfect
              event!
            </p>
            <div className="center">
              <Link href="/contact">
                <a>
                  <Button>Contact us today!</Button>
                </a>
              </Link>
            </div>
          </div>
        </section> */}
        <section className="container">
          <div>
            <h2 className="title">Our Wedding Services</h2>
            <Services>
              <div className="wedding-service">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1631495885/happy-bride-and-groom_bwyebx.webp"
                  alt="Happily Married Couple"
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="title">Wedding Planning</h3>
              </div>
              <div className="wedding-service">
                <img
                  srcSet="images/wedding-floral-design-472.webp 480w,
                            images/wedding-floral-design-472.webp 800w"
                  sizes="(max-width: 480px) 480px,
                            800px"
                  src="images/wedding-floral-design-472.webp"
                  alt="Wedding table setting design"
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="title">Wedding Decorations</h3>
              </div>
              <div className="wedding-service">
                <img
                  srcSet="images/wedding-table-setting-design-311w.webp 480w,
                            images/wedding-table-setting-design-472w.webp 800w"
                  sizes="(max-width: 480px) 480px,
                            800px"
                  src="images/wedding-table-setting-design-472w.webp"
                  alt="Wedding table setting design"
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="title">Day of Coordination</h3>
              </div>
            </Services>
            <div className="center">
              <Link href="/wedding-services">
                <a>
                  <Button>More Services</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="service-content get-started">
            <h2 className="title">
              Monica Makes the Wedding Planning Process Simple
            </h2>
            <div>
              <Simple>
                <li>
                  <h4>Call Monica</h4>
                  <p>
                    Talk with Monica and see how she can help you bring your
                    vision to life.
                  </p>
                </li>
                <li>
                  <h4>Start Planning</h4>
                  <p>
                    Work out a budget and start planning the details, like
                    decor, food choices, attire, guest list, and more.
                  </p>
                </li>
                <li>
                  <h4>Enjoy Your Big Day</h4>
                  <p>
                    Come, get married, and enjoy the moment, and create history.
                  </p>
                </li>
              </Simple>
            </div>
            <p className="center-text">
              Call Monica and see how she can help make your wedding day a
              success.
            </p>
            <div className="center">
              <a href="tel:+2406653350">
                <Button>Call (240) 665-3350</Button>
              </a>
            </div>
          </div>
        </section>
        {/* <section className="container">
          <div>
            <h2 className="title">
              Watch This Romantic Wedding Video From One Of Our Happy Couples
            </h2>
            <section className="video-section">
              <ModalVideo
                channel="custom"
                autoplay
                isOpen={isOpen}
                url="https://natashaweddingvideo.s3.amazonaws.com/wedding-video.mp4"
                allowFullScreen={true}
                onClose={() => setOpen(false)}
              />
              <WhiteButton
                className="btn-primary"
                onClick={() => setOpen(true)}
              >
                Watch this video
              </WhiteButton>
            </section>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
          </div>
        </section> */}
        <section className="container">
          <div>
            <h2 className="title">Testimonials</h2>
            <Testimonial>
              Choosing Monica Browne Weddings to meet my needs during one of the
              most important events in my life was a decision that hosts no
              regrets. True professionalism, at its best! While planning a
              wedding can be very stressful and hectic, my experience with
              Monica Browne Weddings was definitely one that was fun and
              exciting! ...
            </Testimonial>
            <TestimonialAuthor>Teresa Thomas</TestimonialAuthor>
            <div className="center">
              <Link href="/testimonials">
                <a>
                  <Button>More Testimonials</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <BlogPosts data={data} />
        <section className="gallery container">
          <h2 className="title">Our Gallery</h2>
          <Gallery>
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/v1631495883/beautiful-bride-flowers_ho8plu.webp"
              alt="Bride with flowers"
              rel="noreferrer"
              loading="lazy"
              width="472"
              height="708"
            />
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/v1631495884/bride-groom-happy_xr217b.webp"
              alt="Bride and Groom"
              rel="noreferrer"
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
          </Gallery>
          <div className="center">
            <Link href="/wedding-gallery">
              <a>
                <Button>See More Pictures</Button>
              </a>
            </Link>
          </div>
        </section>
        <section className="container">
          <h2 className="title">Frequently Asked Questions</h2>
          <h3>#1. How Much Does a Wedding Cost in Northern Virginia</h3>
          <p>
            In the DC metro area, at least, a wedding can cost anywhere between
            $27,000 and $37,000, but it all depends on what you want to spend.
          </p>
          <p>
            You can have a small wedding and spend $5,000 to $10,000 or $50,000
            to $200,000.
          </p>
          <p>It depends on what you want to spend.</p>
          <p>
            Most of the cost depends on your guest count, caterer, and venue.
          </p>
          <h3>#2. How Much Does Wedding Planner Cost in Northern VA?</h3>
          <p>
            An experienced planner can cost $2,000 to $10,000 in our metro area.
          </p>
          <p>
            This price depends on the planner's experience and the size of the
            event.
          </p>
          <p>
            It also depends on whether it is day-of coordination or a
            full-service package.
          </p>
          <p>
            A day-of coordinator can cost $2,000 - $4,000, while full planning
            can cost $4,000 - $10,000 plus.
          </p>
          <p>Call us to get a custom quote for your event.</p>
          <h3>#3. Can I Plan My Wedding Myself?</h3>
          <p>Yes, you can.</p>
          <p>
            Some clients want to be hands-on in the planning stage but want
            someone to manage the day of the event.
          </p>
          <p>
            Some clients are too busy and need a knowledgeable and trustworthy
            professional to get things done.
          </p>
          <p>We can help you in both cases.</p>
          <h3>#4. When Should I Start Planning My Wedding?</h3>
          <p>It depends on when you want to get married.</p>
          <p>
            After you pick a date, you can start planning one year, six months,
            or three months before your wedding.
          </p>
          <p>
            Just know that some venues, caterers, and other vendors are usually
            booked six months to a year in advance.
          </p>
          <h3>#5. How Can a Wedding Planner Save Me Money</h3>
          <p>A planner can save you time and money.</p>
          <p>
            We can save you time by suggesting reputable vendors we worked with
            in the past. We can also save you money by negotiating prices and
            fees because of our relationships.
          </p>
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

export default Annapolis

const Main = styled('main')`

ul.wedding-services {
  margin-left: 3rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
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

  @media (min-width: 768px) {

    .content {
      text-align: left;
      max-width: 60rem;
      margin: 0 auto;
    }

    .service-content {

      img {
        display: none;
      }

      display: block;
      max-width: 60rem;
      margin: 0 auto;
      text-align: left;

      @media (min-width: 768px) {

        img {
        display: block;
      }


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

const PainPoints = styled('ul')`
  margin-left: 2rem;
  max-width: 20rem;
  margin: 0 auto;
  padding: 0 2rem;

  li {
    font-weight: 200;
    margin: 1rem 0;
  }

  @media (min-width: 600px) {
    h2 {
      text-align: left;
    }

    li {
      font-weight: 200;
      margin: 1rem 0;
    }

    max-width: 100%;
    margin-left: 2rem;
  }
`

const Services = styled('div')`
  margin: 0 auto;

  .wedding-service {
    margin: 0 auto;
    text-align: center;
  }

  h3 {
    display: inline-block;
    padding: 0.5rem 0;
  }
  @media (min-width: 736px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    max-width: 100%;
    margin: 0 auto;
  }
`

const WhiteButton = styled(Button)`
  border: #fff;
  color: #fff;
  background-color: transparent;
  border: 2px solid #fff;
  font-weight: bold;

  :hover {
    color: #000;
    background-color: rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
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
    grid-gap: 20px;
    max-width: 100%;
    margin: 0 auto;
  }
`
