<template>
  <section class="py-20 bg-white ">
    <div class="container mx-auto px-4" v-motion-slide-visible-once-bottom>
      <h2 class="text-4xl font-bold text-center mb-12">Our Partners</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div
            class="w-24 h-24 bg-gray-200 rounded-full mb-6 flex items-center justify-center"
          >
            {{ partner.initial }}
          </div>
          <h3 class="text-xl font-bold mb-2">{{ partner.name }}</h3>
          <p class="text-gray-600">{{ partner.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const partners = [
  {
    name: "Tech Solutions Inc.",
    description: "Leading provider of innovative technology solutions",
    initial: "TS",
  },
  {
    name: "Digital Dynamics",
    description: "Experts in digital transformation and strategy",
    initial: "DD",
  },
  {
    name: "Creative Hub",
    description: "Creative design and branding specialists",
    initial: "CH",
  },
];
</script>
