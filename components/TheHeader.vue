<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  watch: {
    isMobileMenuOpen(newValue) {
      this.toggleBodyScroll(newValue);
    },
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    toggleBodyScroll(isOpen) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
};
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

      <!-- Mobile menu button (hidden when menu is open) -->
      <div v-if="!isMobileMenuOpen" class="md:hidden">
        <button @click="toggleMobileMenu">
          <img src="/images/menu-icon.svg" alt="Menu" />
        </button>
      </div>

      <!-- Close button (hidden when menu is closed) -->
      <button
        v-if="isMobileMenuOpen"
        @click="toggleMobileMenu"
        class="md:hidden absolute top-6 right-4 z-50 text-white"
      >
        <img src="/images/close-icon.svg" alt="Close" class="" />
      </button>

      <!-- Mobile navigation links (full-screen overlay) -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden fixed inset-0 bg-[#000000] bg-opacity-80 z-40"
      >
        <div
          class="flex flex-col h-full justify-center space-y-12 items-center"
        >
          <!-- Close button inside the mobile menu -->
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/"
            class="text-white hover:text-[#3D67C3] text-xl"
            >Home</NuxtLink
          >
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/page1"
            class="text-white hover:text-[#3D67C3] text-xl"
            >Page 1</NuxtLink
          >
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/page2"
            class="text-white hover:text-[#3D67C3] text-xl"
            >Page 2</NuxtLink
          >
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/page3"
            class="text-white hover:text-[#3D67C3] text-xl"
            >Page 3</NuxtLink
          >
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/page4"
            class="text-white hover:text-[#3D67C3] text-xl"
            >Page 4
          </NuxtLink>
        </div>
      </div>

      <!-- Desktop navigation links -->
      <div class="hidden md:block flex-row space-x-10">
        <NuxtLink to="/page1" class="hover:text-[#3D67C3]">Page 1</NuxtLink>
        <NuxtLink to="/page2" class="hover:text-[#3D67C3]">Page 2</NuxtLink>
        <NuxtLink to="/page3" class="hover:text-[#3D67C3]">Page 3</NuxtLink>
        <NuxtLink to="/page4" class="hover:text-[#B0BED4]">
          <div
            class="inline-block px-4 py-2 text-white bg-[#2655BB] hover:bg-[#3D67C3]"
          >
            Page 4
          </div>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
