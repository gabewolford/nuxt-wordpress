<script setup>
defineProps({
  buttonText: String,
  required: true,
});
</script>

<template>
  <button
    class="w-fit px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white text-lg font-medium rounded-full"
  >
    {{ buttonText }}
  </button>
</template>
