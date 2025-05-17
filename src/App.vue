<script setup lang="ts">
// import { MotionPlugin } from "@vueuse/motion";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Video from "./components/Video.vue";
import Clients from "./components/Clients.vue";
import OurPernts from "./components/OurPernts.vue";
import Testimonials from "./components/Testimonials.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <Video />
    <Clients />
    <OurPernts />
    <Testimonials />
    <Footer />
  </div>
</template>
