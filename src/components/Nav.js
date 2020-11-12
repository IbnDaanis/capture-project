import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 10rem;
      position: relative;
    }
  }
  #Logo {
    font-size: 1.8rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
`

export const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id='Logo' href='#'>
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href='#'>1. About Us</a>
        </li>
        <li>
          <a href='#'>2. Our Work</a>
        </li>
        <li>
          <a href='#'>3. Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  )
}
