import React, { useEffect, useState } from 'react'
import { description } from '../../utilities/descriptions'
import { useLocation } from 'react-router-dom'
import desc from './Description.module.css'

const Description = () => {
    const [text, setText] = useState("")
    const location = useLocation().pathname.slice(1)

    useEffect(() => {
        if (location.length > 0) {
            setText(description[location].info)
        } else {
            setText(description.start.info)
        }
    }, [location])

    return (
        <div className={desc.container}>
            <span dangerouslySetInnerHTML={{__html: text }}/>
        </div>
    )
}

export default Description