<template>
  <component :is="tag" v-bind:class="customClass">{{ text }}</component>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: 'span'
    },
    customClass: {
      type: String,
      default: 'fs-6'
    }
  }
}
</script>
