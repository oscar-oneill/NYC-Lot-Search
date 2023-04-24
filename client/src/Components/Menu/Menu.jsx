import React from 'react'
import { Link } from 'react-router-dom'
import menu from './Menu.module.css'
import menulinks from '../../utilities/menulinks'

const Menu = (props) => {
    const displayMenu = () => {
        if (props.status) {
            return 'flex'
        } else {
            return 'none'
        }
    }

    return (
        <div className={menu.container} style={{ display: `${displayMenu()}` }}>
            {menulinks.map((link, i) => {
                return (
                    <Link onClick={() => props.showMenu()} className={menu.link} key={i} to={`${link.link}`}>{link.title}</Link>
                )
            })}
        </div>
    )
}

export default Menu