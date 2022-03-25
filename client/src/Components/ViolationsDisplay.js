import React from 'react'

const ViolationsDisplay = ({ description, comments, date, issueDate, number, category, type  }) => {
    const dateType = (string) => {
        if (string) {
            let y = string.substr(0,4);
            let m = string.substr(6,2) - 1;
            let d = string.substr(4,2);
            let date = new Date(y,m,d)

            return date.toLocaleDateString()
        }
        else {
            return "N/A"
        }
    }

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
        </div>
    )
}

export default ViolationsDisplay
