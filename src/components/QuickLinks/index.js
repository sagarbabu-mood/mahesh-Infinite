import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {GoArrowUpRight, GoArrowDownLeft, GoVerified} from 'react-icons/go'
import {IoSettingsOutline} from 'react-icons/io5'
import {CiStar} from 'react-icons/ci'
import {VscGraphLine} from 'react-icons/vsc'
import {BiTransfer} from 'react-icons/bi'
import {MdHistory} from 'react-icons/md'
import {TbCirclesRelation} from 'react-icons/tb'
import {BsLink45Deg} from 'react-icons/bs'
import {SiSimpleanalytics} from 'react-icons/si'

// import {GoVerified} from 'react-icons/go'

const QuickLinks = () => (
  <div className="quickContainer">
    <h6 className="quickHeading">Quick Links</h6>
    <div className="QuickLinkLists">
      <li className="quickItems">
        <GoArrowDownLeft className="icon" />
        <p className="pt-2">Deposit</p>
      </li>
      <li className="quickItems">
        <GoArrowUpRight className="icon" />
        <p className="pt-2">Withdraw</p>
      </li>
      <li className="quickItems">
        <IoSettingsOutline className="icon" />
        <p className="pt-2">Settings</p>
      </li>
      <li className="quickItems">
        <GoVerified className="icon" />
        <p className="pt-2">Verification</p>
      </li>
      <li className="quickItems">
        <CiStar className="icon" />
        <p className="pt-2">Bonuses</p>
      </li>
      <li className="quickItems">
        <VscGraphLine className="icon" />
        <p className="pt-2">MT5</p>
      </li>
      <li className="quickItems">
        <BiTransfer className="icon" />
        <p className="pt-2">Transfer</p>
      </li>
      <li className="quickItems">
        <MdHistory className="icon" />
        <p className="pt-2">History</p>
      </li>
      <li className="quickItems">
        <TbCirclesRelation className="icon" />
        <p className="pt-2">Partner</p>
      </li>
      <li className="quickItems">
        <BsLink45Deg className="icon" />
        <p className="pt-2">Exchange</p>
      </li>
      <li className="quickItems">
        <SiSimpleanalytics className="icon" />
        <p className="pt-2">Analytics</p>
      </li>
    </div>
  </div>
)
export default QuickLinks
