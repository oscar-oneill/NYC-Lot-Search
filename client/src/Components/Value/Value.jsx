import React from 'react'
import value from './Value.module.css'

const Value = (props) => {
    return (
        <div className={value.container}>
            <h4>{props.property}</h4>
            <h2>{props.value}</h2>
        </div>
    )
}

export default Value