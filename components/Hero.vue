<script setup>
defineProps({
  mainText: {
    type: String,
    required: true,
  },
  secondaryText: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="flex flex-col md:flex-row gap-4">
    <div class="flex flex-col md:w-2/5 gap-4 justify-center">
      <h1 class="text-6xl font-semibold">
        {{ mainText }}
      </h1>
      <h2 class="text-xl font-medium">
        {{ secondaryText }}
      </h2>
      <Button :buttonText="buttonText" />
    </div>

    <div class="flex md:w-3/5">
      <div class="bg-gray-500 h-[500px] flex-1"></div>
    </div>
  </section>
</template>
