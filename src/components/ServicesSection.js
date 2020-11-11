import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'

export const ServicesSection = () => {
  return (
    <div className='services'>
      <div className="description">
        <h2>High <span>quality</span> services</h2>
        <div className="cards">
          {/* Card 1 */}
          <div className="card">
            <div className="icon">
              <img src={clock} alt="Icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* Card 2 */}
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="Icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* Card 3 */}
          <div className="card">
            <div className="icon">
              <img src={money} alt="Icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* Card 4 */}
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="Icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="Camera" />
      </div>
    </div>
  )
}
