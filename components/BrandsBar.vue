<script setup>
const config = useRuntimeConfig();
const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
  method: "get",
  query: {
    query: `
    query BrandsQuery {
      brands {
        nodes {
          name
          image {
            altText
            sourceUrl
          }
        }
      }
    }
    `,
  },
});

const brandData = data._rawValue.data.brands.nodes;
</script>

<template>
  <div
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-10"
  >
    <Brand v-for="brand in brandData" :brand="brand" :key="brand.name" />
  </div>
</template>
