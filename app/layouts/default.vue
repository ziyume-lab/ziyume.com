<script setup lang="ts">
import BubblesBg from '~/components/ui/BubblesBg'
</script>

<template>
  <div class="flex flex-col w-full h-lvh">
    <BubblesBg
      class="flex flex-col h-full w-full"
      :blur="4"
    >
      <div class="flex w-full p-2 select-none">
        <Header />
      </div>
      <div class="flex size-full flex-col items-center justify-center">
        <slot />
      </div>
    </BubblesBg>
  </div>
</template>
