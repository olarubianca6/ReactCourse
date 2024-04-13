import React from 'react'
import { MenuItem } from './MenuItem.jsx'

const Menu = ({menu}) => {
  return (
    <div className='section-center'>
      {menu.map((item) => {
        return <MenuItem key={item.id} {...item} />
      })}
    </div>
  )
}

export default Menu
