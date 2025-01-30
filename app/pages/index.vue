<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const online = useOnline()
</script>

<template>
  <div>
    <ClientOnly>
      <Suspense>
        <PageView v-if="online" />
        <div v-else class="text-gray:80">
          You're offline
        </div>
        <template #fallback>
          <div italic op50>
            <span class="animate-pulse">Loading...</span>
          </div>
        </template>
      </Suspense>
      <template #fallback>
        <div class="op50">
          <span class="animate-pulse">...</span>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>
