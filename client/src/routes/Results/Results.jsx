import { useContext, useEffect, useState, useRef } from 'react'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import Value from '../../Components/Value/Value'
import Button from '../../Components/Button/Button'
import Map from '../../Components/Map/Map'
import results from './Results.module.css'

const Results = () => {
  const { 
    MAIN_URL, parcel, bblData, setLoaded, violations, setViolations, repairs, setRepairs, 
    complaints, setComplaints, infestations, setInfestations, 
    liens, setLiens
  } = useContext(AppContext)
  const [data, setData] = useState('')
  const ref = useRef();

  useEffect(() => {
    if (!parcel.data) return
    setData(parcel.data)
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }, [parcel])

  useEffect(() => {
    getViolations()
    getLiens()
    // eslint-disable-next-line
  }, [parcel])

  useEffect(() => {
    getComplaints()
    getRepairs()
    getInfestations()
    // eslint-disable-next-line
  }, [bblData])

  const getViolations = () => {
    if (parcel.data) {
      let borough = parcel.data.bblBoroughCode;
      let block = parcel.data.bblTaxBlock;
      let lot = parcel.data.bblTaxLot;

      axios.post(`${MAIN_URL}/search/violations`, {
        borough, block, lot,
      })
      .then(res => {
        if (res.data.error) return
        setLoaded(true)

        // sort by most recent violation
        const sortDate = res.data.data.sort((a, b) => {
            return b.issue_date > a.issue_date ? 1 : -1
        })

        setViolations(sortDate)
      })
    }
  }

  const getComplaints = () => {
    if (bblData.bbl !== "") {
      let bid = bblData.buildingId

      axios.post(`${MAIN_URL}/search/complaints`, {
        bid
      })
      .then(res => {
        if (res.data.error) return

        const sortDate = res.data.data.sort((a, b) => {
          return b.date_entered > a.date_entered ? 1 : -1
        })
        setComplaints(sortDate)
      })
    }
  }

  const getRepairs = () => {
    if (bblData.bbl !== "") {
      let bbl = bblData.bbl;

      axios.post(`${MAIN_URL}/search/vacate-repair`, {
        bbl
      })
      .then(res => {
        if (res.data.error) return

        const sortDate = res.data.data.sort((a, b) => {
          return b.vacate_effective_date > a.vacate_effective_date ? 1 : -1
        })
        setRepairs(sortDate)
      })
    }
  }

  const getInfestations = () => {
    if (bblData.bbl !== "") {
      let bin = bblData.buildingId;
      axios.post(`${MAIN_URL}/search/infestations`, {
        bin
      })
      .then(res => {
        if (res.data.error) return

        const sortDate = res.data.data.sort((a, b) => {
            return b.filing_date > a.filing_date ? 1 : -1
        })
        setInfestations(sortDate)
      })
    }
  }

  const getLiens = () => {
    if (parcel.data) {
      let borough = parcel.data.bblBoroughCode;
      let block = parcel.data.bblTaxBlock;
      let lot = parcel.data.bblTaxLot;

      axios.post(`${MAIN_URL}/search/taxLien`, {
        borough, block, lot,
      })
      .then(res => {
        if (res.data.error) return
        
        const sortDate = res.data.data.sort((a, b) => {
          return b.month > a.month ? 1 : -1
        })
        setLiens(sortDate)
      })
    }
  }

  return (
    <div ref={ref} id='results' className={results.container}>
      <div className={results['property-data']}>
        <Value
          property='Address'
          value={`${data.houseNumber} ${data.firstStreetNameNormalized}`}
        />
        <Value
          property='City'
          value={data.uspsPreferredCityName}
        />
        <Value
          property='Zip Code'
          value={data.zipCode}
        />
        <Value
          property='Building Classification'
          value={data.rpadBuildingClassificationCode}
        />
        <Value
          property='Block'
          value={data.bblTaxBlock}
        />
        <Value
          property='Lot'
          value={data.bblTaxLot}
        />
        <Value
          property='BIN'
          value={data.buildingIdentificationNumber}
        />
        <Value
          property='Community District'
          value={data.communityDistrict}
        />
      </div>

      <div className={results['search-results']}>
        <Button
          title='Violations'
          number={violations.length}
          path='violations'
        />
        <Button
          title='Complaints'
          number={complaints.length}
          path='complaints'
        />
        <Button
          title='Vacate & Repair Orders'
          number={repairs.length}
          path='repairs'
        />
        <Button
          title='Bedbug Reports'
          number={infestations.length}
          path='infestations'
        />
        <Button
          title='Tax Lien Data'
          number={liens.length}
          path='taxliens'
        />
      </div>

      <div className={results.map}>
        <Map/>
      </div>
    </div>
  )
}

export default Results