import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {RiNotification2Line} from 'react-icons/ri'
import {CiSearch} from 'react-icons/ci'

const NavBar = () => (
  <nav className="navBarContainer">
    <h1 className="navDashHeading">Dashboard</h1>
    <div className="inputContainer">
      <div className="inputStyleContainer">
        <CiSearch />
        <input type="text" className="inputStyle" placeholder="Search..." />
      </div>
      <RiNotification2Line />
    </div>
  </nav>
)
export default NavBar
