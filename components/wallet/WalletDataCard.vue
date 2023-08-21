<script setup lang="ts">
import { useAccount, useBalance } from 'use-wagmi'

const { address, status } = useAccount()
const { data: balance, isLoading: isLoadingBalance } = useBalance({
  address,
})
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        Wallet Data
      </h5>
      <div>
        <p>Status: <span :class="status === 'connected' ? 'text-success' : ''">{{ status }}</span></p>
        <p>Address: {{ address }}</p>
      </div>
      <div>
        <p>
          Balance: <span v-if="isLoadingBalance">loading...</span> <span v-else>{{ balance?.formatted }} {{
            balance?.symbol }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
