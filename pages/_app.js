import { useState, useEffect } from 'react'
import SEO from '../next-seo.config'
import '../styles/globals.scss'
import Footer from '../components/Footer'
// import 'react-modal-video/scss/modal-video.scss'
import { DefaultSeo } from 'next-seo'
import TagManager from 'react-gtm-module'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MXT3BTL' })
  }, [])
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
