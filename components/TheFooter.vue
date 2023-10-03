<template>
  <footer
    class="absolute bottom-0 w-full lg:w-[700px] text-xs px-8 pb-4 md:pb-8 md:px-24"
  >
    <!-- Tablet and desktop footer -->
    <div class="hidden md:flex md:flex-row gap-2 w-full justify-between">
      <h3>© 2023 Gabe Wolford</h3>
      <NuxtLink to="mailto:gabewolford@gmail.com"
        >gabewolford@gmail.com</NuxtLink
      >
      <NuxtLink to="https://github.com/gabewolford" target="_blank"
        >GitHub</NuxtLink
      >
      <NuxtLink to="https://www.linkedin.com/in/gabe-wolford/" target="_blank"
        >LinkedIn</NuxtLink
      >
    </div>

    <!-- Mobile footer -->
    <div class="flex md:hidden flex-row justify-between">
      <div class="flex flex-col gap-1">
        <NuxtLink to="mailto:gabewolford@gmail.com"
          >gabewolford@gmail.com</NuxtLink
        >
        <h3>© 2023 Gabe Wolford</h3>
      </div>

      <div class="flex flex-col gap-1">
        <NuxtLink to="https://github.com/gabewolford" target="_blank"
          >GitHub</NuxtLink
        >
        <NuxtLink to="https://www.linkedin.com/in/gabe-wolford/" target="_blank"
          >LinkedIn</NuxtLink
        >
      </div>
    </div>
  </footer>
</template>
