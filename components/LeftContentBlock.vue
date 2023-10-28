<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
  subHeading: {
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
  <section class="flex flex-col md:flex-row gap-10">
    <div class="flex md:w-1/2">
      <img :src="imageUrl" :alt="altText" />
    </div>

    <div class="flex flex-col md:w-1/2 gap-4 justify-center px-8">
      <h1 class="text-4xl font-semibold">
        {{ heading }}
      </h1>
      <h2 class="text-xl font-medium">
        {{ subHeading }}
      </h2>
      <NuxtLink :to="linkTo">
        <Button :buttonText="buttonText" />
      </NuxtLink>
    </div>
  </section>
</template>
