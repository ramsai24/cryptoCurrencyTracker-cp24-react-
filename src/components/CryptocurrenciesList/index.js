// Write your JS code here
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoItem} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = cryptoItem

  return (
    <li className="each-item">
      <div className="crypto-currenices">
        <img className="coin-logo" src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="crypto-currenices">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrenciesList
