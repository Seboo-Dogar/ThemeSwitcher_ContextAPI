import { ThemeProvider } from './context/ThemeContext';
import Header from "./components/Header";
import About from './components/About';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <ThemeProvider>
        <Header/>
        <About/>
        <Education/> 
        {/* <Experience/> */}
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default App
