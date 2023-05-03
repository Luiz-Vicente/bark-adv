<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <NavbarOrganism />
  <RouterView />
</template>

<script>
import NavbarOrganism from '@/components/organism/NavbarOrganism.vue';

export default {
  components: {
    NavbarOrganism
  }
}
</script>