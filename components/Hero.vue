<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  linkTo: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="flex flex-col md:flex-row gap-4">
    <div class="flex flex-col md:w-2/5 gap-4 justify-center">
      <h1 class="text-6xl font-semibold">
        {{ heading }}
      </h1>
      <h2 class="text-xl font-medium">
        {{ subheading }}
      </h2>
      <NuxtLink :to="linkTo">
        <Button :buttonText="buttonText" />
      </NuxtLink>
    </div>

    <div class="flex md:w-3/5">
      <img :src="imageUrl" :alt="altText" />
    </div>
  </section>
</template>
