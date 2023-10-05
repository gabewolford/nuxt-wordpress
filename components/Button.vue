<script setup>
defineProps({
  buttonText: String,
  required: true,
});
</script>

<template>
  <button
    class="w-fit px-2 py-1 bg-blue-500 hover:bg-blue-400 text-white text-lg font-medium"
  >
    {{ buttonText }}
  </button>
</template>
