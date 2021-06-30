import styled from 'styled-components'


export const WalletStyles = styled.main`
  background: #FFF;
  width: 90%;
  height: 50%;
  margin: 20px auto;
  padding: 20px;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  li {
    margin: 0 15px 0 0;
    list-style-type: none;
    text-align: center;
  }
  .chain-id {
    border: 1px solid black;
    padding: 10px;
    width: 140px;
  }
  .btn-web3 button {
    border: 1px solid #C8C8C8;
    padding: 10px;
    border-radius: 5px;
    background: #E8E8E8;
    width: 200px;
  }
  .btn-web3 p {
    border: 0px solid #000;
    border-radius: 5px;
    background: green;
    color: white;
    width: 200px;
    padding: 10px;
    margin: 0;
  }
  .spoiler {
    padding-top: 8px;
  }
  .form-group {
    margin: 15px 0;
  }
  .form-group label {
    display: inline-block;
    width: 130px;
  }
  .send-address {
    font-size: .8em;
    width: 350px;
  }
  .send-amount {
    width: 100px;
  }
  .btn-sub {
    border: 1px solid #C8C8C8;
    border-radius: 10px;
    width: 150px;
    text-align: center;
    padding: 5px;
    background: #E8E8E8;
  }
  .Toastify__toast-container {
    margin-top: 150px;
  }
`
