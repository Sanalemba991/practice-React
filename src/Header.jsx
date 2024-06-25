import React from 'react'

function Header({title}) {
  return (
    <div>
      <h1>
     {title}
      </h1>
    </div>
  )
}


Header.defaultProps={
    title:'Default title'
}

export default Header
