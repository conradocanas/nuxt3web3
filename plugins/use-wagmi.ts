import { UseWagmiPlugin, configureChains, createConfig } from 'use-wagmi'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { avalanche, avalancheFuji, goerli, mainnet } from 'viem/chains'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const projectId = config.public.WALLETCONNECT_PROJECT_ID
  const chains = [avalanche, avalancheFuji, mainnet, goerli]

  const { publicClient } = configureChains(chains,
    [w3mProvider({ projectId })],
  )

  const web3config = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  })

  let web3Modal = null
  if (process.client) {
    const ethereumClient = new EthereumClient(web3config, chains)
    web3Modal = new Web3Modal({ projectId }, ethereumClient)
  }

  nuxtApp.vueApp.use(UseWagmiPlugin, web3config)

  return {
    provide: {
      web3Modal,
    },
  }
})
