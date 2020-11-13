import { useState } from 'react'

export const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(true)
  return (
    <div onClick={() => setToggle(!toggle)}>
      {toggle && children}
      hi
    </div>
  )
}
