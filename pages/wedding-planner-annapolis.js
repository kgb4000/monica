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

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

export default function Home({ data }) {
  const [isOpen, setOpen] = useState(false)
  const SEO = {
    title: 'Wedding Planner Annapolis | Local Wedding Planning Specialists',
    description:
      'Looking for a wedding planner in Annapolis? We are local wedding planning experts that can help plan your day perfect. Schedule a call with us today!',
    canonical: 'https://monicabrowneweddings.com/wedding-planner-annapolis',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/wedding-planner-annapolis',
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
        heroText="Wedding Planner For Couples in Annapolis"
        subText="We Create Beautiful Weddings For Couples in Annapolis MD"
        buttonText="Book A Call"
        backgroundImage="/images/william-paca-house-stairs-facing-house.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1 className="title">Wedding Planner Annapolis</h1>
            <p>Are you looking for a wedding planner in Annapolis, MD?</p>
            <p>Look no further than Monica Browne Weddings.</p>
            <p>
              Monica Browne Weddings is a boutique wedding planning company and
              event planning company serving couples in Annapolis and throughout
              Maryland, and Washington, DC.
            </p>
            <p>
              We are special event planners here to help you plan one of the
              most memorable events.
            </p>
            <p>Our services include:</p>
            <ul className="wedding-services">
              <li>
                <Link
                  href="/wedding-services/full-service-wedding-planner"
                  passHref
                >
                  <a>Full service planning</a>
                </Link>
              </li>
              <li>Partial planning</li>
              <li>
                <Link href="/day-of-wedding-coordinator" passHref>
                  <a>Day of coordination</a>
                </Link>
              </li>
              <li>
                {' '}
                <Link href="/micro-wedding-packages-maryland" passHref>
                  <a> Micro Weddings</a>
                </Link>
              </li>
              <li>Event coordination services</li>
              <li>Special Event Planning</li>
            </ul>
            <p>
              We help guide you through the wedding planning process and help
              alleviate any frustration in preparing for one of the most
              important events of your life.
            </p>
            <p>
              As an event planner and professional coordinator, Monica and her
              team will manage your entire day and make sure it goes off without
              a hitch. You will not have to worry about any unexpected problems
              because we have already taken care of them.
            </p>
            <p>
              We are experts at event management and creating enchanting events
              with over 15 years in the industry. You tell us your vision, and
              we'll cover all the details.
            </p>
            <p>
              Wedding savvy couples trust us to bring their wedding dreams to
              life, and we do.
            </p>
            <p>
              We always do our best to create unique and fun events with your
              personal style. As one of the top wedding planners in Maryland,
              you can count on us to be there from the beginning to the end.
            </p>
            <p>
              We stay with you to ensure your big day is beautiful and
              stress-free.
            </p>
            <p>P.S. Our owner Monica, was born and raised in Annapolis, MD.</p>
            <p className="center-text">
              Book a 15-minute call with Monica and see how we can help plan
              your wedding
            </p>
            <div className="center">
              <a href={calendly}>
                <Button>Schedule a call today!</Button>
              </a>
            </div>
          </div>
        </section>
        <PainSection
          title="Wedding Planning Can Cost You A Lot of Time"
          src="/images/wedding-floral-design-472.webp"
          alt="Flowers designed by Annapolis wedding planner Monica Browne"
          width="472"
          height="708"
          pain1="Time looking on for the best wedding vendors"
          pain2="Time finding the right event professionals to help you"
          pain3="Time trying to plan and style a wedding, something you've never done before"
          pain4="Time looking for a venue"
          pain5="Making timely decisions and staying organized"
          pain6="Figuring out new safety protocols for events in Annapolis, MD"
        />
        <section className="container">
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
        </section>
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
                  src="https://res.cloudinary.com/browne-company/image/upload/v1631495884/bride-with-flowers_xahpez.webp"
                  alt="Wedding Decorations and Design"
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="title">Wedding Decorations</h3>
              </div>
              <div className="wedding-service">
                <img
                  src="/images/maryland-wedding-planner-472w.webp"
                  alt="Micro weddings by Monica Browne Weddings"
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="title">Micro Weddings</h3>
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
              We Make Wedding Planning For Annapolis Couples Simple
            </h2>
            <div>
              <Simple>
                <li>
                  <h4>Talk To Monica</h4>
                  <p>
                    Schedule your call with Monica and see how she can help with
                    full-service planning, partial service, or event management.
                  </p>
                </li>
                <li>
                  <h4>Plan & Budget</h4>
                  <p>
                    Let Monica help you with the planning process, your budget,
                    finding reputable vendors, and help style your entire event,
                    including the ceremony and reception.
                  </p>
                </li>
                <li>
                  <h4>Enjoy Your Special Day</h4>
                  <p>
                    Enjoy your wedding day with no worries, no stress, and
                    problems. We'll take care of your event coordination and the
                    details so your day is stress-free.
                  </p>
                </li>
              </Simple>
            </div>
            <p className="center-text">
              Book a 15-minute call with us and see how we can help as your
              Annapolis wedding planner
            </p>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
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
              I am so thankful that I used Monica Browne Weddings for my rooftop
              wedding in the summer of 2010. It has been 5 years, and I still
              have family and friends tell me how beautiful my wedding day was.
              I could not have been more pleased with their work. They listened
              to all my wants and carried them out exactly how I asked them to.
              They were friendly, understanding, and effortless to work with...
            </Testimonial>
            <TestimonialAuthor>Katrina</TestimonialAuthor>
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
              src="https://res.cloudinary.com/browne-company/image/upload/v1631495887/tall-wedding-flowers-centerpiece_ql8yf6.webp"
              alt="Wedding table centerpiece"
              rel="noreferrer"
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
          <h2 className="title">FAQs</h2>
          <h3>#1. How Long Before a Wedding Should You Start Planning?</h3>
          <p>
            It is never too early to start planning for your wedding. The sooner
            you start, the better your chance of making your dream wedding a
            reality. That being said, most couples wait until about 12 months
            before their wedding to start getting into the nitty-gritty details.
            This gives you plenty of time to research, book vendors, and
            finalize all the details without feeling too overwhelmed.
          </p>
          <h3>#2. What is a Realistic Budget for a Wedding in Annapolis?</h3>
          <p>
            A realistic budget for a wedding in Annapolis, MD, can vary greatly
            depending on several factors, such as the size of the wedding, the
            location, the type of ceremony and reception, etc.
          </p>
          <p>
            However, a reasonable budget for a wedding in the D.C., Annapolis,
            and Baltimore area can be around{' '}
            <Link href="/blog/cost-of-a-wedding-in-washington-dc" passHref>
              <a>$28,000-$40,000</a>
            </Link>
            . Of course, this is just a rough estimate, and you will need to
            tailor your budget to your specific needs.
          </p>
          <h3>#3. What are the Three Largest Expenses With a Wedding?</h3>
          <p>
            The three largest expenses with a wedding are typically the venue,
            the catering, and the number of guests. However, there are ways to
            save on each of these expenses. For example, you can often get a
            discount on the venue if you book it for a Friday or Sunday instead
            of a Saturday. You can also save on catering by opting for a
            buffet-style meal instead of a sit-down dinner. And finally, you can
            save on the number of guests by having a{' '}
            <Link
              href="/wedding-services/micro-wedding-packages-maryland"
              passHref
            >
              <a>micro wedding</a>
            </Link>{' '}
            and inviting only close family and friends.
          </p>
          <h3>#4. What's the Best Month to Get Married?</h3>
          <p>
            There's no definitive answer to this question, as every couple's
            circumstances are unique. However, we recommend getting married
            between May and October. These months generally boast the best
            weather for an outdoor wedding, and they're also popular wedding
            months, so you'll have plenty of venue and vendor options to choose
            from. Plus, getting married during the off-season can help you save
            money on your wedding budget.
          </p>
          <h3>#5. #5. Can You Plan a Wedding in 3 Months?</h3>
          <p>
            While it is possible to plan a wedding in 3 months, doing everything
            you want in such a short timeframe may be challenging. You may need
            to be more flexible with your vendor choices and budget. It is also
            important to remember that some vendors, such as photographers and
            caterers, may book up several months in advance. If you're set on
            having a specific vendor, you may need to plan your wedding closer
            to the 6-month mark.
          </p>
          <div className="center">
            <a href={calendly}>
              <Button>Schedule a call today!</Button>
            </a>
          </div>
        </section>
      </Main>
    </div>
  )
}

const Main = styled('div')`

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
