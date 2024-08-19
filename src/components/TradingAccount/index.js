import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {GoArrowUpRight} from 'react-icons/go'

const TradingAccount = () => (
  <div className="tradingAccountContainer">
    <h6 className="tradeHeading">Trading Accounts</h6>
    <div className="tradingLists">
      <li className="tradingItem">
        <p className="tradeName">Master Account</p>
        <div className="trader">
          <p className="cTrade">C Trader</p>
          <p className="number">#273728</p>
        </div>
        <div className="USD">
          <p>
            <span className="tradeMoney">0.00</span>USD
          </p>
          <GoArrowUpRight />
        </div>
      </li>
      <li className="tradingItem">
        <p className="tradeName">Master Account</p>
        <div className="trader">
          <p className="cTrade">C Trader</p>
          <p className="number">#273728</p>
        </div>
        <div className="USD">
          <p>
            <span className="tradeMoney">0.00</span>USD
          </p>
          <GoArrowUpRight />
        </div>
      </li>
    </div>
  </div>
)
export default TradingAccount
