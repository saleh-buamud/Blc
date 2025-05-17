<template>
  <section
    class="min-h-screen flex items-center justify-center bg-white text-black pt-16"
  >
    <div
      class="container mx-auto px-4 text-center"
      v-motion-slide-visible-once-bottom
    >
      <h1 class="text-5xl md:text-7xl font-bold mb-6">Welcome to Our Studio</h1>
      <p class="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
        We create digital experiences that inspire and innovate
      </p>
      <button
        class="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
      >
        Get Started
      </button>
    </div>
  </section>
</template>
