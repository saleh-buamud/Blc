<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4" v-motion-slide-visible-once-bottom>
      <h2 class="text-4xl font-bold text-center mb-12">Our Clients</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        <div v-for="i in 4" :key="i" class="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
          Logo {{ i }}
        </div>
      </div>
    </div>
  </section>
</template>