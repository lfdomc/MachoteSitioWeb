import './App.css'
import AppRoutes from './routes'
import Background from './components/Background/Background'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import GlobalContextProvider from './context/GlobalContext'
import { BrowserRouter } from 'react-router-dom'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <GlobalContextProvider>
    <Background>
    <Header/>
    <AppRoutes/>
    <Footer/>
    </Background>
    </GlobalContextProvider>
    </BrowserRouter> 
    </>
  )
}

export default App
