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

function Annapolis({ data }) {
  const [isOpen, setOpen] = useState(false)
  const SEO = {
    title: 'Indian Wedding Planning In Maryland and Washington, DC',
    description:
      'We are exclusive full-service and partial-service Indian wedding planners in Maryalnd and DC. Contact us today to start planning you fabulous wedding!',
    canonical: 'https://monicabrowneweddings.com/indian-wedding-planner',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/indian-wedding-planner',
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
        heroText="Indian Wedding Planning Services"
        subText="We create beautiful Indian weddings for busy South Asian couples in living in Maryland and DC."
        buttonText="Book a Call today!"
        buttonLink={calendly}
        backgroundHeight="100vh"
        backgroundImage="/images/indian-wedding-background-stage.jpg"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1 className="title">
              Indian Wedding Planner in Maryland and Washington, DC
            </h1>
            <p>
              We believe that your wedding is a reflection of your love story.
              That's why we infuse every Indian wedding with the richness of
              tradition, the vibrancy of colors, the elegance of designs, and
              the warmth of hospitality. Our services range from full-service
              planning to day-of coordination, tailored to bring your vision to
              life.
            </p>
            <p>
              Not sure where to start? Our consultation services provide
              guidance, expertise, and advice to help you navigate your way to a
              picture-perfect Indian wedding.
            </p>
            <div className="center">
              <a href="tel:+2406653350">
                <Button>Call (240) 665-3350</Button>
              </a>
            </div>
          </div>
        </section>
        <PainSection
          title="Planning Your Wedding Can Be Extremely Stressful "
          src="/images/indian-wedding-ceremony.jpg"
          alt="Indian wedding ceremony."
          width="472"
          height="708"
          pain1="Time looking on for the best wedding vendors"
          pain2="Time finding the right event professionals to help you"
          pain3="Time trying to plan and style a wedding, something you've never done before"
          pain4="Time looking for a venue"
          pain5="Making timely decisions and staying organized"
          pain6="Satisfying both sides fo the family"
        />
        <section className="container">
          <div className="content">
            <h2 className="title">
              Why Choose Monica Browne as Your Indian Wedding Planner?
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
            <h2 className="title">South Asian Wedding Planning Services</h2>
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
                <h3 className="title">Week of Coordination</h3>
              </div>
              <div className="wedding-service">
                <img
                  src="/images/maryland-wedding-planner-472w.webp"
                  alt="Micro weddings by Monica Browne Weddings"
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="title">Special Events Planning</h3>
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
              We Make Planning Your Indian Wedding Simple and Stress Free
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
          <h3>
            #1. What services do you provide as an Indian wedding planner?
          </h3>
          <p>
            As a full-service Indian wedding planner, we provide comprehensive
            planning, including venue selection, vendor management, decor
            detailing, and menu curation. We also offer day-of coordination and
            consultation services.
          </p>
          <h3>
            #2. Do you have experience planning weddings with specific Indian
            cultural traditions?
          </h3>
          <p>
            Absolutely, we have vast experience in planning weddings across a
            variety of Indian cultural traditions, including but not limited to
            Punjabi, Gujarati, South Indian, Bengali, and Marathi weddings. We
            respect and understand the nuances of different regional and
            religious traditions.
          </p>
          <h3>
            #3. Can you handle the unique needs of a destination wedding within
            the DC area?
          </h3>
          <p>
            Yes, we can. We are well-versed in the logistics required for
            planning a successful destination wedding. From securing the perfect
            venue to arranging for accommodation and transport for guests, we
            can manage all aspects to ensure a smooth and memorable experience.
          </p>
          <h3>
            #4. Can you assist with pre-wedding ceremonies, such as Sangeet,
            Mehndi, and Haldi?
          </h3>
          <p>
            Absolutely. We understand the importance of pre-wedding ceremonies
            in an Indian wedding and can assist in planning and organizing these
            events as per your cultural traditions and personal preferences.
          </p>
          <h3>
            #5. Do you provide decor and food catering services, or do we need
            to hire separate vendors for that?
          </h3>
          <p>
            We have an extensive network of trusted vendors for catering, decor,
            photography, entertainment, and more. We can connect you with these
            professionals to meet your specific needs. However, if you have
            preferred vendors, we can certainly work with them.
          </p>
          <div className="center">
            <a href="tel:+2406653350">
              <Button>Call (240) 665-3350</Button>
            </a>
          </div>
          <h3>
            #6. What is your process for customizing a wedding to fit our unique
            needs and vision?
          </h3>
          <p>
            We start with an in-depth consultation to understand your vision,
            preferences, and cultural traditions. Based on your inputs, we will
            craft a customized wedding plan covering all aspects of your wedding
            celebrations, ensuring it reflects your unique love story.
          </p>
          <h3>#7. How do you handle last-minute changes or emergencies?</h3>
          <p>
            We understand that weddings can be dynamic and changes may come up.
            We have a highly experienced team capable of handling last-minute
            adjustments or emergencies, ensuring your wedding runs as smoothly
            as possible.
          </p>
          <h3>
            #8. What is your pricing structure for Indian wedding planning?
          </h3>
          <p>
            Our pricing structure is flexible and depends on the scale of the
            wedding, services required, and complexity of planning. After an
            initial consultation, we can provide a customized quote based on
            your specific needs.
          </p>
          <h3>#9. Can you help with managing the guest list and RSVPs?</h3>
          <p>
            Yes, we can. We offer services to manage the guest list, send out
            invitations, and track RSVPs to ensure you have a clear picture of
            your guest count and any special requirements they may have.
          </p>
          <h3>
            #10. Do you have references from previous clients or a portfolio of
            past weddings?
          </h3>
          <p>
            Absolutely. We believe that our work speaks for itself. We are happy
            to share references from previous clients and a portfolio showcasing
            our work at past weddings. We take pride in the weddings we've
            planned and the satisfaction of our clients.
          </p>
          <div className="center">
            <a href={calendly}>
              <Button>Book a 15 min call</Button>
            </a>
          </div>
        </section>
      </Main>
    </div>
  )
}

export default Annapolis

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
