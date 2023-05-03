<template>
  <h1>Lalala componente {{ count }}</h1>
</template>

<script>
export default {
  name: "DoubleCarousel",
  data() {
    return {
      count: 1
    }
  },

  // `mounted` is a lifecycle hook which we will explain later
  mounted() {
    // `this` refers to the component instance.
    console.log(this.count) // => 1

    // data can be mutated as well
    this.count = 2
  }
}
</script>