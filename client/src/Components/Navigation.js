import React, { useContext, useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import '../styles/Navigation.css'
import axios from 'axios'
import windowDetect from '../Hooks/windowDetect'

const Navigation = () => {
    const size = windowDetect()
    const { parcel, bblData, setViolations, setRepairs, setComplaints, isActive, setIsActive } = useContext(AppContext)
    const [violationNums, setViolationNums] = useState("")
    const [repairNums, setRepairNums] = useState("")
    const [complaintNums, setComplaintNums] = useState("")
    const [loaded, setLoaded] = useState(false)

    const dropdownRef = useRef(null)
    const onClick = () => {
        if (size.width < 791) {
            setIsActive(!isActive)
        }
    }

    useEffect(() => {
        fetchViolations()
        // eslint-disable-next-line
    }, [parcel])

    useEffect(() => {
        fetchRepairs()
        // eslint-disable-next-line
    }, [bblData])

    useEffect(() => {
        fetchComplaints()
        // eslint-disable-next-line
    }, [bblData])

    const fetchViolations = () => {
        if (parcel.data) {
            let borough = parcel.data.bblBoroughCode;
            let block = parcel.data.bblTaxBlock;
            let lot = parcel.data.bblTaxLot;

            axios.post("https://nycbuildings.herokuapp.com/search/violations", {
                borough, block, lot
            })
            .then(res => {
                setLoaded(true)
                setViolationNums(res.data.entries)
                setViolations(res.data.data)
            })
        }
    }

    const fetchRepairs = () => {
        if (bblData.bbl !== "") {
            let bbl = bblData.bbl;

            axios.post("https://nycbuildings.herokuapp.com/search/vacate-repair", {
                bbl
            })
            .then(res => {
                setRepairNums(res.data.entries)
                setRepairs(res.data.data)
            })
        }
    }

    const fetchComplaints = () => {
        if (bblData.bbl !== "") {
            let bid = bblData.buildingId

            axios.post("https://nycbuildings.herokuapp.com/search/complaints", {
                bid
            })
            .then(res => {
                setComplaintNums(res.data.entries)
                setComplaints(res.data.data)
            })
        }
    }

    let violationColors = {}
    let repairColors = {}
    let complaintColors = {}
    let menuColors = {}

    if (violationNums > 0) {
       violationColors.color = 'crimson'
    } else {
       violationColors.color = 'palegreen'
    }

    if (repairNums > 0) {
        repairColors.color = 'crimson'
    } else {
        repairColors.color = 'palegreen'
    }

    if (complaintNums > 0) {
        complaintColors.color = 'crimson'
    } else {
        complaintColors.color = 'palegreen'
    }

    if ((violationNums || repairNums || complaintNums) > 0) {
        menuColors.color = 'crimson'
    } else if ((violationNums && repairNums && complaintNums) === 0) {
        menuColors.color = 'palegreen'
    } else {
        menuColors.color = 'aliceblue'
    }

    return (
        <div className="navigation">
            <div className="title">
                <Link to="/"><h2>NYC Block & Lot Search</h2></Link>
            </div>

            <div onClick={onClick} className="mobile_menu" style={menuColors}>&#9776;</div>
            <div ref={dropdownRef} className={`blanket ${ (isActive) ? 'active' : 'inactive' }`}></div>

            <div ref={dropdownRef} className={`content_menu ${ isActive ? 'active' : 'inactive' }`}>
                <div onClick={onClick} className="violations_nav">
                    <Link to="/violations"><h3>Violations</h3></Link>
                    {loaded ? <div className="violations_total" style={violationColors}>{violationNums === ("" || undefined || null)  ? "" : violationNums}</div> : ""}
                </div>

                <div onClick={onClick} className="violations_nav">
                    <Link to="/complaints"><h3>Complaints</h3></Link>
                    {loaded ? <div className="violations_total" style={complaintColors}>{complaintNums === ("" || undefined || null)  ? "" : complaintNums}</div> : ""}
                </div>

                <div onClick={onClick} className="violations_nav">
                    <Link to="/repairs"><h3>Vacate & Repair Orders</h3></Link>
                    {loaded ? <div className="violations_total" style={repairColors}>{repairNums === ("" || undefined || null)  ? "" : repairNums}</div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Navigation
