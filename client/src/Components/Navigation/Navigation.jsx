import { useState } from 'react'
import nav from './Navigation.module.css'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'

const Navigation = () => {
  const [active, setActive] = useState(false)
  const showMenu = () => setActive(!active);

  return (
    <div className={nav.container}>
      <Link to='/'>
        NYC Propery Data Search
      </Link>

      <span onClick={showMenu} className="material-symbols-outlined">apps</span>
      <Menu status={active} showMenu={showMenu}/>
    </div>
  )
}

export default Navigation