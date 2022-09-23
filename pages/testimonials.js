import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import { NextSeo } from 'next-seo'
import { Testimonial, TestimonialAuthor } from '../components/Testimonials'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

const Testimonials = () => {
  const SEO = {
    title: 'Testimonials | Monica Browne Weddings',
    description:
      'These are just some of the testimonials that we received from our happily married couples.',
    canonical: 'https://monicabrowneweddings.com/testimonials',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/testimonials',
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
    <>
      <NextSeo {...SEO} />
      <HeroSection
        heroText="Testimonials"
        subText="From Happy Clients"
        backgroundImage="/images/flowers-and-bride-shoes.webp"
        buttonText="Book a Call"
        buttonLink={calendly}
        backgroundHeight="80vh"
      />
      <Main>
        <div className="container">
          <div className="content">
            <h1 className="title">Bride Testimonials</h1>
            <Testimonial>
              Working with Monica as my wedding planner was one of the best
              decisions I made. At the time, I lived in Philadelphia while I was
              planning for my wedding in Washington DC. With Monica’s expertise
              and experience with wedding planning, I was left stress free on my
              wedding day. Each month, Monica sent me monthly “to-do lists“ to
              ensure I remained on task. Thanks to Monica, I was able to find
              vendors to fit my budget. Once vendors were hired for my big day,
              Monica remained in constant communication with them to ensure
              everyone was on the same page. Even though I was no Bridezilla, I
              definitely had my moments. Through those moments, Monica remained
              professional at all times and was able to get me back on track. I
              would definitely recommend Monica’s services to any bride I meet.
              I am looking forward to working with her in the future when my
              sister gets married!
            </Testimonial>
            <TestimonialAuthor>Diane</TestimonialAuthor>

            <Testimonial>
              I met Monica in Summer 2008, while I served as a Bridesmaid for my
              best friend’s wedding. She was able to communicate the wishes of
              the Bride & Groom, so that things would run smoothly. She comes
              highly recommended by not only my friend, but to others & has a
              GREAT Vendor List. Overall, she has a great demeanor & is a
              pleasure to work with.
            </Testimonial>
            <TestimonialAuthor>Donna McIntyre</TestimonialAuthor>

            <div className="center">
              <a href={calendly}>
                <Button>Book a call</Button>
              </a>
            </div>

            <Testimonial>
              I am so thankful that I used Monica Browne Weddings for my rooftop
              wedding in the summer of 2010. It has been 5 years and I still
              have family and friends tell me how beautiful my wedding day was.
              I could not have been more pleased at their work. They listened to
              all my wants and carried them out exactly how I asked them to.
              They were nice, understanding and very easy to work with. They
              kept me on track and made the experience enjoyable. I am very
              particular and I like to be involved in everything however, I was
              able to let go and have them handle everything. I was not
              disappointed at all and my day turned out perfect. I could go on
              and on. I would recommend them over and over again.
            </Testimonial>
            <TestimonialAuthor>Katrina Edmonds</TestimonialAuthor>

            <Testimonial>
              Monica made my wedding day a success. I would recommend their
              services to anyone looking for a group of women that come together
              professionally to make such an important day amazing!!!!
            </Testimonial>
            <TestimonialAuthor>Lisa</TestimonialAuthor>

            <Testimonial>
              Choosing Monica Browne Weddings to meet my needs during one of the
              most important events in my life was a decision that hosts no
              regrets. True professionalism, at its best! While planning a
              wedding can be very stressful and hectic, my experience with
              Monica Browne Weddings was definitely one that was fun and
              exciting! All tasks were completed in a very organized manner and
              with so many things to accomplish, such organization was very
              important. Monica Browne Weddings also referred me to many vendors
              that were equally very professional. As a result, my wedding day
              was truly all that I had dreamed it to be and more! It was at last
              the vivid reality of all of the planning and decision making done
              in the prior months. I am so thankful for the memories I now have
              to cherish for a lifetime. Monica Browne Weddings……..I can’t thank
              you enough!
            </Testimonial>
            <TestimonialAuthor>Teresa Thomas</TestimonialAuthor>

            <Testimonial>
              I am soooo indecisive when it comes to almost anything! Monica was
              super patient and extremely helpful in making my vision come to
              life! I am so thankful for her creative ability and
              professionalism! THANK YOU!!
            </Testimonial>
            <TestimonialAuthor>Aleta</TestimonialAuthor>

            <div className="center">
              <a href={calendly}>
                <Button>Book a call today!</Button>
              </a>
            </div>
          </div>
        </div>
      </Main>
    </>
  )
}

const Main = styled('div')`
  @media (min-width: 768px) {
  }
`
export default Testimonials
