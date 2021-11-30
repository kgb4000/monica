import { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { NextSeo } from 'next-seo'

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  })

  const [inputs, setInputs] = useState({
    firstName: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  })

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const isEnabled = inputs.email.length && inputs.firstName > 0

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: msg,
        },
      })
      setInputs({
        firstName: '',
        email: '',
        phone: '',
        date: '',
        message: '',
      })
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg,
        },
      })
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    setStatus((prevStatus) => ({
      ...prevStatus,
      submitting: true,
    }))

    const endpoint =
      'https://eekybmqof6.execute-api.us-east-1.amazonaws.com/prod/weddings-contact-form'

    const body = JSON.stringify({
      firstName: inputs.firstName,
      email: inputs.email,
      phone: inputs.phone,
      date: inputs.date,
      message: inputs.message,
    })

    console.log(body)

    const res = await fetch(endpoint, {
      method: 'POST',
      body,
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  const SEO = {
    title: 'Contact | Monica Browne Weddings',
    description:
      "If you're a busy couple planning your wedding and you think you may need help, please contact us.",
    canonical: 'https://monicabrowneweddings.com/contact',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/contact',
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
      <Main className="container">
        <div className="content">
          <h1 className="title">Contact Monica</h1>
          <p>
            Call:{' '}
            <a itemProp="telephone" href="tel:240-665-3350">
              (240) 665-3350
            </a>
          </p>
          <p>
            Email:{' '}
            <a href="mailto:monica@monicabrowneweddings.com" itemProp="email">
              monica@monicabrowneweddings.com
            </a>
          </p>
          <h2 className="title">Send Monica a Message</h2>
          <ContactForm>
            <Form onSubmit={handleOnSubmit}>
              <label htmlFor="firstName">Hello my name is *</label>
              <input
                id="firstName"
                type="firstName"
                onChange={handleOnChange}
                required
                value={inputs.firstName}
              />
              <label htmlFor="email">My email is *</label>
              <input
                id="email"
                type="email"
                onChange={handleOnChange}
                required
                value={inputs.email}
              />
              <label htmlFor="phone">My phone number is *</label>
              <input
                id="phone"
                type="text"
                maxLength="10"
                placeholder="(202) 222-2222"
                value={inputs.phone}
                onChange={handleOnChange}
                required
              />
              <label htmlFor="date">The day of my event is *</label>
              <input
                id="date"
                type="date"
                placeholder="Your wedding date"
                value={inputs.date}
                onChange={handleOnChange}
                required
              />

              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                onChange={handleOnChange}
                required
                value={inputs.message}
              />
              <SendButton
                type="submit"
                disabled={status.submitting || isEnabled}
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'Send to Monica'
                    : 'Submitted'
                  : 'Submitting...'}
              </SendButton>
            </Form>
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success">
                Your message has been sent to Monica
              </div>
            )}
          </ContactForm>
        </div>
      </Main>
    </>
  )
}

const Main = styled('div')`
  .content {
    max-width: 40rem;
    margin: 0 auto;
  }

  p {
    margin-bottom: 0.5em;
  }
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

const ContactForm = styled('div')`
  max-width: 100%;
  margin-bottom: 2em;
`

const Form = styled('form')`
  margin: 0;
  padding: 0;

  label {
    font-size: 1rem;
    font-weight: 200;
    padding-left: 1rem;
    margin-bottom: 0.5em;
  }
  input,
  textarea {
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 200;
    font-family: inherit;
    box-sizing: border-box;
  }

  input[type='text'],
  input[type='date'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
  }

  .budget {
    margin: 1rem 0;
  }

  input[type='radio'] {
    width: 1rem;
    margin-right: 1rem;
    justify-content: center;
  }

  textarea {
    height: 200px;
  }

  p {
    margin-bottom: 0.5rem;
  }
`
const SendButton = styled(Button)`
  margin-top: 0.5rem;
  color: #fff;
`

export default Contact
