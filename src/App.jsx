import './App.css'
import Frame1 from './components/Frame1'
import Frame2 from './components/Frame2'
import Frame3 from './components/Frame3'
import Frame4 from './components/Frame4'
import Frame5 from './components/Frame5'
import Frame7 from './components/Frame7'
import Frame8 from './components/Frame8'
import Frame9 from './components/Frame9'
// import Footer from './components/footer'
import Navbar from './components/navbar'
import Footer from './components/Footer/Footer'
function App() {


  return (
    <>
      <Navbar/>
      <Frame1/>
      <Frame2/>
      <Frame3/>
      <Frame4/> 
        <Frame5/>
      <Frame7/> 
      <Frame8/>
      <Frame9/>
      {/* <Footer/> */}
      <Footer/>
    </>
  )
}

export default App
