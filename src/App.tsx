import './App.css'
import AppRoutes from './routes'
import Background from './components/Background/Background'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import GlobalContextProvider from './context/GlobalContext'
import { BrowserRouter } from 'react-router-dom'
import WhatsApp from './components/WhatsApp/WhatsApp'


function App() {


  return (
    <>
      <BrowserRouter >
        <GlobalContextProvider>
          <Background>
            <WhatsApp
              imageSrc="/image/whatsapp.png"
              onClick={() => window.location.href = "https://wa.me/50670120250"}
            />
            <Header />
            <AppRoutes />
            <Footer />
          </Background>
        </GlobalContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
