<script setup>
import { ref, watch } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const toggleBodyScroll = (isOpen) => {
  document.body.style.overflow = isOpen ? "hidden" : "auto";
};

watch(isMobileMenuOpen, toggleBodyScroll);
</script>

<template>
  <header class="p-4 md:p-6">
    <nav class="flex flex-row justify-between items-center">
      <NuxtLink to="/">
        <img
          src="/images/placeholder-logo.png"
          alt="Placeholder logo"
          class="h-[50px] w-auto"
        />
      </NuxtLink>

      <div v-if="!isMobileMenuOpen" class="md:hidden">
        <button @click="toggleMobileMenu">
          <img src="/images/menu-icon.svg" alt="Menu" />
        </button>
      </div>

      <button
        v-if="isMobileMenuOpen"
        @click="toggleMobileMenu"
        class="md:hidden absolute top-6 right-4 z-50 text-white"
      >
        <img src="/images/close-icon.svg" alt="Close" class="" />
      </button>

      <div
        v-if="isMobileMenuOpen"
        class="md:hidden fixed inset-0 bg-[#000000] bg-opacity-80 z-40"
      >
        <div
          class="flex flex-col h-full justify-center space-y-12 items-center"
        >
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/"
            class="text-white hover:text-blue-500 text-xl"
            >Home</NuxtLink
          >
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/page1"
            class="text-white hover:text-blue-500 text-xl"
            >Page 1</NuxtLink
          >
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/page2"
            class="text-white hover:text-blue-500 text-xl"
            >Page 2</NuxtLink
          >
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/page3"
            class="text-white hover:text-blue-500 text-xl"
            >Page 3</NuxtLink
          >
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/page4"
            class="text-white hover:text-blue-500 text-xl"
            >Page 4</NuxtLink
          >
        </div>
      </div>

      <div class="hidden md:block flex-row space-x-10">
        <NuxtLink to="/page1" class="hover:text-blue-500">Page 1</NuxtLink>
        <NuxtLink to="/page2" class="hover:text-blue-500">Page 2</NuxtLink>
        <NuxtLink to="/page3" class="hover:text-blue-500">Page 3</NuxtLink>
        <NuxtLink to="/page4" class="hover:text-blue-500">
          <Button buttonText="Page 4" />
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
