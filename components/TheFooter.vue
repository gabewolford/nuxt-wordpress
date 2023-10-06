<template>
  <footer class="absolute bottom-0 w-full h-fit bg-gray-400">
    <div class="w-full h-fit bg-gray-300 p-6">
      <!-- Mobile menu -->
      <div class="flex flex-col md:hidden text-center gap-2 items-center">
        <NuxtLink to="/page1" class="hover:text-[#3D67C3]">Page 1</NuxtLink>
        <NuxtLink to="/page2" class="hover:text-[#3D67C3]">Page 2</NuxtLink>
        <NuxtLink to="/page3" class="hover:text-[#3D67C3]">Page 3</NuxtLink>
        <NuxtLink to="/page4" class="hover:text-[#3D67C3]">Page 4</NuxtLink>
      </div>

      <!-- Tablets and desktop -->
      <div class="hidden md:flex flex-row gap-8 justify-end">
        <NuxtLink to="/page1" class="hover:text-[#3D67C3]">Page 1</NuxtLink>
        <NuxtLink to="/page2" class="hover:text-[#3D67C3]">Page 2</NuxtLink>
        <NuxtLink to="/page3" class="hover:text-[#3D67C3]">Page 3</NuxtLink>
        <NuxtLink to="/page4" class="hover:text-[#3D67C3]">Page 4</NuxtLink>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row justify-between gap-6 items-center p-6"
    >
      <NuxtLink to="/">
        <img
          src="/images/placeholder-logo.png"
          alt="Placeholder logo"
          class="h-fit w-auto"
        />
      </NuxtLink>

      <!-- Mobile menu -->
      <div class="flex flex-col md:hidden text-center gap-2">
        <NuxtLink to="/privacy-policy" class="hover:text-[#3D67C3]"
          >Privacy Policy</NuxtLink
        >
        <NuxtLink to="/sitemap" class="hover:text-[#3D67C3]">Sitemap</NuxtLink>
        <h6>© 2023 Company ABC</h6>
      </div>

      <!-- Tablets and desktop -->
      <div class="hidden md:flex flex-col gap-2 items-end">
        <div class="hidden md:flex flex-row gap-6">
          <NuxtLink to="/privacy-policy" class="hover:text-[#3D67C3]"
            >Privacy Policy</NuxtLink
          >
          <NuxtLink to="/accessibility" class="hover:text-[#3D67C3]"
            >Accessibility</NuxtLink
          >
          <NuxtLink to="/sitemap" class="hover:text-[#3D67C3]"
            >Sitemap</NuxtLink
          >
        </div>
        <h6>© 2023 Company ABC</h6>
      </div>
    </div>
  </footer>
</template>
