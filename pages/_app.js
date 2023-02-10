import '../styles/globals.css'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return <> 
            <Navbar />
            <Component {...pageProps} />
            <Footer/>
          </>
}

export default MyApp
