<template>
  <div v-bind:style="myStyle" v-bind:class="myClass">
    <i
      v-if="info"
      data-bs-toggle="tooltip"
      :data-bs-title="info"
      class="bi bi-info-circle me-2 mt-2 text-custom-white fw-bold fs-4 shadow"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    customStyle: String,
    customClass: String,
    info: { type: String, default: null },
  },
  mounted() {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  },
  computed: {
    myStyle() {
      return `background-image: url(${this.src}); ${this.customStyle}`;
    },
    myClass() {
      return `text-end ${this.customClass}`;
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
