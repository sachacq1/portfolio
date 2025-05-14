
import Header from './components/Header/Header.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
