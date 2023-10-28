<script setup>
const config = useRuntimeConfig();
const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
  method: "get",
  query: {
    query: `
      query PrivacyPolicyQuery {
      pages(where: {id: 3}) {
        nodes {
          content
        }
      }
    }`,
  },
});

const pageData = data._rawValue.data.pages.nodes[0];
console.log(pageData.content);
</script>

<template>
  <div v-html="pageData.content" class="flex flex-col gap-4"></div>
</template>
