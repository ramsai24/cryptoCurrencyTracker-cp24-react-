// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyItem extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getcryptoListData()
  }

  getcryptoListData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)

    const updatedList = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    console.log(updatedList)
    this.setState({cryptoList: updatedList, isLoading: false})
  }

  render() {
    const {cryptoList, isLoading} = this.state

    return (
      <div className="app-container">
        <div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            <div>
              <h1>Cryptocurrency Tracker</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                alt="cryptocurrency"
              />
              <div className="crypto-container">
                <div className="each-item">
                  <div className="crypto-currenices">
                    <p>Coin Type</p>
                  </div>
                  <div className="crypto-currenices">
                    <p>USD</p>
                    <p>EURRO</p>
                  </div>
                </div>
                <ul className="crypto-container">
                  {cryptoList.map(each => (
                    <CryptocurrenciesList cryptoItem={each} key={each.id} />
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default CryptocurrencyItem
