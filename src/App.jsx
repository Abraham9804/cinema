import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Router>
        <Header />
        <AppRoutes />
        <Footer/>
      </Router>
         
        
    </>
  )
}

export default App
