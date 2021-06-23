import React, { useState, useEffect, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import web3 from './web3'
import { GlobalStyles } from './styles/global-style'
import { WalletStyles } from './styles/app-styles'
import { SpinnerAnimate } from './styles/icons-spinner'


const App = () => {
  const [isConnectedWeb3, setIsConnectedWeb3] = useState(false)
  const [accounts, setAccounts] = useState([])
  const [balance, setBalance] = useState('')
  const [weiToSend, setWeiToSend] = useState('')
  const [addressToSend, setAddressToSend] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const notifySend = () => toast('Send Ether!');
  const notifyFail = () => toast.error('Fail Send Tx!');
  const notifyTx = () => toast.success('Wow so easy!');

  // connect to Ethereum wallet
  const connectToWeb3 = useCallback(async () => {
    if(window.ethereum) {
      try {
        const resp = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setAccounts([resp][0].concat(accounts))

        setIsConnectedWeb3(true)
      } catch (err) {
        console.log(err)
      }
    } else {
      alert("Install Metamask")
    }
  }, [accounts])

  useEffect(() => {
    const getAccounts = async () => setAccounts(await web3.eth.getAccounts())
    const getBalance = async () => {
      const balanceWei = await web3.eth.getBalance(accounts[0])
      const wallet = web3.utils.fromWei(balanceWei, 'ether')
      setBalance(wallet.substring(0, 4))
    }

    if (accounts.length === 0) getAccounts()
    if (accounts.length > 0) getBalance()

  }, [isConnectedWeb3, accounts, isLoading])

  const getNetwork = () => {
    const chainId = web3.currentProvider.chainId
    let network

    switch (chainId) {
      case '0x1':
        network = 'Ethereum'
        break
      case '0x2a':
        network = 'Kovan'
        break
      case '0x3':
        network = 'Ropsten'
        break
      case '0x4':
        network = 'Rinkeby'
        break
      case '0x5':
        network = 'Goerli'
        break
      default:
        break
    }
    return network
  }

  const sendEth = useCallback(
    async () => {
      const sendWei = web3.utils.toWei(weiToSend, 'ether')
      try {
        notifySend()
        setIsLoading(true)
        const resp = await web3.eth.sendTransaction({ from: accounts[0], to: addressToSend, value: sendWei })
        console.log(resp)
        notifyTx()

      } catch (err) {
        notifyFail()
        console.log(err)
      }
      setIsLoading(false)
      setAddressToSend('')
      setWeiToSend('')
    },
    [accounts, addressToSend, weiToSend]
  )

  return (
    <div className="App">
      <GlobalStyles />
      <WalletStyles>
        <ul>
          <li className="spoiler">
            {isLoading
              ? <img src={`data:image/svg+xml;utf8,${SpinnerAnimate}`} width="25" height="25" alt="spinner dynamic" />
              : ''
            }
          </li>
          <li className="chain-id">
            <span>{getNetwork()}</span>
          </li>
          <li className="btn-web3">
            {isConnectedWeb3
              ? <p>Connected Web3</p>
              : <button onClick={connectToWeb3}>Connect to web3</button>
            }
          </li>
        </ul>
        <h2>Wallet dApp</h2>
        <p>Amount Ethers: <span>{balance}</span> ETH</p>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" onChange={e => setAddressToSend(e.target.value)} value={addressToSend} className="send-address" />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input type="text" onChange={e => setWeiToSend(e.target.value)} value={weiToSend} className="send-amount" />
        </div>
        <button className="btn-sub" onClick={sendEth}>Envoyer</button>
        <ToastContainer />
      </WalletStyles>
    </div>
  );
}

export default App;
