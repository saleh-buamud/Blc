<template>
  <nav class="shadow-md w-full z-50 top-0 left-0">
    <!-- Container Fluid مع مسافات جانبية -->
    <div
      class="container mx-auto px-8 sm:px-6 lg:px-8 py-9 flex justify-between items-center"
    >
      <!-- Logo -->
      <div class="text-2xl font-bold text-black">MySite</div>
      <!-- تكبير الخط وإضافة text-white -->

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-8 text-black">
        <li>
          <a href="#" class="hover:text-blue-300 text-lg md:text-xl">Home</a>
        </li>
        <li>
          <a href="#" class="hover:text-blue-300 text-lg md:text-xl">About</a>
        </li>
        <li>
          <a href="#" class="hover:text-blue-300 text-lg md:text-xl"
            >Services</a
          >
        </li>
        <li>
          <a href="#" class="hover:text-blue-300 text-lg md:text-xl">Contact</a>
        </li>
      </ul>

      <!-- Toggle Button for Mobile -->
      <button
        @click="toggleMenu"
        class="md:hidden z-50 text-black focus:outline-none transition-all duration-300"
        aria-label="Toggle menu"
      >
        <svg
          v-show="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 transition-all duration-300 transform"
          :class="{ 'opacity-0 rotate-90': isMenuOpen }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-show="isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 transition-all duration-300 transform"
          :class="{ 'opacity-0 -rotate-90': !isMenuOpen }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Slide Panel -->
    <div
      :class="[
        'md:hidden bg-black fixed top-0 left-0 h-full w-full transform transition-transform duration-300 ease-in-out z-40',
        isMenuOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <ul
        class="flex flex-col justify-center h-full space-y-10 text-3xl px-6 text-white text-center"
      >
        <!-- تكبير الخط وتغيير اللون -->
        <li>
          <a href="#" @click="closeMenu" class="hover:text-blue-300">Home</a>
        </li>
        <li>
          <a href="#" @click="closeMenu" class="hover:text-blue-300">About</a>
        </li>
        <li>
          <a href="#" @click="closeMenu" class="hover:text-blue-300"
            >Services</a
          >
        </li>
        <li>
          <a href="#" @click="closeMenu" class="hover:text-blue-300">Contact</a>
        </li>
      </ul>
    </div>

    <!-- Overlay -->
    <div
      v-show="isMenuOpen"
      @click="closeMenu"
      class="fixed inset-0 bg-black bg-opacity-70 z-30 transition-opacity duration-300"
    ></div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
/* يمكنك إضافة أنماط إضافية هنا إذا لزم الأمر */
</style>
