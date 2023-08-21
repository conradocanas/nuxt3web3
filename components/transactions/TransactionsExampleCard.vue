<script setup>
import { useWaitForTransaction } from 'use-wagmi'

const { data, isLoading: loadingTransaction } = useWaitForTransaction({
  hash: '0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060',
})
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        Transaction Example Data
      </h5>
      <p v-if="loadingTransaction">
        Loading example transaction..
      </p>
      <p v-for="[key, value] in Object.entries(data || [])" :key="value">
        {{ key }}: {{ value }}
      </p>
    </div>
  </div>
</template>
