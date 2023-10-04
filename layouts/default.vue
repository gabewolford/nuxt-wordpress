<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const adjustPadding = () => {
  const mainContent = mainContentRef.value;
  const footerHeight = theFooterRef.value.$el.clientHeight;

  mainContent.style.paddingBottom = `${footerHeight}px`;
};

const mainContentRef = ref(null);
const theFooterRef = ref(null);

onMounted(() => {
  adjustPadding();
  window.addEventListener("resize", adjustPadding);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", adjustPadding);
});
</script>

<template>
  <div>
    <TheHeader />
    <main ref="mainContentRef" class="mx-auto my-auto flex flex-col px-6">
      <slot />
    </main>
    <TheFooter ref="theFooterRef" />
  </div>
</template>
