import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const OpenTrade = () => (
  <div className="openTradeContainer">
    <h6 className="openTradeHeading">Open Trades</h6>
    <div className="openTradeLists">
      <li className="openTradeItem1">
        <div className="sectionContainer">
          <div className="miniSectionContainer">
            <p className="GBPUSD">GBPUSD</p>
            <p className="Long">Long</p>
          </div>
          <p>0.12</p>
        </div>
        <p className="pr-3">
          <span className="span1">+56.00</span>USD
        </p>
      </li>
      <li className="openTradeItem1">
        <div className="sectionContainer">
          <div className="miniSectionContainer">
            <p className="GBPUSD">USDJPY</p>
            <p className="Long">Long</p>
          </div>
          <p>0.12</p>
        </div>
        <p className="pr-3">
          <span className="span2"> -0.09</span>USD
        </p>
      </li>
      <li className="openTradeItem1">
        <div className="sectionContainer">
          <div className="miniSectionContainer">
            <p className="GBPUSD">EURUSD</p>
            <p className="Short">Short</p>
          </div>
          <p>0.12</p>
        </div>
        <p className="pr-3">
          <span className="span2"> -0.09</span>USD
        </p>
      </li>
    </div>
  </div>
)
export default OpenTrade
