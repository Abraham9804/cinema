import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import Footer from './components/Footer'
import {FavoritoContextoProvider} from './Contexto/Contexto'


function App() {
  

  return (
    <>
      <Router>
        <FavoritoContextoProvider>
          <Header />
              <AppRoutes />
            
          <Footer/>
          </FavoritoContextoProvider>
      </Router>
         
        
    </>
  )
}

export default App
