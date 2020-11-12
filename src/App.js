import { GlobalStyle } from './components/GlobalStyle'
import { Nav } from './components/Nav'
import { AboutUs } from './pages/AboutUs'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  )
}
