import dynamic from 'next/dynamic'
import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import Simple from '../components/Simple'
import { Testimonial, TestimonialAuthor } from '../components/Testimonials'
import { NextSeo } from 'next-seo'

const ModalVideo = dynamic(() => import('react-modal-video'))

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

export default function Home() {
  const [isOpen, setOpen] = useState(false)
  const SEO = {
    title: 'Wedding Planner Washington DC | Monica Browne Weddings',
    description:
      'Monica Browne is a wedding planner near Washington DC and one of the best full service wedding planners and day of coordinators in the DMV. Call us today!',
    canonical: 'https://monicabrowneweddings.com/wedding-planner-washington-dc',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/wedding-planner-washington-dc',
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
        heroText="Wedding Planning for Washington DC Couples"
        subText="We Create Beautiful Weddings For Busy Couples in DC"
        buttonText="Book a call Today!"
        backgroundImage="/images/flowers-in-pavillion.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1 className="title">Wedding Planner Washington DC</h1>
            <p className="intro">
              Monica Browne Weddings is a wedding planner helping Washington DC
              couples with wedding and event planning.
            </p>
            <p className="intro">
              As a wedding planning company, we specialize in making planning
              your wedding simple and easy, and we also make sure the process is
              not stressful.
            </p>
            <p className="intro">
              <b>It should not be.</b>
            </p>
            <p className="intro">
              We help plan every detail and make sure your special day goes off
              without a hitch.
            </p>
            <p className="intro">
              <b>
                In the end, our goal is to make sure that you and your guest are
                happy, and that you have fun celebrating this momentous
                occasion.
              </b>
            </p>
            <p className="intro">
              We can take care of your entire event, from planning and design,
              coordination, or any element of your wedding that you're
              interested in, like selecting flowers or decor.
            </p>
            <p className="intro">
              We offer full-service wedding planning & coordination to couples
              who prefer a coordinator to take care of all the details.
            </p>
            <p className="intro">
              Our{' '}
              <Link href="/day-of-wedding-coordinator">
                <a>day-of wedding coordinator</a>
              </Link>{' '}
              services for those couples that want to plan their wedding
              themselves but want someone to manage and facilitate the event.
            </p>
            <p className="intro">
              Do you want a Bohemian-style wedding with flower crowns and
              oversized floral bouquets?
            </p>
            <p className="intro">
              Or a traditional wedding with high-end linens in a classic
              ballroom setting, or you want a rustic wedding with rustic tables
              and chairs in an old warehouse setting.
            </p>
            <p className="intro">
              Monica Browne Weddings can help bring your vision to fruition.
            </p>
            <p className="intro">
              We have helped many couples make their wedding everything they
              ever wanted and help make it a day they will never forget.
            </p>
            <p className="intro">
              Check out some of our{' '}
              <a
                href="https://www.google.com/search?client=firefox-b-1-d&q=monica+browne+weddings#lrd=0x89b7eb901b80745b:0x27f704e516f44ed0,1,,,"
                target="_blank"
              >
                reviews
              </a>{' '}
              on Google.
            </p>
            <p className="intro">
              For over 15 years, we have been helping couples with wedding and
              event planning. Our expertise has made us one of the best event
              planning companies in Washington DC, Maryland, and Virginia.
            </p>
            <p className="intro">Work with us and you'll see why.</p>
            <p className="intro">
              If you are looking to find out more about how we can help you with
              your wedding plans, please book a call so we can get started
              today!
            </p>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="service-content">
            <h2 className="title">
              Wedding Planning can be Stressful and Frustrating
            </h2>
            <div className="painpoints">
              <img
                src="images/dc-wedding-planner.webp"
                alt="Wedding table designed by DC wedding planner Monica Browne"
                loading="lazy"
                width="472"
                height="708"
                title="Wedding table designed by DC wedding planner Monica Browne"
              />
              <div className="painpoints--content">
                <PainPoints>
                  <li>
                    Not knowing where to start the wedding planning process
                  </li>
                  <li>
                    Information overload from big wedding websites and blogs
                  </li>
                  <li>
                    Having to trust friends that may not come through for you
                  </li>
                  <li>
                    Setting up your wedding timeline, seating charts for your
                    reception, scheduling tasting with the caterer, plus much
                    more
                  </li>
                  <li>Trying to find the best wedding vendors</li>
                  <li>New Covid-19 protocols in DC</li>
                </PainPoints>
              </div>
            </div>
          </div>
          <h3 className="center-text">
            Book a 15 minute call with Monica and see how she can help you as
            your wedding planner
          </h3>
          <div className="center">
            <a href={calendly}>
              <Button>Book a call Today!</Button>
            </a>
          </div>
        </section>

        <section className="container">
          <div className="content">
            <h2 className="title">Our Wedding Services</h2>
            <Services>
              <div className="wedding-service">
                <img
                  src="/images/bride-groom-night-photo-1.webp"
                  alt="Bride and groom night photo"
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="title">Wedding Planning</h3>
              </div>
              <div className="wedding-service">
                <img
                  src="/images/wedding-table-setting.webp"
                  alt="Wedding Decor and Design"
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="title">Wedding Decorations</h3>
              </div>
              <div className="wedding-service">
                <img
                  src="/images/bride-at-wedding.webp"
                  alt="Bride with white flower bouguet"
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="title">Floral Design</h3>
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
              We Make Wedding Planning for DC Couples Much Easier
            </h2>
            <div>
              <Simple>
                <li>
                  <h4>Talk To Monica</h4>
                  <p>
                    Talk with Monica and see show she can help you as your
                    wedding planner and make wedding planning enjoyable, and
                    less stressful for you and your fiance.
                  </p>
                </li>
                <li>
                  <h4>Start Planning and Design</h4>
                  <p>
                    Work out your budget and start planning your wedding details
                    like wedding decor, ceremony details, reception details, and
                    finding your wedding venue.
                  </p>
                </li>
                <li>
                  <h4>Enjoy Your Wedding</h4>
                  <p>Cherish the moment and enjoy your big day.</p>
                </li>
              </Simple>
            </div>
            <h3 className="center-text">
              Book a 15 minute call with Monica and see how she can help with
              weddings and events.
            </h3>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title">
              Watch This Beautiful Wedding Video From One Of Our Happy Couples
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
                <Button>Book a 15 min call today</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title">Testimonials</h2>
            <Testimonial>
              It has been 5 years and I still have family and friends tell me
              how beautiful my wedding day was. I could not have been more
              pleased at their work. They listened to all my wants and carried
              them out exactly how I asked them to. They were nice,
              understanding and very easy to work with. They kept me on track
              and made the experience enjoyable.
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
        <section className="gallery container">
          <h2 className="title">Our Gallery</h2>
          <Gallery>
            <img
              src="/images/bride-with-flowers.webp"
              alt="Bride with flowers"
              loading="lazy"
              width="472"
              height="708"
            />
            <img
              src="/images/bride-groom-happy.webp"
              alt="Bride and Groom"
              loading="lazy"
              width="472"
              height="708"
            />
            <img
              src="/images/wedding-cake.webp"
              alt="Brown wedding cake"
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
      </Main>
    </div>
  )
}

const Main = styled('div')`

.center-text {
  max-width: 40rem;
  padding: 2rem 0;
  text-align: center;
  margin: 0 auto;
}

.gallery {
  padding-bottom: 4rem;
}

.painpoints img {
  display: block;
  margin: 0 auto;
}

  @media (min-width: 768px) {

    .painpoints {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      max-width: 1100px;
      margin: 0 auto;
      justify-content: flex-end;
      justify-items: end;
      grid-gap: 20px;
      margin-bottom: 2rem;
      align-items: center;

      img {
        margin-bottom: 1rem;
      }
    }
  }

  @media (min-width: 768px) {

    .content {
      display: block;
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
        margin: 0 auto;
         margin-bottom: 3rem;
      }

      ul {
        max-width: 40rem;
        margin: 0 auto;
      }
    }

    @media (min-width: 1000px) {
       .blog-info h3 {
        font-size: 2rem;
        font-weight: 500;
      }

      .painpoints {
        align-items: center;
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

  @media (min-width: 1000px) {
    li {
      font-size: 1.4rem;
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
