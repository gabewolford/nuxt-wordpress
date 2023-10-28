<script setup>
defineProps({
  brand: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col gap-6 w-[100px] h-auto">
    <img :src="brand.image.sourceUrl" :alt="brand.image.altText" />
  </div>
</template>
