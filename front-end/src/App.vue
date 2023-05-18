<template>
  <div>
    <NavbarOrganism />
    <RouterView />
    <FooterOrganism />
  </div>
</template>

<script>
import NavbarOrganism from '@/components/organism/NavbarOrganism.vue';
import FooterOrganism from '@/components/organism/FooterOrganism.vue';

export default {
  components: {
    NavbarOrganism,
    FooterOrganism,
  }
}
</script>