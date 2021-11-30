import Link from 'next/link'
import styled from 'styled-components'
import { LocalBusinessJsonLd } from 'next-seo'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

const cities = [
  { title: 'Maryland', path: '/' },
  { title: 'Annapolis', path: '/annapolis' },
  { title: 'Bethesda', path: '/bethesda' },
  { title: 'Bowie', path: '/bowie' },
  { title: 'Chevy Chase', path: '/chevy-chase' },
  { title: 'Crofton', path: '/crofton' },
  { title: 'Davidsonville', path: '/davidsonville' },
  { title: 'Glenn Dale', path: '/glenn-dale' },
  { title: 'Mitchellville', path: '/mitchellville' },
  { title: 'Potomac', path: '/potomac' },
  { title: 'Rockville', path: '/rockville' },
  { title: 'Severna Park', path: '/severna-park' },
  { title: 'Silver Spring', path: '/silver-spring' },
  { title: 'Washington DC', path: '/washington-dc' },
  { title: 'Woodmore', path: '/woodmore' },
]

const Footer = () => {
  return (
    <>
      <LocalBusinessJsonLd
        type="LocalBusiness"
        id="http://monicabrowneweddings.com"
        name="Monica Browne Weddings"
        description="Monica Browne Weddings is one of the best wedding planners in
            Maryland, also serving couples in DC and surrounding areas. We offer
            full service event planning, partial service event planning, day of
            coordination, event design, and floral design services. If you are a
            busy couple and need help from one of the top shelf wedding
            planners, or if you just need some help and guidance, please don't
            hesitate to reach out to us.You can book a call with us anytime."
        url="http://monicabrowneweddings.com"
        telephone="+12406653350"
        address={{
          addressLocality: 'Bowie',
          addressRegion: 'MD',
          postalCode: '20720',
          addressCountry: 'US',
        }}
        geo={{
          latitude: '39.013313',
          longitude: '-76.776924',
        }}
        images={[
          'https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/walking-down-aisle_o4wklu.webp',
          'https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495884/bride-with-flowers_xahpez.webp',
          'https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/wedding-cake_jukdnu.webp',
        ]}
        openingHours={[
          {
            opens: '09:00',
            closes: '17:00',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
          },
        ]}
        rating={{
          ratingValue: '5',
          ratingCount: '12',
        }}
        review={[
          {
            author: {
              type: 'Person',
              name: ' Robert Bannister',
            },
            reviewBody:
              'Monica Browne Weddings was referred to us by a friend. From the start we knew Monica was a good fit for our vision. The wedding day could not have been more perfect! Everything about it exceeded expectations, which were already high. From the start, she listened closely to what we wanted. She thought of ways to make it happen with our budget in mind. She had incredibly useful connections to vendors for what we needed, and in many instances we used those she recommended. Her team worked like a well oiled machine. There were no concerns the day of or leading up to the wedding that stemmed from the work that she was doing. The added benefit was Monica herself. She was always professional, friendly, and somehow familiar though we’d only just met. She has a lasting effect. I highly recommend her for anyone’s wedding planning needs.',
            reviewRating: {
              bestRating: '5',
              ratingValue: '5',
              worstRating: '1',
            },
            author: {
              type: 'Person',
              name: 'R Marsh',
            },
            reviewBody:
              'Monica Browne Weddings did a great job coordinating my husband’s 50th birthday party!  The team was organized and very professional. I would definitely choose Monica Browne Weddings for my next event.',
            reviewRating: {
              bestRating: '5',
              ratingValue: '5',
              worstRating: '1',
            },
            author: {
              type: 'Person',
              name: 'Tastee Kreation',
            },
            reviewBody:
              "I've had the pleasure of working with Monica Browne Weddings on two occasions. Her work is phenomenal and the floral arrangements were absolutely stunning! The customer service and level of professionalism is outstanding and help the clients feel like family.",
            reviewRating: {
              bestRating: '5',
              ratingValue: '5',
              worstRating: '1',
            },
            author: {
              type: 'Person',
              name: 'Kimberly Hooper-Twumasi',
            },
            reviewBody:
              "Ms. Browne came as a recommendation from my wedding cake designer and I couldn't be happier. Ms. Browne was prompt, responsive, and incredibly knowledgeable about flowers and design. She kept me updated and sent texts of her selections from the flower market the week of my wedding. She delivered my flowers the day before my event with thorough care instructions and carefully packaged. I would, and have recommended Ms. Browne for additional events and will be using her for my wedding reception in 2022.",
            reviewRating: {
              bestRating: '5',
              ratingValue: '5',
              worstRating: '1',
            },
            author: {
              type: 'Person',
              name: 'T Thomas',
            },
            reviewBody:
              'If you are looking for a professional Wedding/Event Planner, look no further! Monica Browne Weddings has been my go to business for over 15 years. From the planning to the wedding date, the experience was stress free and everything imagined. Her services have never failed to exceed all expectations. Additionally, I have worked with Monica for eye-catching, fresh floral arrangements. And i must say- I genuinely appreciate that she is very attentive to details. Monica Browne Weddings comes highly recommended!',
            reviewRating: {
              bestRating: '5',
              ratingValue: '5',
              worstRating: '1',
            },
            author: {
              type: 'Person',
              name: 'Erica Stanton',
            },
            reviewBody:
              'Thanks to Monica Browne Weddings they have brought our vision to life beyond our expectation for all of our events to include birthday parties, weddings and corporate functions.  Monica Browne and her team are innovators who for focus on the experience of not only the event hosts but also the guests to ensure a positive lasting impression.  Every detail is intricately thought out and executed resulting in a produced and well managed event.  Monica provides both internal and vendor approved external services and has a true gift for floral design.  If you are seeking a professional who has the experience, innovation and passion to manifest your vision you have found your match with Monica Browne Weddings.',
            reviewRating: {
              bestRating: '5',
              ratingValue: '5',
              worstRating: '1',
            },
            author: {
              type: 'Person',
              name: 'Ava Parker-Preston',
            },
            reviewBody:
              'Awesome service. Monica handled everything from start to finish. I didn’t have to worry about a thing.',
            reviewRating: {
              bestRating: '5',
              ratingValue: '5',
              worstRating: '1',
            },
            author: {
              type: 'Person',
              name: 'Tammy Fprtson',
            },
            reviewBody:
              'Monica was my planner for my 50th birthday party    and I was Worry free i just Told her what i was Looking for and she did everything....all i had To was show thanks a bunch',
            reviewRating: {
              bestRating: '5',
              ratingValue: '5',
              worstRating: '1',
            },
            author: {
              type: 'Person',
              name: 'Teresa Thomas',
            },
            reviewBody:
              'Choosing Monica Browne Weddings to meet my needs during one of the most important events in my life was a decision that hosts no regrets. True professionalism, at its best! While planning a wedding can be very stressful and hectic, my experience with Monica Browne Weddings was definitely one that was fun and exciting! All tasks were completed in a very organized manner and with so many things to accomplish, such organization was very important. Monica Browne Weddings also referred me to many vendors that were equally very professional. As a result, my wedding day was truly all that I had dreamed it to be and more! It was at last the vivid reality of all of the planning and decision making done in the prior months. I am so thankful for the memories I now have to cherish for a lifetime. Monica Browne Weddings……..I can’t thank you enough!',
            reviewRating: {
              bestRating: '5',
              ratingValue: '5',
              worstRating: '1',
            },
          },
          {
            author: {
              type: 'Person',
              name: 'Ashley Lowe',
            },
            reviewBody:
              "Monica and her team are amazing!!!.words will never express my gratitude for her amd her services before and during my big day! Finding someone who pays as close as attention to very very close details and minute issues the way I do is difficult and she nailed it every time ,completely putting my mind at ease that on our big day EVERY and I mean EVERY little thing was executed perfectly  to my liking and planning. I wasn't interested such as findimg a wedding planner because I enjoyed the planning but to have someone be on top of everything during my big day so I could completely relax and enjoy.the moment bc it sure flies by! Monica also did my flowers and they were gorgeous!!! If there's 1 piece of must have advice for a bride to be its hands down a day of coordinator and better yet Monica Browne,  I felt like I had a big sister thru it all!",
            reviewRating: {
              bestRating: '5',
              ratingValue: '5',
              worstRating: '1',
            },
          },
          {
            author: {
              type: 'Person',
              name: 'Katrina Edmonds',
            },
            reviewBody:
              'I am so thankful that I used Monica Browne Weddings for my rooftop wedding in the summer of 2010. It has been 5 years and I still have family and friends tell me how beautiful my wedding day was. I could not have been more pleased at their work. They listened to all my wants and carried them out exactly how I asked them to. They were nice, understanding and very easy to work with. They kept me on track and made the experience enjoyable. I am very particular and I like to be involved in everything however, I was able to let go and have them handle everything. I was not disappointed at all and my day turned out perfect. I could go on and on. I would recommend them over and over again.',
            reviewRating: {
              bestRating: '5',
              ratingValue: '5',
              worstRating: '1',
            },
          },
        ]}
        aggregateRating={{
          ratingValue: '5',
          reviewCount: '11',
        }}
        areaServed={[
          {
            geoMidpoint: {
              latitude: '38.89511',
              longitude: '-77.03637',
            },
            geoRadius: '1000',
          },
          {
            geoMidpoint: {
              latitude: '38.978443',
              longitude: '-76.492180',
            },
            geoRadius: '1000',
          },
        ]}
      />
      <div className="footer-container">
        <Decription>
          <h3>Monica Browne Weddings</h3>
          <p>
            Monica Browne Weddings is one of the best wedding planners in
            Maryland, also serving couples in DC and surrounding areas. We offer
            full service event planning, partial service event planning, day of
            wedding coordination, event design, and floral design services. If
            you are a busy couple and need help from one of the top shelf
            wedding planners, or if you just need some help and guidance, please
            don't hesitate to reach out to us.You can book a call with us
            anytime.
          </p>
          {/* <p>
            {cities.map((city) =>
              router.pathname === city.path ? (
                `Monica Browne Weddings is a wedding planning company in Maryland serving all couples in ${city.title}. We offer Full Service and Partial Wedding Planning services, as well as providing Day-of Coordination, Wedding Decoration, and Custom Wedding Floral Design Services. If you are a busy couple and need help planning your wedding, or if you just need some help and guidance, please don't hesitate to reach out to us. You can book a call with us when you are ready.`
              ) : (
                <p>Yo</p>
              )
            )}
          </p> */}
        </Decription>
        <FooterFoot>
          <FooterHours>
            <h3>Hours</h3>
            <div className="office-hours">
              <span>Monday: 9:00am - 5:00pm</span>
            </div>
            <div className="office-hours">
              <span>Tuesday: 9:00am - 5:00pm</span>
            </div>
            <div className="office-hours">
              <span>Wednesday: 9:00am - 5:00pm</span>
            </div>
            <div className="office-hours">
              <span>Thursday: 9:00am - 5:00pm</span>
            </div>
            <div className="office-hours">
              <span>Friday: 9:00am - 5:00pm</span>
            </div>
            <div className="office-hours">
              <span>Saturday: 9:00am - 5:00pm</span>
            </div>
            <div className="office-hours">
              <span>Sunday: Closed</span>
            </div>
          </FooterHours>
          <FooterMenu>
            <h3>Menu</h3>
            <nav>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about-wedding-planner" passHref>
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/wedding-services" passHref>
                    <a>Wedding Services</a>
                  </Link>
                  <ul className="ul-footer">
                    <li>
                      <Link href="/wedding-services/wedding-planning" passHref>
                        <a>Wedding Planning</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/wedding-services/wedding-flowers" passHref>
                        <a>Wedding Flowers</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/wedding-services/wedding-decorations"
                        passHref
                      >
                        <a>Wedding Decoration</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/day-of-wedding-coordinator" passHref>
                        <a>Day of Wedding Coordinator</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/wedding-gallery" passHref>
                    <a>Wedding Gallery</a>
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" passHref>
                    <a>Testimonials</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" passHref>
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" passHref>
                    <a>Contact us</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </FooterMenu>
          <Locations>
            <h3>Locations</h3>
            <ul>
              <li>
                <Link href="/annapolis" passHref>
                  <a>Annapolis, MD</a>
                </Link>
              </li>
              <li>
                <Link href="/bethesda" passHref>
                  <a>Bethesda, MD</a>
                </Link>
              </li>
              <li>
                <Link href="/chevy-chase" passHref>
                  <a>Chevy Chase, MD</a>
                </Link>
              </li>
              <li>
                <Link href="/potomac" passHref>
                  <a>Potomac, MD</a>
                </Link>
              </li>
              <li>
                <Link href="/rockville" passHref>
                  <a>Rockville, MD</a>
                </Link>
              </li>
              <li>
                <Link href="/silver-spring" passHref>
                  <a>Silver Spring, MD</a>
                </Link>
              </li>
              <li>
                <Link href="/washington-dc" passHref>
                  <a>Washington, DC</a>
                </Link>
              </li>
            </ul>
          </Locations>

          <FooterContact>
            <h3>Contact</h3>
            <p>
              <a href={calendly}>Book A Call</a>
            </p>
            <p>
              <a href="mailto:monica@monicabrowneweddings.com" itemProp="email">
                Email Monica Browne Weddings
              </a>
            </p>
            <p>
              <a>Call (240) 665-3350</a>
            </p>
            <p>
              <span>Bowie, MD</span>
              <span> 20720</span>
            </p>
          </FooterContact>
        </FooterFoot>
        <LowerFooter>
          <p>Monica Browne Weddings &copy; {new Date().getFullYear()}</p>
        </LowerFooter>
      </div>
    </>
  )
}

const FooterFoot = styled.footer`
  a {
    color: inherit;
    text-decoration: none;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  padding: 0 2rem;
  background-color: #dfe6e9;

  .footer-menu nav li {
    list-style: none;
    margin: 0.5rem 0;
  }

  @media (min-width: 768px) {
    display: flex;
    grid-template-columns: repeat(6, 1fr);
    justify-content: space-between;
    grid-gap: 20px;
    margin: 0 auto;
    margin-bottom: 0;

    .main-footer {
      display: flex;
      justify-content: space-evenly;
    }
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr);
  }

  .address {
    display: flex;
    justify-content: space-evenly;
    margin: 0.5rem 0;
  }
`

const Decription = styled.div`
  h3 {
    font-size: 1.4rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  max-width: 1140px;
  padding: 2rem 2rem 0 2rem;

  a {
    color: #a29bfe;
    font-weight: 700;

    &:hover {
      color: #101010;
      background-color: #a29bfe;
    }
  }

  p {
    font-size: 1rem;
    text-align: left;
    line-height: 1.6;
  }
`

const FooterMenu = styled('div')`
  width: 180px;

  a {
    color: #101010;
    font-weight: 100;
  }

  margin: 2rem 0;

  ul .ul-footer {
    color red;
    margin-left: 0.5rem;
  }

  li {
    list-style-type: none;
    font-size: 0.9rem;
    margin: 0.5rem 0;
    font-weight: 100;

    a:hover {
      font-weight: 700;
    }
  }

  li @media (min-width: 768px) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }

  @media (min-width: 1024px) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }

  @media (min-width: 1440px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`

const FooterHours = styled.div`
  width: 200px;

  margin: 2rem 0;

  .office-hours {
    margin-bottom: 1rem;
    display: flex;
    font-size: 0.9rem;
    font-weight: 100;
  }

  @media (min-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  @media (min-width: 1024px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  @media (min-width: 1440px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`

const Locations = styled.div`
  width: 180px;

  margin: 2rem 0;

  li {
    list-style-type: none;
    font-size: 0.9rem;
    margin: 0.5rem 0;
    font-weight: 100;
    width: 150px;
  }

  a:hover {
    font-weight: 700;
  }

  @media (min-width: 768px) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }
`

const FooterContact = styled('div')`
  width: 180px;

  margin: 2rem 0;

  a {
    color: #101010;
    font-weight: 100;
  }

  a:hover {
    font-weight: 700;
    text-decoration: underline;
  }

  p {
    text-align: left;
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }

  @media (min-width: 768px) {
    grid-column: 5 / 7;
    grid-row: 2 / 3;
  }

  @media (min-width: 1024px) {
    grid-column: 5 / 7;
    grid-row: 2 / 3;
  }

  @media (min-width: 1440px) {
    grid-column: 6 / 8;
    grid-row: 2 / 3;
  }
`

const LowerFooter = styled.div`
  padding: 2rem 0;
  background-color: black;
  text-align: center;
  color: #fff;

  p {
    font-size: 1rem;
  }
`

export default Footer
