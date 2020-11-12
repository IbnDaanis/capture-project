import { Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './components/GlobalStyle'
import { Nav } from './components/Nav'
import { AboutUs } from './pages/AboutUs'
import { ContactUs } from './pages/ContactUs'
import { OurWork } from './pages/OurWork'
import { MovieDetails } from './pages/MovieDetails'

export const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path='/' exact>
          <AboutUs />
        </Route>
        <Route path='/work' exact>
          <OurWork />
        </Route>
        <Route path='/work/:id'>
          <MovieDetails />
        </Route>
        <Route path='/contact'>
          <ContactUs />
        </Route>
      </Switch>
    </div>
  )
}
