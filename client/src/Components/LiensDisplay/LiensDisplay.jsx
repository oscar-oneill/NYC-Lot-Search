import React from 'react'
import { formatDate } from '../../utilities/functions'

const LiensDisplay = ({ cycle, month, waterDebtOnly, taxClass }) => {
    return (
        <div className='violations_display'>
            <span>Notice: {cycle}</span>
            <br/>
            <span>Date: {formatDate(month)}</span>
            <br/>
            <span>Water Debt Only? {waterDebtOnly}</span>
            <br/>
            <span>Tax Class Code: {taxClass}</span>
            <br/>
        </div>
    )
}

export default LiensDisplay