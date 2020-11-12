import { Switch, Route, useLocation } from 'react-router-dom'
import { GlobalStyle } from './components/GlobalStyle'
import { Nav } from './components/Nav'
import { AboutUs } from './pages/AboutUs'
import { ContactUs } from './pages/ContactUs'
import { OurWork } from './pages/OurWork'
import { MovieDetails } from './pages/MovieDetails'
import { AnimatePresence } from 'framer-motion'

export const App = () => {
  const location = useLocation()
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutUs />
          </Route>
          <Route path='/work' exact>
            <OurWork />
          </Route>
          <Route path='/work/:id'>
            <MovieDetails />
          </Route>
          <Route path='/contact' exact>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  )
}
