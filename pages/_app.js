import '../styles/globals.css'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import ScrollToTop from '../components/scrolltotop'

function MyApp({ Component, pageProps }) {
  return <> 
            <Navbar />
            <Component {...pageProps} />
             <ScrollToTop/>
            <Footer/>
          </>
}

export default MyApp
