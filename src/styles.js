import styled from 'styled-components'
import { motion } from 'framer-motion'

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: #fff;
  @media (max-width: 1200px) {
    display: block;
    padding: 2rem;
    text-align: center;
  }
`
export const Description = styled.div`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1200px) {
    padding: 0;
    button {
      margin: 2rem 0 5rem;
    }
  }
`
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`
export const Hide = styled.div`
  overflow: hidden;
`
