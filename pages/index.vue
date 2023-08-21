<script setup lang="ts">
import { useEnsAvatar } from 'use-wagmi'

const ensExampleAvatar = ref(['jxom.eth', 'domico.eth', 'awkweb.eth'])
const selectedEnsAvatar = ref('')

const { data: ensAvatar, isLoading: loadingAvatar } = useEnsAvatar({
  name: selectedEnsAvatar,
})
</script>

<template>
  <main>
    <div class="container py-4">
      <div class="row g-4">
        <div class="col-12 col-md-6">
          <div class="row g-4">
            <div class="col-12">
              <WalletDataCard />
            </div>
            <div class="col-12">
              <TransactionsExampleCard />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                ENS Avatar Example
              </h5>
              <div class="row g-0">
                <div class="col">
                  <select
                    v-model="selectedEnsAvatar" class="form-select form-select-lg"
                    aria-label="Default select example"
                  >
                    <option value="" selected>
                      Pick an avatar
                    </option>
                    <option v-for="item in ensExampleAvatar" :key="item" :value="item">
                      {{ item }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="mt-4">
                <p v-if="loadingAvatar">
                  Loading avatar...
                </p>
                <img v-else-if="ensAvatar" style="max-width: 150px;" :src="ensAvatar" alt="">
                <p v-else-if="selectedEnsAvatar">
                  ENS Not found
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
