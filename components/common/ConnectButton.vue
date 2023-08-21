<script setup lang="ts">
import { useAccount } from 'use-wagmi'

const { $web3Modal } = useNuxtApp()
const { address, isConnected } = useAccount()

function connect() {
  $web3Modal?.openModal()
}
</script>

<template>
  <button class="btn btn-primary" @click="connect">
    <template v-if="!isConnected">
      Connect
    </template>
    <template v-else>
      {{ shorterAddress(address) }}
    </template>
  </button>
</template>
