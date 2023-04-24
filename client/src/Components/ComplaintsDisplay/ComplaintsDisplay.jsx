import axios from 'axios';
import React, { useState, useContext } from 'react';
import { AppContext } from '../../Context/AppContext'
import LoadingGif from '../LoadingGIF/LoadingGif';

const ComplaintsDisplay = ({ buildingID, community, entry, inspection, disposition, code, category, status, number }) => {
    const { MAIN_URL } = useContext(AppContext)
    const [complaintText, setComplaintText] = useState("")
    const [loading, setLoading] = useState(false)

    const getComplaintData = async () => {
        if (number) {
            setLoading(true)
            axios.post(`${MAIN_URL}/return/complaints`, {
                number
            })
            .then(res => {
                setLoading(false)
                setComplaintText(res.data)
            })
        }
    }

    return (
        <div className="violations_display">
            <span>Building ID: {buildingID}</span>
            <br/>
            <span>Complaint Number: {number}</span>
            <br />
            <span>Community Board: {community}</span>
            <br/>
            <span>Status: {status}</span>
            <br/>
            <span>Date Entered: {entry}</span>
            <br/>
            <span>Date Inspected: {inspection}</span>
            <br/>
            <span>Disposition Date: {disposition}</span>
            <br/>
            <span>Disposition Code: {code}</span>
            <br/>
            <span>Category: {category}</span>
            <br/>
            {
                loading ? <LoadingGif/> : 
                complaintText ? <span dangerouslySetInnerHTML={{ __html: complaintText }}></span> : 
                <button onClick={getComplaintData}>See Notes Of This Complaint</button>
            } 
            <br />

        </div>
    )
}

export default ComplaintsDisplay