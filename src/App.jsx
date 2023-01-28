import { useContext } from 'react';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro';
import ProductList from './Components/ProductList/ProductList';
import Toggle from './Components/Toggle/Toggle';
import { ThemeContext } from './Context'


function App() {
  

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return <div style={{ backgroundColor : darkMode ? "#222": "white", color: darkMode && "white"}}>

    <Toggle />
    <Intro />
    <About />
    <ProductList />
    <Contact />

  </div>
}

export default App;
