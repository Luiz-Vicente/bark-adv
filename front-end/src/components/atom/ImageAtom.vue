<template>
  <div v-bind:style="myStyle" v-bind:class="myClass">
    <TextAtom
      v-if="title"
      tag="h1"
      customClass="text-custom-white fs-1 fw-bold position-relative top-50 text-center w-100"
      :text="title"
    />
    <i
      v-if="false"
      data-bs-toggle="tooltip"
      :data-bs-title="info"
      class="bi bi-info-circle me-2 mt-2 text-custom-white fw-bold fs-4 shadow"
    ></i>
  </div>
</template>

<script>
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";
export default {
  props: {
    src: { type: String, required: true },
    customStyle: String,
    customClass: String,
    title: String,
    info: { type: String, default: null },
  },
  mounted() {
    Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));
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
}
</style>
