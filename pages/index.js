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

import ReactPlayer from 'react-player'

const calendly = 'https://calendly.com/mbweddings/30min'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

function Home({ data }) {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <NextSeo />
      <HeroSection
        heroText="Wedding Planner For Busy Maryland Couples"
        subText="We Create Beautiful Weddings For Busy Couples in Maryland"
        backgroundImage="/images/bride-groom-night-photo.webp"
        backgroundHeight="100vh"
        buttonText="book a call today!"
        buttonLink={calendly}
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1 className="title">Professional Wedding Planner in Maryland</h1>
            <p>
              Monica Browne Weddings is one of the best wedding planners in
              Maryland.
            </p>
            <p>We provide:</p>
            <ul className="wedding-services">
              <li>Full-service wedding planning</li>
              <li>
                Day-of wedding coordination services in{' '}
                <Link href="/day-of-wedding-coordinator-bowie-md" passHref>
                  Bowie
                </Link>{' '}
                and{' '}
                <Link href="/day-of-wedding-coordinator" passHref>
                  Washington, DC
                </Link>
              </li>
              <li>Partial planning packages (A La carte services)</li>
              <li>
                Planning for{' '}
                <Link
                  href="/wedding-services/micro-wedding-packages-maryland"
                  passHref
                >
                  Micro Weddings
                </Link>
              </li>
              <li>Planning for Destination weddings</li>
              <li>Special event planning</li>
            </ul>
            <p>
              Planning your dream wedding should be fun and an enjoyable
              experience.
            </p>
            <p>
              But for some busy couples, it can be frustrating and stressful.
            </p>
            <p>
              Some couples are too busy in their day-to-day lives to take the
              time to plan the wedding they want.
            </p>
            <p>
              That's where a professional wedding planner like Monica Browne
              Weddings can help.
            </p>
            <p>
              We're a full-service event planning company that will take care of
              your entire wedding planning process.
            </p>
            <p>
              Our{' '}
              <Link
                href="/wedding-services/full-service-wedding-planner"
                passHref
              >
                full-service planning
              </Link>{' '}
              can give you the freedom and flexibility to plan your event and
              maintain your busy lifestyle.
            </p>
            <p>
              We also give you helpful tips and suggestions, which will save you
              from worrying about all the essential and unique details.
            </p>
            <p>
              Our talented team of professionals will work closely with you to
              create a custom plan that fits your vision and budget.
            </p>
            <p>
              As professional event planners, we will help you choose the best
              vendors, pick a theme and style for your event, and handle all the
              small details enjoy yourself.
            </p>
            <p>We will help you plan the perfect wedding.</p>
            <p>
              We will help make it a meaningful and happy, fun experience, not a
              stressful one.
            </p>
            <p>
              With our 15 years of experience as event planners, we are one of
              the top wedding planners in the Maryland area that can bring your
              vision to life.
            </p>
            <p>
              Check out some of our{' '}
              <a
                href="https://www.google.com/search?client=firefox-b-1-d&q=monica+browne+weddings#lrd=0x89b7eb901b80745b:0x27f704e516f44ed0,1,,,"
                target="_blank"
              >
                5-star reviews
              </a>{' '}
              on Google.
            </p>
            <p>
              If you are looking for a wedding event planner in Maryland, DC,
              and Virginia, please contact us today to schedule a consultation.
            </p>
            <p>We are happy to help you make history.</p>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call today!</Button>
              </a>
            </div>
            <p className="center-text">
              Book a 15-minute no pressure call with Monica and see she can help
              you with wedding planning.
            </p>
          </div>
        </section>

        <section className="container">
          <div className="service-content">
            <h2 className="title">
              Planning Your Wedding Can Cost a Lot of Time & Energy
            </h2>
            <div className="painpoints">
              <img
                src="images/maryland-wedding-planner-472w.webp"
                alt="Wedding planner - Maryland"
                loading="lazy"
                width="472"
                height="708"
              />
              <div className="painpoints--content">
                <PainPoints>
                  <li>
                    Time finding a reliable company or person you can trust
                  </li>
                  <li>Time searching for the right venue</li>
                  <li>Time reading and reviewing vendor contracts</li>
                  <li>Time creating and managing your budget</li>
                  <li>Keeping organized and making timely decisions</li>
                  <li>
                    Time creating your timeline, seating charts, and arranging
                    hotels for guests
                  </li>
                  <li>Navigating new safety protocols for Maryland events</li>
                </PainPoints>
              </div>
            </div>
          </div>
          <div className="center">
            <a href={calendly}>
              <Button>Book a call Today!</Button>
            </a>
          </div>
          <p className="center-text">
            Book a 15 minute call with Monica and see how she and her team can
            help you plan your wedding.
          </p>
        </section>
        <section className="container">
          <div className="service-content get-started">
            <h2 className="title">Monica Makes the Planning Process Simple</h2>
            <div>
              <Simple>
                <li>
                  <h4>Call Monica</h4>
                  <p>
                    Talk with Monica and see how her company can help you bring
                    your vision to life.
                  </p>
                </li>
                <li>
                  <h4>Create Your Budget</h4>
                  <p>
                    Work out a budget and start planning the details, like
                    decor, ceremony details, reception details, guest list, etc.
                  </p>
                </li>
                <li>
                  <h4>Enjoy Your Special Day</h4>
                  <p>Cherish the moment and enjoy your special day.</p>
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
        <section className="container">
          <div className="service-content">
            <h2 className="title">How Monica Can Help You</h2>
            <PainPoints>
              <ul>
                <li>Help you get your budget together and manage it</li>
                <li>Keep you organized to ease unnecessary stress</li>
                <li>Help to research and select wedding venues and vendors</li>
                <li>
                  Organize your wedding rehearsal and communicate with your
                  wedding party
                </li>
              </ul>
              <ul>
                <li>Read and negotiate vendor contracts</li>
                <li>Communicate with your wedding party and guests</li>
                <li>Handle any problems that may come up</li>
                <li>Be your resource</li>
                <li>Plus more</li>
              </ul>
            </PainPoints>
            <div className="center">
              <a href="tel:+2406653350">
                <Button>Call (240) 665-3350</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div>
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
              <Link href="/wedding-services" passHref>
                <Button>More Services</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="container">
          <h2 className="title">
            Watch This Beautiful Wedding Video From One Of Our Happy Couples
          </h2>
          <div className="">
            <ReactPlayer
              url="https://natashaweddingvideo.s3.amazonaws.com/wedding-video.mp4"
              controls
              width="100%"
              height="auto"
            />
          </div>
          <div className="center">
            <a href={calendly}>
              <Button>Book a call Today!</Button>
            </a>
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
              <Link href="/testimonials" passHref>
                <Button>More Testimonials</Button>
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
            <Link href="/wedding-gallery" passHref>
              <Button>See More Pictures</Button>
            </Link>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title">
              Why Hire Monica Browne Weddings as Your Maryland Wedding Planner?
            </h2>
            <p>
              Monica Browne Weddings is one of the top Maryland wedding
              planners.
            </p>
            <p>
              No, we are not in the Washington Post or Martha Stewart Weddings,
              and that's not our focus.
            </p>
            <p>
              Our only focus is to provide our clients with wedding planning
              services that will help you save time and money and assist in any
              way possible and create your dream wedding.
            </p>
            <p>
              See our{' '}
              <a
                href="https://www.google.com/search?client=firefox-b-1-d&q=monica+browne+weddings#lrd=0x89b7eb901b80745b:0x27f704e516f44ed0,1,,,"
                target="_blank"
                rel="nonreferrer"
              >
                5-star reviews
              </a>
              .
            </p>
            <p>
              When you hire us, you hire an experienced planning company with
              over 15 years in the event industry and{' '}
              <b>someone you can trust</b>.
            </p>
            <p>
              You get a company with incredible knowledge at your disposal, a
              credible resource, and a team that will do whatever it takes to
              ensure your wedding goes off without any issues.
            </p>
            <p>
              We are here to help you plan one of the biggest days of your life
              and make sure you enjoy every moment.
            </p>
            <p>
              You can count on us to be there every step of the way, and we look
              forward to working with you.
            </p>
          </div>
          <div className="center">
            <a href="tel:+2406653350">
              <Button>Call (240) 665-3350</Button>
            </a>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title">FAQs</h2>
            <h3>#1. How Much Does a Wedding Cost in the Washington DC Area?</h3>
            <p>
              Getting married in the Washington DC area (Maryland, DC, and
              Virginia) can cost{' '}
              <Link
                href="/blog/how-much-does-a-100-person-wedding-cost"
                passHref
              >
                $28,000 - $45,000
              </Link>{' '}
              and up. Most of your costs depend on how much your venue and
              caterer charge, plus how many guests you invite.
            </p>
            <p>
              Other costs may include your photographer, ceremony and reception
              decorations, flowers, transportation, attire, and the rings.
              Additional costs may include a wedding planner, a photographer,
              ceremony and reception decorations, flowers, transportation, your
              dress, and the rings.
            </p>
            <h3>#2. Can I Plan My Wedding Myself?</h3>
            <p>You can definitely plan your own wedding.</p>
            <p>
              Many brides choose to take on planning their big day on their own,
              thinking they would save money. If you think you have the time to
              plan your wedding, go for it. It's a lot of work and a lot of
              time, and you will need some help. You will need the help of
              family and friends you can trust.
            </p>
            <p>
              If you think you are too busy and may not have the time, consider
              hiring a full service wedding planner or a day of wedding
              coordinator. Read this blog post to see which professional can
              assist you the best.
            </p>
            <h3>#3. Can a Wedding Planner Save Me Money?</h3>
            <p>
              Some brides consider wedding planners a luxury, but they can save
              you money in the long run. A good wedding planner will have
              connections with vendors and be able to get you discounts that you
              might not be able to get on your own. They will also be able to
              help you stay within your budget and avoid any last-minute
              financial surprises.
            </p>
            <h3>
              #4. What is the Difference Between a Wedding Planner and a Day-of
              Coordinator?
            </h3>
            <p>
              Wedding planners are professionals that can help you plan every
              piece of the planning process. This would include planning your
              ceremony, cocktail hour, and reception.
            </p>
            <p>
              They will help you select the best vendors like DJs, caterers,
              decorators, transportation providers, and more.
            </p>
            <p>
              A day-of coordinator is a professional that will manage the actual
              day of your wedding. They become the point of contact for all your
              vendors, the venue, and all your guests.
            </p>
            <p>
              They keep you out of the loop to have a stress-free wedding day.
            </p>
            <p>
              Read{' '}
              <Link href="/blog/wedding-planner-vs-coordinator" passHref>
                this
              </Link>{' '}
              to learn more.
            </p>
            <h3>#5. Do You Plan Weddings in Washington DC and Virginia?</h3>
            <p>Yes.</p>
            <p>
              Even though we are Maryland wedding planners, we offer
              full-service and partial-service event planning to couples
              throughout the DMV area.
            </p>
            <p>
              We have planned weddings in Washington DC and Northern Virginia
              and can work with you regardless of location. Contact us today to
              get started planning your dream wedding!
            </p>
          </div>
          <div className="center">
            <a href={calendly}>
              <Button>Book a call Today!</Button>
            </a>
          </div>
        </section>
      </Main>
    </div>
  )
}

export default Home

const Main = styled('main')`

  ul.wedding-services {
    margin-left: 3rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  li {
    list-style-type: disc;
  }

  @media (min-width: 768px) {

    .service-content {
    padding: 2rem;
  }

    .content {
      text-align: left;
      max-width: 60rem;
      margin: 0 auto;
    }
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
    margin-bottom: 3rem;
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

    .service-content {

      img {
        display: none;
      }

      display: block;
      max-width: 60rem;
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
      top: 0.2rem;
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
