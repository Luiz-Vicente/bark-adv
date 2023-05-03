<template>
  <div v-bind:style="style" v-bind:class="customClass" />
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    customStyle: String,
    customClass: String,
  },
  computed: {
    style() {
      return `background-image: url(${this.src}); ${this.customStyle}`;
    },
  },
};
</script>

<style scoped>
div {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
