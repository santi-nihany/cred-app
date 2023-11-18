import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { WagmiConfig, createConfig } from "wagmi"
import { InjectedConnector, configureChains } from '@wagmi/core'
import { localhost } from "@wagmi/chains"
import { publicProvider } from '@wagmi/core/providers/public'

export default function MyApp({ Component, pageProps }) {

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [localhost],
    [publicProvider()],
  )

  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors: [new InjectedConnector({ chains })],
  })



  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
      <ToastContainer />
    </WagmiConfig>
  )
}
