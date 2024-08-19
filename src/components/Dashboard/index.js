import MenuBar from '../MenuBar'
import NavBar from '../NavBar'
import QuickLinks from '../QuickLinks'
import Overview from '../Overview'
import TradingAccount from '../TradingAccount'
import OpenTrade from '../OpenTrade'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Dashboard = () => (
  <div className="dashboardContainer">
    <MenuBar />
    <div className="rightSectionContainer">
      <NavBar />
      <div className="sideContainer">
        <div className="leftSideContainer">
          <QuickLinks />
          <Overview />
        </div>
        <div className="rightSideContainer">
          <TradingAccount />
          <OpenTrade />
        </div>
      </div>
    </div>
  </div>
)
export default Dashboard
