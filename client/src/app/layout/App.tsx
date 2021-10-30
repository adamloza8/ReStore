import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route } from "react-router-dom";
import AboutPage from "../../features/catalog/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ContactPage from "../../features/catalog/contact/ContactPage";
import HomePage from "../../features/catalog/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })


  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <>
    <ThemeProvider theme={theme}>
     <CssBaseline />
     <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
     <Container>
     <Route exact path='/' component={HomePage} />  
     <Route exact path='/catalog' component={Catalog} />  
     <Route path='/catalog/:id' component={ProductDetails} />  
     <Route path='/about' component={AboutPage} />  
     <Route path='/contact' component={ContactPage} />  
     </Container>
     </ThemeProvider>
     </>
  );
}

export default App;
