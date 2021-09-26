import dynamic from 'next/dynamic'
import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import { Testimonial, TestimonialAuthor } from '../components/Testimonials'
import Button from '../components/Button'
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
        heroText="Wedding Planning For Busy Maryland Couples"
        subText="We Create Beautiful Weddings For Busy Couples in Maryland"
        buttonText="Book A Video Call"
        backgroundImage="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495883/bride-groom-serious-love_i9lo4u.webp"
        buttonLink={calendly}
        backgroundHeight="100vh"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1 className="title">Maryland Wedding Planner</h1>
            <p className="intro">
              Many busy couples getting married nowadays struggle to find the
              time to plan the wedding they want. We at Monica Browne Weddings
              help couples in Maryland, plan the wedding of their dreams,
              leaving them with more time for their busy schedules. We take the
              stress out of the process, so you don't have to worry about
              anything, except making history.
            </p>
            <div className="center">
              <a href={calendly}>
                <Button>Book a video call</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <h2 className="title">
            Planning A Wedding Can Really Take A Lot Of Time & Energy
          </h2>
          <div className="service-content">
            <div className="painpoints">
              <div className="painpoints--content">
                <PainPoints>
                  <li>Time finding reliable wedding vendors</li>
                  <li>Time searching for the right wedding venue</li>
                  <li>Time reading and reviewing vendor contracts</li>
                  <li>Time Creating and managing your wedding budget</li>
                  <li>Keeping organized and making timely decisions</li>
                  <li>
                    Time creating your wedding timeline, seating charts, and
                    arranging hotels for guests
                  </li>
                  <li>Navigating new Covid-19 protocols</li>
                </PainPoints>
              </div>
            </div>
          </div>
          <h3 className="center-text">
            Book a 15-minute call with us and see how we can help you plan your
            dream wedding
          </h3>
          <div className="center">
            <a href={calendly}>
              <Button>Book a 15 min call</Button>
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
                    Talk with Monica and see how she can help you plan your
                    wedding.
                  </p>
                </li>
                <li>
                  <h4>Create Your Budget</h4>
                  <p>
                    Work out a budget and start planning your wedding details.
                  </p>
                </li>
                <li>
                  <h4>Enjoy Your Special Day</h4>
                  <p>Enjoy your wedding day and cherish the moment.</p>
                </li>
              </Simple>
            </div>
            <h3 className="center-text">
              Book a 15-minute call with us and see how we can help you plan
              your dream wedding
            </h3>
            <div className="center">
              <a href={calendly}>
                <Button>Book A Video Call</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title">Our Services</h2>
            <Services>
              <div className="wedding-service">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495884/bride-groom-happy_xr217b.webp"
                  alt="Happily Married Couple"
                  loading="lazy"
                />
                <h3 className="title">Wedding Planning</h3>
              </div>
              <div className="wedding-service">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/wedding-decor_f3daqm.webp"
                  alt="Wedding Decor and Design"
                  loading="lazy"
                />
                <h3 className="title">Wedding Decoration</h3>
              </div>
              <div className="wedding-service">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/wedding-flower-centerpiece-design_vq2ofj.webp"
                  alt="Wedding Floral Design"
                  loading="lazy"
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
        <section className="container">
          <div className="blog-content">
            <h2 className="title">Latest Posts From Our Blog</h2>
            <div className="blog-posts">
              {data.posts.map((post) => (
                <div key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <a>
                      <div className="blog-post">
                        <img
                          className="blog-img"
                          src={post.coverImage.url}
                          alt={post.title}
                          loading="lazy"
                        />
                        <div className="blog-info">
                          <p>
                            {new Date(post.date).toLocaleDateString('en-us', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </p>
                          <h3>{post.title}</h3>
                          <p>Read more</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
            <div className="center">
              <Link href="/blog">
                <a>
                  <Button>Read More Posts</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="gallery container">
          <h2 className="title">Our Gallery</h2>
          <Gallery>
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495884/bride-with-flowers_xahpez.webp"
              alt="Bride with flowers"
              loading="lazy"
            />
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495884/bride-groom-happy_xr217b.webp"
              alt="Bride and Groom"
              loading="lazy"
            />
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/wedding-cake_jukdnu.webp"
              alt="Bride and Groom"
              loading="lazy"
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
    text-align: center;
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

  @media (min-width: 768px) {
    .content {
      display: block;
      margin: 0 auto;

      .intro {
        max-width: 60rem;
        margin: 0 auto;
      }
    }

    .blog-post {
      display: flex;
      margin-bottom: 2rem;
      margin-right: 2rem;
      max-width: 60rem;
      margin: 0 auto;
      margin-bottom: 2rem;
      align-items: center;

      .blog-img {
        width: 45%;
        margin-right: 5%;
      }

      .blog-info {
        margin-top: 0;
        width: 50%;
        text-align: left;
        p {
          font-size: 0.6rem;
        }
      }

      h3 {
        font-size: 1.5rem;
        font-weight: 500;
      }
    }

    display: block;
    margin: 0 auto;
    text-aling: left;

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

    @media (min-width: 1440px) {
       .blog-info h3 {
        font-size: 2rem;
        font-weight: 500;
      }
  }
`

const PainPoints = styled('ul')`
  padding: 0 2rem;
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
