<template>
  <section
    class="py-20 bg-black text-white min-h-screen flex items-center justify-center"
  >
    <div class="container mx-auto px-4" v-motion-slide-visible-once-bottom>
      <h2 class="text-4xl font-bold text-center mb-12">Testimonials</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="i in 3" :key="i" class="bg-white/10 p-6 rounded-lg">
          <p class="mb-4">
            "Amazing service and incredible results. Highly recommended!"
          </p>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
            <div>
              <h4 class="font-bold">John Doe</h4>
              <p class="text-sm text-gray-400">CEO, Company {{ i }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
