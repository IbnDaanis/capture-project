import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import { About, Description, Image } from '../styles'
import styled from 'styled-components'
import { useScroll } from './useScroll'
import { scrollReveal } from '../animation'
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem;
  }
  @media (max-width: 1200px) {
    display: block;
  }
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: #fff;
      color: #000;
      padding: 1rem;
      border-radius: 10px;
    }
  }
`

export const ServicesSection = () => {
  const [element, controls] = useScroll()
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          {/* Card 1 */}
          <Card>
            <div className='icon'>
              <img src={clock} alt='Icon' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          {/* Card 2 */}
          <Card>
            <div className='icon'>
              <img src={diaphragm} alt='Icon' />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          {/* Card 3 */}
          <Card>
            <div className='icon'>
              <img src={money} alt='Icon' />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          {/* Card 4 */}
          <Card>
            <div className='icon'>
              <img src={teamwork} alt='Icon' />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt='Camera' />
      </Image>
    </Services>
  )
}
