import styled from 'styled-components'
import { About } from '../styles'
import { Toggle } from './Toggle'
import { AnimateSharedLayout } from 'framer-motion'
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`

export const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      {/* Question 1 */}
      <AnimateSharedLayout>
        <Toggle title='How Do I start?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              nam!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      {/* Question 2 */}
      <AnimateSharedLayout>
        <Toggle title='Daily Schedule'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              nam!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      {/* Question 3 */}
      <AnimateSharedLayout>
        <Toggle title='Different Payment Methods'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              nam!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      {/* Question 4 */}
      <AnimateSharedLayout>
        <Toggle title='What Products do you offer?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
              nam!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  )
}
