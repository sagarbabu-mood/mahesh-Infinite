import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {MdOutlineDashboard, MdHistory} from 'react-icons/md'
import {FaRegFaceSadCry} from 'react-icons/fa6'
import {HiOutlineCube} from 'react-icons/hi2'
import {FiPieChart} from 'react-icons/fi'
import {PiTrademarkDuotone} from 'react-icons/pi'
import {
  RiWalletLine,
  RiNotification2Line,
  RiLogoutBoxLine,
  RiAccountCircleLine,
} from 'react-icons/ri'
import {AiOutlineAccountBook} from 'react-icons/ai'
import {IoSettingsOutline} from 'react-icons/io5'
import {CiHeadphones} from 'react-icons/ci'

const MenuBar = () => (
  <nav className="menuBarContainer">
    <h1 className="DoolerHeading pb-3">
      Ditch
      <br />
      <span className="dollerSpan pl-5">Doller</span>
    </h1>
    <div className="linkContainer">
      <ul className="menuNavTopList">
        <li className="list1">
          <MdOutlineDashboard className="pr-4" />
          <p className="para pt-3 pl-3">Dashboard</p>
        </li>
        <li className="items">
          <FaRegFaceSadCry />
          <p className="pt-3 para">CRM</p>
        </li>
        <li className="items">
          <HiOutlineCube />
          <p className="pt-3 para">MAM</p>
        </li>
        <li className="items">
          <FiPieChart />
          <p className="pt-3 para">PAMM</p>
        </li>
        <li className="items">
          <PiTrademarkDuotone />
          <p className="pt-3 para">Trade</p>
        </li>
        <li className="items">
          <RiWalletLine />
          <p className="pt-3 para">Wallet</p>
        </li>
        <li className="items">
          <AiOutlineAccountBook />
          <p className="pt-3 para">Accounts</p>
        </li>
        <li className="items">
          <MdHistory />
          <p className="pt-3 para">History</p>
        </li>
      </ul>
      <ul className="menuNavBottomList">
        <li className="items">
          <RiNotification2Line />
          <p className="pt-3 para">Notifications</p>
        </li>
        <li className="items">
          <IoSettingsOutline />
          <p className="pt-3 para">Settings</p>
        </li>
        <li className="items">
          <CiHeadphones />
          <p className="pt-3 para">Help & Support</p>
        </li>
        <li className="items">
          <RiLogoutBoxLine />
          <p className="pt-3 para">Log Out</p>
        </li>
      </ul>
    </div>
    <hr className="line" />
    <div className="bottom-container">
      <div className="initial mr-3">
        <RiAccountCircleLine />
      </div>
      <div className="nameSection ml-3">
        <h1 className="textHead">Shyam Shankar</h1>
        <p className="textDesc">Shyam01shankar@gmial.com</p>
      </div>
    </div>
  </nav>
)

export default MenuBar
