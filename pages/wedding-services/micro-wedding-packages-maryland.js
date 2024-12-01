import dynamic from 'next/dynamic'
import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import HeroSection from '../../components/HeroSection'
import Button from '../../components/Button'
import Simple from '../../components/Simple'
import { NextSeo, FAQPageJsonLd } from 'next-seo'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

function MicroWeddingPackages() {
  const SEO = {
    title:
      'Micro Wedding Packages for Maryland Couples | Monica Browne Weddings',
    description:
      'Want a unique nano wedding experience? We have micro wedding packages for Maryland couples looking for stress-free, intimate weddings. Call us today!',
    canonical:
      'https://monicabrowneweddings.com/wedding-services/micro-wedding-packages-maryland',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/wedding-services/micro-wedding-packages-maryland',
      site_name: 'Monica Browne Weddings',
      images: [
        {
          url: 'https://monicabrowneweddings.com/public/images/wedding-planner-vs-coordinator.webp',
          width: 1000,
          height: 1500,
          alt: 'Micro wedding at winery in Maryland.',
        },
      ],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <HeroSection
        heroText="Micro Wedding Packages for Maryland Couples"
        subText="We Help Couples Create Small Intimate Weddings and Events"
        backgroundImage="/images/micro-wedding-cover-img.webp"
        backgroundHeight="100vh"
        buttonText="Book a Call With Monica Today!"
        buttonLink={calendly}
      />
      <Main>
        <section className="container">
          <div className="content">
            <h1 className="title">Micro Wedding Packages</h1>
            <p>
              Are you looking to have a small, intimate ceremony somewhere in
              Maryland but don't want to sacrifice quality?
            </p>
            <p>
              If so, a micro wedding package may be what you're looking for.
            </p>
            <p>
              A micro wedding package offers all the amenities of a traditional
              wedding but on a much smaller scale. This can be perfect for
              couples looking to save money and time while still having a
              beautiful and memorable wedding day.
            </p>
            <p>
              So if you want a small, intimate wedding without sacrificing
              quality, a micro wedding may be just what you want.
            </p>
            <div className="center">
              <a href="tel:+2406653350">
                <Button>Call Monica - (240) 665-3350</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title">What are Micro Weddings?</h2>
            <div className="about-micro-section">
              <img
                src="/images/micro-wedding-packages-maryland.webp"
                alt="Micro wedding packages in Maryland."
                loading="lazy"
                width="472"
                height="708"
              />
              <div className="micro-wedings-about">
                <p>
                  Micro weddings are smaller events that typically have 50
                  guests or less.
                </p>
                <p>
                  Unlike a big wedding, these events often focus on quality over
                  quantity. Some couples save money with a smaller guest list,
                  less food, and a smaller vendor team.
                </p>
                <p>
                  Micro weddings can be held at various venues, from traditional
                  venues to more unique locations like wineries or exotic beach
                  locations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="center">
          <a href={calendly} target="_blank">
            <Button>Schedule a call with Monica Today!</Button>
          </a>
        </div>
        <section className="container">
          <div className="content">
            <h2 className="title">
              The Advantages of Having a Micro Wedding in Maryland
            </h2>
            <p>
              In recent years, more and more couples in Maryland have opted for
              small weddings over large, traditional events. And several
              benefits come along with having a smaller intimate affair.
            </p>
            <p>Here are just a few of the many benefits:</p>
            <h3>You Can Save Money</h3>
            <p>
              One of the biggest benefits of micro weddings is that you can save
              money.
            </p>
            <p>
              With the{' '}
              <Link
                href="/blog/how-much-does-a-100-person-wedding-cost"
                passHref
              >
                cost of a wedding
              </Link>{' '}
              in the Washington, DC area being where it is, you can spend less
              by having a small wedding. You can spend less on catering,
              ceremony and reception decorations, and your venue.
            </p>
            <p>But a micro wedding doesn't mean less money for every couple.</p>
            <p>
              You can have a micro wedding with 50 guests and still spend
              between $25,000 and $40,000. It all depends on what you want to
              spend money on.
            </p>
            <h3>You'll Save Time</h3>
            <p>
              Planning a large traditional wedding can be extremely
              time-consuming. But with a smaller event, you'll have more time to
              enjoy the planning process and focus on the essential details.
            </p>
            <p>
              Plus, you won't have to spend as much time coordinating with your
              vendors or dealing with logistics.
            </p>
            <h3>You Can be More Creative</h3>
            <p>
              When you have a nano event, you have more freedom to be creative
              with your decorations and details. You can choose to have a
              daytime wedding or a {''}
              <Link href="/blog/wedding-at-night">wedding at night</Link>. Plus,
              you can get discounts on your vendor services during a smaller
              event.
            </p>
            <h3>You Can Focus on Quality Over Quantity</h3>
            <p>
              One of the best things about having a micro wedding is that you
              can focus on quality over quantity. When you have a smaller guest
              list, you can spend more time and money on making sure each guest
              has a wonderful time. Plus, you'll be able to create a more
              intimate setting that will make your wedding day even more
              special.
            </p>
            <p>
              Micro weddings are becoming increasingly popular, so if you're
              considering having one, start planning your dream day today with
              one of Maryland's unique micro wedding packages.
            </p>
            <div className="center">
              <a href="tel:+2406653350">
                <Button>Call Monica - (240) 665-3350</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="gallery container">
          <h2 className="title">Wedding Gallery</h2>
          <Gallery>
            <img
              src="/images/wedding-table-centerpiece-design.webp"
              alt="Wedding table centerpiece design for small wedding."
              loading="lazy"
              width="472"
              height="708"
            />
            <img
              src="/images/wedding-cake.webp"
              alt="Wedding cake picture"
              loading="lazy"
              width="472"
              height="708"
            />
            <img
              src="/images/wedding-table-with-cork-centerpiece.webp"
              alt="Wedding table decorations by Monica Browne Weddings"
              loading="lazy"
              width="472"
              height="708"
            />
          </Gallery>
          <div className="center">
            <Link href="/wedding-gallery" passHref>
              <Button>See More Photos</Button>
            </Link>{' '}
          </div>
        </section>
        <section className="container">
          <div className="content">
            <h2 className="title">Small Wedding Venues in Maryland</h2>
            <p className="center">
              These are just some of the small wedding venues in Maryland that
              will host your nano wedding.
            </p>
            <ul className="micro-wedding-venues">
              <li>
                <p>
                  <a
                    href="https://www.google.com/search?q=Prisms+Annapolis&client=firefox-b-1-d&ei=a53_Yr7xLP-viLMPxJ2ayAg&ved=0ahUKEwj-0rT-jdP5AhX_F2IAHcSOBokQ4dUDCA0&uact=5&oq=Prisms+Annapolis&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEB4QFjIGCAAQHhAWMgIIJjoHCAAQRxCwAzoKCAAQRxCwAxDJAzoHCAAQsAMQQzoSCC4QxwEQrwEQyAMQsAMQQxgBSgQIQRgASgQIRhgBUKMKWKMKYIkRaANwAXgAgAE1iAE1kgEBMZgBAKABAqABAcgBFMABAdoBBggBEAEYCA&sclient=gws-wiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Prisms Annapolis
                  </a>
                </p>
                <address>49 Spa Rd, Annapolis, MD 21401</address>
                <p>
                  <small>(410) 295-0104</small>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://www.google.com/search?q=Annapolis+Maritime+Museum&client=firefox-b-1-d&ei=Tp3_YoSWOtzm5NoP-M2A2Ag&ved=0ahUKEwiE9dfwjdP5AhVcM1kFHfgmAIsQ4dUDCA0&uact=5&oq=Annapolis+Maritime+Museum&gs_lcp=Cgdnd3Mtd2l6EAMyEQguEIAEELEDEIMBEMcBEK8BMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyCwguEIAEEMcBEK8BMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgoIABBHELADEMkDOg0ILhDHARCvARCwAxBDSgQIQRgASgQIRhgAUIEMWIEMYOATaANwAXgAgAFFiAFFkgEBMZgBAKABAqABAcgBCcABAQ&sclient=gws-wiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Annapolis Maritime Museum
                  </a>
                </p>
                <address> 723 Second St, Annapolis, MD 21403</address>
                <p>
                  <small>(410) 271-7271</small>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://www.google.com/search?q=The+Country+Club+at+Woodmore&client=firefox-b-1-d&ei=NJ3_Yt6FA7msiLMPqoSe4Aw&ved=0ahUKEwje7-3jjdP5AhU5FmIAHSqCB8wQ4dUDCA0&uact=5&oq=The+Country+Club+at+Woodmore&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjICCCY6BwgAEEcQsAM6EgguEMcBEK8BEMgDELADEEMYAToSCC4QxwEQ0QMQyAMQsAMQQxgBSgQIQRgASgQIRhgAUOYKWOYKYOMTaANwAXgAgAFliAFlkgEDMC4xmAEAoAECoAEByAEMwAEB2gEECAEYCA&sclient=gws-wiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Country Club at Woodmore
                  </a>
                </p>
                <address>
                  12320 Pleasant Prospect, Mitchellville, MD 20721
                </address>
                <p>
                  <small>(301) 249-6100</small>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://www.google.com/search?q=Historic+Oakland&client=firefox-b-1-d&ei=F53_YryoOsKq5NoPq9OQoA8&ved=0ahUKEwj8j7vWjdP5AhVCFVkFHaspBPQQ4dUDCA0&uact=5&oq=Historic+Oakland&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEOgcIABBHELADOhIILhDHARCvARDIAxCwAxBDGAFKBAhBGABKBAhGGABQ7BJY7BJg8iFoBHABeACAAU6IAU6SAQExmAEAoAECoAEByAELwAEB2gEECAEYCA&sclient=gws-wiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Historic Oakland
                  </a>
                </p>
                <address>5430 Vantage Point Rd, Columbia, MD 21044</address>
                <p>
                  <small>(410) 730-4801</small>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://www.google.com/search?q=The+Blackwall+Barn+and+Lodge&client=firefox-b-1-d&ei=_Zz_YsK2Dtew5NoPxKeKsA4&ved=0ahUKEwiCqdzJjdP5AhVXGFkFHcSTAuYQ4dUDCA0&uact=5&oq=The+Blackwall+Barn+and+Lodge&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyCQgAEB4QyQMQFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWOgoIABBHELADEMkDOgcIABBHELADSgQIQRgASgQIRhgAUOEJWOEJYJYSaANwAXgAgAFDiAFDkgEBMZgBAKABAqABAcgBCMABAQ&sclient=gws-wiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Blackwall Barn and Lodge
                  </a>
                </p>
                <address>329 Gambrills Rd, Gambrills, MD 21054</address>
                <p>
                  <small>(410) 317-2276</small>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://www.google.com/search?q=William+Paca+House+and+Garden&client=firefox-b-1-d&ei=45z_YoCsE4uh5NoPqoymqA0&ved=0ahUKEwjAqa69jdP5AhWLEFkFHSqGCdUQ4dUDCA0&uact=5&oq=William+Paca+House+and+Garden&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMgIIJjIFCAAQhgM6BwgAEEcQsAM6CggAEEcQsAMQyQM6BwgAELADEEM6EgguEMcBEK8BEMgDELADEEMYAUoECEEYAEoECEYYAVCDDFiDDGDpFmgDcAF4AIABU4gBU5IBATGYAQCgAQKgAQHIARTAAQHaAQYIARABGAg&sclient=gws-wiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    William Paca House and Garden
                  </a>
                </p>
                <address>186 Prince George St, Annapolis, MD 21401</address>
                <p>
                  <small>(410) 990-4543</small>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://www.google.com/search?q=Chesapeake+Bay+Maritime+Museum&client=firefox-b-1-d&ei=OZz_YvbzLcPn5NoP-rKuyA4&ved=0ahUKEwi29MDsjNP5AhXDM1kFHXqZC-kQ4dUDCA0&uact=5&oq=Chesapeake+Bay+Maritime+Museum&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMggIABCABBDJAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEOgcIABBHELADOhIILhDHARCvARDIAxCwAxBDGAFKBAhBGABKBAhGGABQyglYyglggRJoA3ABeACAAUyIAUySAQExmAEAoAECoAEByAELwAEB2gEECAEYCA&sclient=gws-wiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chesapeake Bay Maritime Museum
                  </a>
                </p>
                <address>213 N Talbot St, St Michaels, MD 21663</address>
                <p>
                  <small>(410) 745-2916</small>
                </p>
              </li>
            </ul>
            <div className="center">
              <a href={calendly} target="_blank">
                <Button>Schedule a call with Monica today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="next-steps medium-container">
            <img
              src="/images/couple-at-winery-wedding-venue-in-maryland.webp"
              alt="Couple at winery wedding venue in Maryland."
              loading="lazy"
            />
            <div>
              <h2 className="title">What are Your Next Steps</h2>
              <h3>#1. Set a Budget</h3>
              <p>
                The first thing you'll need to do when planning is to set a
                budget. You'll save money on everything from your venue to
                catering when you have a smaller guest list. Plus, you can often
                get discounts on your wedding vendor services when you have a
                smaller wedding.
              </p>
              <h3>#2. Choose Your Wedding Venue</h3>
              <p>
                One of the best things about having a small wedding in Maryland
                is that you can be creative with your venue. You can choose to
                have your custom ceremony and reception at the exact location or
                opt for a unique setting like a park or an outdoor garden venue.
              </p>
              <h3>#3. Choose Your Guest List</h3>
              <p>
                Another good thing about having a micro wedding is focusing on
                quality over quantity. With a smaller guest list, you can spend
                more time and money ensuring each guest has a wonderful time.
                Plus, you'll be able to create a more custom, private setting
                that will make your wedding day even more special.
              </p>
              <h3>#4. Start Planning</h3>
              <p>
                Now that you know what a micro wedding is and how to plan one,
                it's time to start planning your dream day. With some help from
                Monica Browne Weddings, you can have a small, unique wedding
                you'll love.
              </p>
            </div>
          </div>
          <div className="center">
            <a href="tel:+2406653350">
              <Button>Call Monica - (240) 665-3350</Button>
            </a>
          </div>
        </section>
        <section className="container">
          <div className="service-content get-started">
            <h2 className="title">We Make Nano Weddings Easy</h2>
            <div>
              <Simple>
                <li>
                  <h4>Talk To Monica</h4>
                  <p>
                    Call and talk with Monica and see how she can help you plan
                    everything.
                  </p>
                </li>
                <li>
                  <h4>Create A Budget</h4>
                  <p>
                    Work out your costs and start planning your wedding details.
                  </p>
                </li>
                <li>
                  <h4>Enjoy Your Wedding Day</h4>
                  <p>Just enjoy your wedding day and cherish the moment.</p>
                </li>
              </Simple>
            </div>

            <div className="center">
              <a href={calendly}>
                <Button>Book a call with Monica today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <img
            src="/images/micro-wedding-table-setup-linganore-wineries-maryland.webp"
            alt="Wedding table decorations by Monica Browne Weddings"
            loading="lazy"
            width="1500"
            height="1000"
          />
        </section>
        <section className="container">
          <div className="service-content">
            <h2 className="title">What Do I Need to Plan a Micro Wedding?</h2>
            <Simple>
              <li>
                <p>
                  <strong>Guest list</strong>
                </p>
                <p>
                  Determine who you want to invite to your micro wedding. As
                  it's a small event, consider inviting only your closest family
                  and friends.
                </p>
              </li>
              <li>
                <p>
                  <strong>Venue</strong>
                </p>
                <p>
                  Choose a venue that can accommodate your guest count.It can be
                  an outdoor location, a private residence, or a smaller event
                  space.
                </p>
              </li>
              <li>
                <p>
                  <strong>Vendors</strong>
                </p>
                <p>
                  Research and book vendors essential to your micro weddings,
                  such as a photographer, caterer,{' '}
                  <Link href="/wedding-services/wedding-flowers" passHref>
                    florist
                  </Link>
                  , and musician. You may also need to rent chairs, tables,
                  linens, and other decor items.
                </p>
              </li>
              <li>
                <p>
                  <strong>Ceremony</strong>
                </p>
                <p>
                  Decide on the type of ceremony you want, whether a traditional
                  religious ceremony or something more personalized. Remember
                  the officiant.
                </p>
              </li>
              <li>
                <p>
                  <strong>Reception</strong>
                </p>
                <p>
                  Reception: Plan your reception, including dinner service,
                  speeches, and any entertainment you want.
                </p>
              </li>
              <li>
                <p>
                  <strong>Decor</strong>
                </p>
                <p>
                  Decide on the type of{' '}
                  <Link
                    href="/wedding-services/wedding-decor-services"
                    passHref
                  >
                    wedding decor
                  </Link>{' '}
                  you want, including flowers, lighting, and other decor
                  elements that can help create the desired atmosphere.
                </p>
              </li>
              <li>
                <p>
                  <strong>Wedding attire</strong>
                </p>
                <p>
                  Choose wedding attire that fits the size and style of your
                  small wedding.
                </p>
              </li>
              <li>
                <p>
                  <strong>Invitations</strong>
                </p>
                <p>
                  Design and send out invitations to your guests, providing all
                  the necessary details about the event.
                </p>
              </li>
              <li>
                <p>
                  <strong>Timeline</strong>
                </p>
                <p>
                  Create a detailed{' '}
                  <Link href="/blog/wedding-day-timeline-4pm-ceremony" passHref>
                    timeline
                  </Link>{' '}
                  of your micro wedding, including the schedule for the day and
                  any important events you want to include.
                </p>
              </li>
              <li>
                <p>
                  <strong>Wedding planner</strong>
                </p>
                <p>
                  Hiring a wedding planner can be incredibly helpful, especially
                  if you want to ensure your event runs smoothly and
                  stress-free. A{' '}
                  <Link href="/" passHref>
                    (Maryland) wedding planner
                  </Link>{' '}
                  can assist with all aspects of the planning process, from
                  creating a budget and timeline to sourcing vendors and
                  coordinating the day-of logistics.
                </p>
              </li>
            </Simple>
            <div className="center">
              <a href={calendly}>
                <Button>Book a call today</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="content">
            <FAQPageJsonLd
              mainEntity={[
                {
                  questionName: 'How Many People Count for a Small Wedding?',
                  acceptedAnswerText:
                    'A small wedding has a guest count of 50 people or less. Any number of more than 50 guests will be considered a medium or large wedding.',
                },
                {
                  questionName: 'Who Do I Invite to My Small Wedding?',
                  acceptedAnswerText:
                    'You want to invite your closest family and friends to your wedding, and the guest list is to be at most 50 people.',
                },
                {
                  questionName: 'How Long Should a Micro Wedding Be?',
                  acceptedAnswerText:
                    'Micro weddings are smaller than traditional weddings, with a smaller guest count, ceremony, and reception. Reception length will depend on how long you want to celebrate!',
                },
                {
                  questionName: 'How Much Should You Spend on a Micro Wedding?',
                  acceptedAnswerText: `You can save between $5,000 to $30,000 for your micro wedding. Remember, this is your wedding, and you can spend any amount you wish to. A micro wedding is not about how much money you spend. It's more about how many guests you invite.`,
                },
                {
                  questionName: 'How Can I Save Money on a Micro Wedding?',
                  acceptedAnswerText: `Some ways to save money on a micro wedding include: 
                      Reducing the guest coun
                      Choosing a less expensive wedding venue
                      Asking friends and family to help with decor, food, and music
                      Eliminating or reducing the wedding party
                      Choosing simple decor and flowers
                      Selecting a shorter menu
                      Saving on the wedding dress and suit
                      Opting for digital invitations
                      Doing your makeup and hair
                      Choosing a less expensive photographer
                      Have a self-service bar instead of an open bar.`,
                },
              ]}
            />
            <h2>FAQs</h2>
            <h3>#1. How Many People Count for a Small Wedding?</h3>
            <p>
              A small wedding has a guest count of 50 people or less. Any number
              of more than 50 guests will be considered a medium or large
              wedding.
            </p>
            <h3>#2. Who Do I Invite to My Small Wedding?</h3>
            <p>
              You want to invite your closest family and friends to your
              wedding, and the guest list is to be at most 50 people.
            </p>
            <h3>#3. How Long Should a Micro Wedding Be?</h3>
            <p>
              Micro weddings are smaller than traditional weddings, with a
              smaller guest count, ceremony, and reception. Reception length
              will depend on how long you want to celebrate!
            </p>
            <h3>#4. How Much Should I Save For a Micro Wedding?</h3>
            <p>
              You can save between $5,000 to $30,000 for your micro wedding.
              Remember, this is your wedding, and you can spend any amount you
              wish to. A micro wedding is not about how much money you spend.
              It's more about how many guests you invite.
            </p>
            <h3>#5. How Can I Save Money on a Micro Wedding?</h3>
            <p>Some ways to save money on a micro wedding include:</p>
            <ul className="wedding-saving-acts">
              <li>Reducing the guest count.</li>
              <li>Choosing a less expensive wedding venue.</li>
              <li>
                Asking friends and family to help with decor, food, and music.
              </li>
              <li>Eliminating or reducing the wedding party.</li>
              <li>Choosing simple decor and flowers.</li>
              <li>Selecting a shorter menu.</li>
              <li>Saving on the wedding dress and suit.</li>
              <li>Opting for digital invitations.</li>
              <li>Having a friend or family member do your makeup and hair.</li>
              <li>Choosing a less expensive photographer.</li>
              <li>Have a self-service bar instead of an open bar.</li>
            </ul>
          </div>
        </section>

        <p className="center-text">
          Book a 15-minute <i>no pressure call</i> with Monica and see she can
          help you plan your wedding.
        </p>
        <div className="center">
          <a href={calendly}>
            <Button>Book a call with Monica today</Button>
          </a>
        </div>
      </Main>
    </>
  )
}

export default MicroWeddingPackages

const Main = styled('main')`

 @media (min-width: 768px) {
    .content {
      text-align: left;
      max-width: 60rem;
      margin: 0 auto;
    }
  }

  .next-steps {
    @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-content: center;
    align-items: center;
    grid-gap: 40px;
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

  .wedding-saving-acts {
    margin-left: 3rem;
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

    .service-content {

      img {
        display: none;
      }

      display: block;
      max-width: 30rem;
      margin: 0 auto;
      text-aling: left;

      @media (min-width: 768px) {

        img {
        display: block;
      }

      max-width: 50rem;

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
