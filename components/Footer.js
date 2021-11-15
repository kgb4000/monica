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
            author: 'Teresa Thomas',
            name: 'Bride testimonial',
            reviewBody:
              'Choosing Monica Browne Weddings to meet my needs during one of the most important events in my life was a decision that hosts no regrets. True professionalism, at its best! While planning a wedding can be very stressful and hectic, my experience with Monica Browne Weddings was definitely one that was fun and exciting! All tasks were completed in a very organized manner and with so many things to accomplish, such organization was very important. Monica Browne Weddings also referred me to many vendors that were equally very professional. As a result, my wedding day was truly all that I had dreamed it to be and more! It was at last the vivid reality of all of the planning and decision making done in the prior months. I am so thankful for the memories I now have to cherish for a lifetime. Monica Browne Weddings……..I can’t thank you enough!',
            reviewRating: {
              ratingValue: '5',
            },
          },
          {
            author: 'Donna McIntyre',
            name: 'Bride testimonial',
            reviewBody:
              'I met Monica in Summer 2008, while I served as a Bridesmaid for my best friend’s wedding. She was able to communicate the wishes of the Bride & Groom, so that things would run smoothly. She comes highly recommended by not only my friend, but to others & has a GREAT Vendor List. Overall, she has a great demeanor & is a pleasure to work with.',
            reviewRating: {
              ratingValue: '5',
            },
          },
          {
            author: 'Katrina Edmonds',
            name: 'Bride testimonial',
            reviewBody:
              'I am so thankful that I used Monica Browne Weddings for my rooftop wedding in the summer of 2010. It has been 5 years and I still have family and friends tell me how beautiful my wedding day was. I could not have been more pleased at their work. They listened to all my wants and carried them out exactly how I asked them to. They were nice, understanding and very easy to work with. They kept me on track and made the experience enjoyable. I am very particular and I like to be involved in everything however, I was able to let go and have them handle everything. I was not disappointed at all and my day turned out perfect. I could go on and on. I would recommend them over and over again.',
            reviewRating: {
              ratingValue: '5',
            },
          },
        ]}
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
