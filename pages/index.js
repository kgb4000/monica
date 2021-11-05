import dynamic from 'next/dynamic'
import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import { Testimonial, TestimonialAuthor } from '../components/Testimonials'
import Button from '../components/Button'
import BlogPosts from '../components/BlogPosts'
import { NextSeo } from 'next-seo'
import { getPosts } from '../lib/data'

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
  return (
    <div>
      <NextSeo
        robotsProps={{
          notranslate: true,
          noimageindex: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
      />
      <HeroSection
        heroText="Wedding Planning For Maryland Couples"
        subText="We Create Beautiful Weddings For Busy Couples in Maryland"
        buttonText="Book A Call"
        backgroundImage="/images/bride-groom-night-photo.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1 className="title">Maryland Wedding Planner</h1>
            <p className="intro">
              Monica Browne Weddings is a wedding planner and event design
              company based in Bowie Maryland.
            </p>
            <p className="intro">
              We provide full service wedding planning, partial service wedding
              planning, and day of wedding coordination.
            </p>
            <p className="intro">
              We help guide you with style and decor ideas, selecting other
              vendors, ceremony design, and of course, the celebration at the
              end.
            </p>
            <p className="intro">
              We take the stress out of the <b>wedding planning process</b>, so
              you don't have to worry about anything.
            </p>
            <p className="intro">
              We help you make the planning process a fun experience, not a
              stressful one.{' '}
            </p>
            <p className="intro">
              Your wedding event must be an event that you'll cherish for the
              rest of your life, and as your event planner, that is our goal.
            </p>
            <p className="intro">
              As one of the top Maryland wedding planners and event planners,
              our job is to guide you through the wedding planning process.
            </p>
            <p className="intro">
              Planning your wedding should be fun, but often times can become
              stressful, leaving some couples frustrated and tired. That's where
              we can help.
            </p>
            <p className="intro">
              We guide you through the process with helpful tips, suggestions
              and our vetted professional services, which also save you time and
              money.
            </p>
            <p className="intro">
              With our 15 years of experience as wedding planners in Maryland we
              are definitely one of the top wedding planners in Maryland that
              can truly bring your vision to life.
            </p>
            <h3 className="center-text">
              Book a 15 minute call with us and see how we can help you as your
              wedding planner
            </h3>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="service-content">
            <h2 className="title">
              Wedding Planning Can Cost a Lot of Time & Energy
            </h2>
            <div className="painpoints">
              <img
                src="images/maryland-wedding-planner-472w.webp"
                alt="Maryland wedding planner"
                loading="lazy"
                width="472"
                height="708"
              />
              <div className="painpoints--content">
                <PainPoints>
                  <li>
                    Time finding a reliable wedding planner and other vendors
                  </li>
                  <li>Time searching for the right wedding venue</li>
                  <li>Time reading and reviewing vendor contracts</li>
                  <li>Time creating and managing your wedding budget</li>
                  <li>Keeping organized and making timely decisions</li>
                  <li>
                    Time creating your wedding timeline, seating charts, and
                    arranging hotels for guests
                  </li>
                  <li>Navigating new Covid-19 protocols for Maryland events</li>
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
              <Button>Book a call</Button>
            </a>
          </div>
        </section>
        <section className="container">
          <div className="service-content">
            <h2 className="title">
              Monica Makes Wedding Planning Simple For Maryland Couples
            </h2>
            <div>
              <Simple>
                <li>
                  <h4>Call Monica</h4>
                  <p>
                    Talk with Monica and see how her wedding planning company
                    can help you with full service, partial service, or day of
                    coordination, and bring your vision to life.
                  </p>
                </li>
                <li>
                  <h4>Create Your Budget</h4>
                  <p>
                    Work out a budget and start planning your wedding details,
                    like decor, ceremony details, reception details.
                  </p>
                </li>
                <li>
                  <h4>Enjoy Your Special Day</h4>
                  <p>Enjoy cherish the moment and enjoy the big day.</p>
                </li>
              </Simple>
            </div>
            <h3 className="center-text">
              Book a 15 minute call with Monica and see how she can help you as
              your wedding planner
            </h3>
            <div className="center">
              <a href={calendly}>
                <Button>Book A Call</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title">Our Wedding Services</h2>
            <Services>
              <div className="wedding-service">
                <img
                  srcSet="images/bride-groom-311w.webp 480w,
                            images/bride-groom-472w.webp 800w"
                  sizes="(max-width: 480px) 480px,
                            800px"
                  src="images/bride-groom-472w.webp"
                  alt="Happily Married Couple"
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="title">Wedding Planning</h3>
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
                <h3 className="title">Wedding Decoration</h3>
              </div>
              <div className="wedding-service">
                <img
                  srcSet="images/wedding-floral-design-472.webp 480w,
                            images/wedding-floral-design-472.webp 800w"
                  sizes="(max-width: 480px) 480px,
                            800px"
                  src="images/wedding-floral-design-472.webp.webp"
                  alt="Wedding table setting design"
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="title">Wedding Floral Design</h3>
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
                autoplay={true}
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
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title">Testimonials</h2>
            <Testimonial>
              Working with Monica as my wedding planner was one of the best
              decisions I made. At the time, I lived in Philadelphia while I was
              planning for my wedding in Washington DC. With Monica’s expertise
              and experience with wedding planning, I was left stress-free on my
              wedding day. Each month, Monica sent me monthly “to-do lists“ ...
            </Testimonial>
            <TestimonialAuthor>Diane</TestimonialAuthor>
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
              src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495884/bride-with-flowers_xahpez.webp"
              alt="Bride with flowers"
              loading="lazy"
              width="472"
              height="708"
            />
            <img
              srcSet="images/bride-groom-311w.webp 480w,
                            images/bride-groom-472w.webp 800w"
              sizes="(max-width: 480px) 480px,
                            800px"
              src="images/bride-groom-472w.webp"
              alt="Happily Married Couple"
              loading="lazy"
              width="472"
              height="708"
            />
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/wedding-cake_jukdnu.webp"
              alt="Bride and Groom"
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
  .content {
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

  .blog-info {
    margin-top: 1rem;
  }

  .painpoints img {
    display: block;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    .content {
      display: block;
      margin: 0 auto;

      .intro {
        max-width: 60rem;
        margin: 1rem auto;
      }
    }

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

  display: block;
  margin: 0 auto;
  text-aling: left;

  img {
    display: block;
    margin: 0 auto;
  }

  h2 {
    margin: 1.5rem auto;
  }

  ul {
    max-width: 40rem;
    margin: 0 auto;
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
`

const PainPoints = styled('ul')`
  padding: 0 2rem;

  @media (min-width: 1000px) {
    li {
      font-size: 1.6rem;
    }
  }
`

const Simple = styled('ul')`
  max-width: 40rem;
  margin: 0 auto;
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
      }
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
    grid-gap: 10px;
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
    grid-gap: 10px;
    max-width: 100%;
    margin: 0 auto;
  }
`
