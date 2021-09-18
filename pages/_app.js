import { useEffect } from 'react'
import SEO from '../next-seo.config'
import '../styles/globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import 'react-modal-video/scss/modal-video.scss'
import { DefaultSeo } from 'next-seo'
import TagManager from 'react-gtm-module'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MXT3BTL' })
  }, [])
  return (
    <>
      <DefaultSeo {...SEO} />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
