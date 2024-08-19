import {useEffect, useState} from 'react'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {RiDownloadLine} from 'react-icons/ri'

import Chart from '../Chart'

const Overview = () => {
  const [data, setData] = useState([])

  const fetchedData = async () => {
    const response = await fetch('https://api.coincap.io/v2/assets/?limit=12')
    const updatedData = await response.json()
    console.log(updatedData)
    setData(updatedData.data)
  }

  useEffect(() => {
    fetchedData()
  }, [])

  return (
    <div className="overviewContainer">
      <div className="top-overview-Container">
        <h6>Overview</h6>
        <div className="download">
          <button type="button" className="downloadIconButton">
            .<RiDownloadLine className="downloadIcon" />
          </button>

          <h6 className="pt-2">Download Report</h6>
        </div>
      </div>
      <Chart data={data} />
    </div>
  )
}
export default Overview
