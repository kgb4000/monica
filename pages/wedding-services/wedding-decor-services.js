import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../../components/HeroSection'
import Button from '../../components/Button'
import { NextSeo } from 'next-seo'
import Simple from '../../components/Simple'
import PictureBox from '../../components/picture-box'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

function WeddingDecorations() {
  const SEO = {
    title: 'Best Wedding Decor Services in DC, Maryland, and Virginia.',
    description:
      'Looking for the best wedding decor services for your dream wedding? Monica Browne Weddings can get it done! Contact Monica today!',
    canonical:
      'https://monicabrowneweddings.com/wedding-services/wedding-decor-services',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/wedding-services/wedding-decor-services',
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
        heroText="Wedding Decorations for Busy Couples"
        subText="The Best Wedding Decorators and Event Design Services in Maryland"
        backgroundImage="/images/wedding-reception-decor.webp"
        backgroundHeight="100vh"
        buttonText="Call (240) 665-3350"
        buttonLink="tel:+2406653350"
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1>Wedding Décor Services</h1>
            <p>
              If you're looking for wedding design and need a professional
              wedding decorator near you, then Monica Browne Weddings are the
              professional for you.
            </p>
            <p>
              <Link href="/" passHref>
                <a>Monica Browne Weddings</a>
              </Link>{' '}
              is a wedding planner in the DMV area and specialize in wedding
              planning, wedding décor, and wedding coordination services.
            </p>
            <p>
              They have been in the wedding industry for over 15 years, creating
              beautiful and stylish events for modern busy couples in DMV.
            </p>
            <div className="center">
              <a href={calendly} rel="noreferrer">
                <Button>Book a call Today!</Button>
              </a>
            </div>
            <h2>We Make Your Wedding Day Your Special Event</h2>
            <p>
              Your wedding decorations may not be the most important thing on
              your to-do list, but are still an important part of this momentous
              occasion.
            </p>
            <p>
              Your wedding decorations will set the tone and the mood for you
              and your guest.
            </p>
            <p>
              How you decorate for your wedding is what you, your family, and
              your guests will remember for the rest of their lives.
            </p>
            <p>Let us help make your big day a beautiful one.</p>
            <div className="center">
              <a href={calendly} rel="noreferrer">
                <Button>Book a call</Button>
              </a>
            </div>
            <PictureBox
              Image1="/images/dc-wedding-planner.webp"
              alt1="Gold tree wedding centerpiece"
              width="472"
              height="708"
              Image2="/images/tall-wedding-flowers-centerpiece.webp"
              alt2="Tall wedding flowers centerpiece"
              width2="472"
              height2="708"
            />
            <img
              src="/images/black-red-wedding-decor.webp"
              alt="Wedding decoration services from Monica Browne"
              loading="lazy"
            />
            <h2>Wedding Decorations</h2>
            <p>
              Your wedding decorations are anything that you want to make your
              wedding your own wedding.
            </p>
            <p>Your wedding decorations may consists of:</p>
            <ul>
              <li>A tent</li>
              <li>Bouquets</li>
              <li>Custom up-lighting</li>
              <li>Signature drinks at the bar</li>
              <li>A lounge area for your guests and wedding party</li>
              <li>Custom flower arch</li>
              <li>Custom table centerpieces</li>
              <li>Custom champagne flutes</li>
              <li>Dance floor</li>
              <li>Custom tables and chairs</li>
            </ul>
            <p>
              As top wedding designers in Maryland, we can handle all your
              wedding decor needs.
            </p>
            <p>
              We can take care of setting up your dance floor, string lights,
              and arches to decorating your entire event space with flowers and
              table centerpieces.
            </p>
            <p>
              Our vision is to create and design the wedding you want. The
              overall look should be the look you want.
            </p>
            <p>The overall look should be the look you want.</p>
            <p>
              Your wedding is your special day, and you are the one that decides
              how you want it to look.
            </p>
            <div className="center">
              <a href={calendly} rel="noreferrer">
                <Button>Book a call today!</Button>
              </a>
            </div>
            <h2>
              Why Hire Monica Browne Weddings for Your Wedding Decorations?
            </h2>
            <p>
              How many people have the time, creativity, and motivation to
              decorate their wedding?
            </p>
            <p>
              It's not as simple as some may think, but it's not the same as
              decorating for a birthday party.
            </p>
            <p>Everything has to be perfect and set up just right.</p>
            <p>
              The flowers have to be arranged a certain way, the colors must
              match, and so much more.
            </p>
            <p>
              It is so much easier to hire a professional wedding decorator to
              handle all the decorative details. It can be extremely frustrating
              and exhausting for someone who has never done this type of work
              before. Here are the main benefits of hiring a wedding decorator:
            </p>
            <PictureBox
              Image1="/images/tea-lights.webp"
              alt1="Gold tree wedding centerpiece"
              width="472"
              height="708"
              Image2="/images/tall-wedding-flowers-centerpiece.webp"
              alt2="Tall wedding flowers centerpiece"
              width2="472"
              height2="708"
            />
            <ol>
              <li>
                <h3>Let a Professional Decorator Handle Your Decorations</h3>
                <p>
                  Monica Browne Weddings can take care of your event design for
                  you and relieve your stress. The best part is that
                  professional wedding decorators charge less than you would
                  expect because they will do all the leg work for you.
                </p>
                <p>
                  They are professionals who know what they're doing and will
                  make sure everything goes smoothly with no surprises on your
                  big day. Professional wedding decorators also provide
                  extensive services such as designing the entire look of your
                  reception, coordinating colors, table settings, floral
                  arrangements, and much more!
                </p>
                <p>
                  You won't need to worry about any aspect of decoration because
                  a professional wedding decorator has already taken care of it
                  for you. Just sit back, relax and enjoy your wedding day!
                </p>
              </li>
              <li>
                <h3>Help Decide How Your Wedding Should Look</h3>
                <p>
                  You can choose anything you want from a rustic theme such as
                  an old barnyard and woodsy elements or a classic traditional
                  wedding with bohemian-styled flowers. There are so many
                  different styles to choose from, including modern, vintage,
                  and chic, which will all have clean lines, soft colors, and
                  ornate or simple accents. You can find inspiration for your
                  wedding online (Pinterest) or in magazines which you can show
                  us to get an idea of what you want.
                </p>
              </li>
              <li>
                <h3>Completely Customizable</h3>
                <p>
                  Most people already have an idea of what their wedding should
                  look like. Although you can envision a beautiful display in
                  your head, you may not know how to achieve the look. However,
                  a professional decorator can help you design the settings
                  exactly how you imagined it, so your wedding will have a
                  beautiful all-around display.
                </p>
              </li>
              <li>
                <h3>Competitive Prices</h3>
                <p>
                  We believe we are competitively priced compared to other
                  wedding decorators in our area. Our price gives you the best
                  service, and you can trust us to do what we do best.
                </p>
                <p>
                  Our decoration prices depend on several factors. These
                  include:
                </p>
                <ul>
                  <li>The location of your wedding and reception</li>
                  <li>How many guests are in attendance</li>
                  <li>
                    How difficult it would be to find your decorations and
                    create them
                  </li>
                  <li>
                    The time it takes to set up and breakdown everything at your
                    event
                  </li>
                </ul>
              </li>
              {/* <img
                src="/images/flowers-in-pavillion.webp"
                alt="Flowers in pavillion - Wedding decoration services by Monica Browne"
                loading="lazy"
              /> */}
              <li>
                <h3>We Take Care of Getting the Decorations</h3>
                <p>
                  When you hire Monica Browne Wedding, you don't have to worry
                  about getting the decorations. We arrange all of that for you.
                  We coordinate with all the vendors to bring in items like
                  tents, chairs, and other furniture, so you don't have to. All
                  you have to do is get married and enjoy the rest of your day.
                </p>
              </li>
              <li>
                <h3>Set-Up / Breakdown</h3>
                <p>
                  We're sure you don't want any parts of setting up tables,
                  chairs, floral design, or even breaking them down after the
                  wedding on your wedding day. That's where we come in. Monica
                  and her team will make sure your decorations are the way you
                  planned and break down at the end. You have nothing to worry
                  about.
                </p>
              </li>
            </ol>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call today!</Button>
              </a>
            </div>
            <PictureBox
              Image1="/images/beautiful-bride-flowers.webp"
              alt1="Bride holding beutiful flowers"
              width="472"
              height="708"
              Image2="/images/maryland-wedding-planner-472w.webp"
              alt2="Outside table setup for outdoor wedding."
              width2="472"
              height2="708"
            />
            <section>
              <div className="service-content get-started">
                <h2>How To Get Started</h2>
                <Simple>
                  <li>
                    <h4>Contact Us</h4>
                    <p>Talk to Monica about your ideas for wedding decor.</p>
                  </li>
                  <li>
                    <h4>Create Your Budget</h4>
                    <p>
                      Work out your wedding decorations budget and plan the
                      details
                    </p>
                  </li>
                  <li>
                    <h4>Enjoy Your Wedding</h4>
                    <p>
                      We'll set up and break down everything. You just enjoy
                      your big day.
                    </p>
                  </li>
                </Simple>
                <div className="center">
                  <a href={calendly} rel="noreferrer">
                    <Button>Book a call today!</Button>
                  </a>
                </div>
              </div>
            </section>
            <h2>
              What Will Monica Browne Weddings Do as Your Wedding Decorator?
            </h2>
            <p>
              As your wedding decorator, we will help you design the wedding you
              want. We will work closely with you to choose the right
              decorations to set the mood and tone of your wedding.
            </p>
            <p>
              Remember, this is your wedding. We are just here to help guide you
              through the process.
            </p>
            <h2>The Design Process</h2>
            <p>Our process begins with a complimentary consultation.</p>
            <p>
              Here we discuss your ideas, style, theme, colors, etc. We will
              also discuss your thoughts on the items listed below and develop a
              plan and a budget that fits your vision.{' '}
            </p>
            <p>
              Each of these services can be provided a la carte or is completely
              customizable.
            </p>
            <ul>
              <li>Ceremony Decor</li>
              <li>Reception Decor</li>
              <li>Ceremony Backdrops/Canopies</li>
              <li>Bouquets and Boutonnieres</li>
              <li>Floor plan design</li>
              <li>Linens</li>
              <li>Furniture</li>
              <li>Invitations</li>
              <li>Centerpieces</li>
              <li>Custom Backdrops</li>
              <li>Wall and Ceiling Draping</li>
              <li>Lighting</li>
              <li>Photo stations</li>
              <li>Stage Designs</li>
              <li>
                Unique table decorations (Cake table, Guest Sign-in table,
                Sweetheart Couple/Head Table, Candy Buffet table, etc.)
              </li>
              <li>Complete Set Up and Break Down management</li>
              <li>Ceremony Decor</li>
              <li>
                Managing vendor rentals, contracts, and returns (tents,
                specialty linens, staging, etc. if necessary)
              </li>
            </ul>
            <img
              src="/images/wedding-table-setting-with-flowers.webp"
              alt="Wedding decoration services from Monica Browne"
              loading="lazy"
            />
            <h2>What Our Clients Say About Our Services</h2>
            <p>
              We were fortunate to work with clients that loved what we did for
              them. We're sure you will too. Read some of our{' '}
              <Link href="/testimonials" passHref>
                <a>testimonials</a>
              </Link>{' '}
              on our website.
            </p>
            <div className="center">
              <a href={calendly} rel="noreferrer">
                <Button>Book a call today!</Button>
              </a>
            </div>
          </div>
        </section>
      </Main>
    </div>
  )
}

export default WeddingDecorations

const Main = styled('div')`
  h1 {
    max-width: 50rem;
  }

  .center-text {
    max-width: 40rem;
    padding: 1rem 2rem;
    text-align: center;
    margin: 0 auto;
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
