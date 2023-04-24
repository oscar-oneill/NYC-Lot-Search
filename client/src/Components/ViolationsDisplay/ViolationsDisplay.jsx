import React from 'react'
import { dateType } from '../../utilities/functions'

const ViolationsDisplay = ({ description, comments, date, issueDate, number, category, type, vioNumber, ecbNumber, code }) => {

    return (
        <div className="violations_display">
            <span>Issue Date: {dateType(issueDate)}</span>
            <br/>
            <span>Disposition Date: {dateType(date)}</span>
            <br/>
            <span>Violation Category: {category}</span>
            <br/>
            <span>Violation Type: {type}</span>
            <br/>
            <span>Description: {description ? description : "None"}</span>
            <br/>
            <span>Disposition Comments: {comments ? comments : "None"}</span>
            <br/>
            <span>Number: {number}</span>
            <br/>
            <span>Violation Number: {vioNumber}</span>
            <br/>
            <span>Violation Type Code: {vioNumber}</span>
            <br />
            {ecbNumber ? <span>ECB Number: {ecbNumber}</span> : ""}
            {ecbNumber ? <br/> : ""}
           
        </div>
    )
}

export default ViolationsDisplay
