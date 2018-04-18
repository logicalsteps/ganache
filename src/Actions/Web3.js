import ReduxWeb3Provider from './helpers/ReduxWeb3Provider'
import Web3 from 'web3'

const prefix = "WEB3"

export const SET_WEB3_INSTANCE = `${prefix}/SET_WEB3_INSTANCE`
export function setWeb3Instance(web3Instance) {
  return { type: SET_WEB3_INSTANCE, web3Instance }
}

export const SET_RPC_PROVIDER_URL = `${prefix}/SET_RPC_PROVIDER_URL`
export function setRPCProviderUrl(url) {
  console.log('Must be using', url); // ws://127.0.0.1:7545
  return function(dispatch, getState) {
    const provider = new ReduxWeb3Provider('ws://127.0.0.1:8546', dispatch, getState)
    const web3Instance = new Web3(provider)
    dispatch(setWeb3Instance(web3Instance))
  }
}
