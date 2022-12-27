<template>
  <nav
    class="w-100 px-3 py-2 d-flex d-md-none flex-column align-items-center justify-content-center bg-gray-primary"
  >
    <div class="w-100 d-flex align-items-center justify-content-between">
      <router-link to="/"
        ><img class="w-45px me-auto" src="/img/logos/logo-branca-pequena.webp" alt=""
      /></router-link>
      <i
        type="button"
        @click="collapsed = !collapsed"
        :class="collapsed ? 'bi-list' : 'bi-x-lg'"
        class="bi text-white fs-9"
      ></i>
    </div>
    <div :class="{ 'd-none': collapsed }">
      <!-- <a
        class="p-3 w-100 text-center border-bottom nav-link text-white"
        href="/#faq"
        >FAQ</a
      > -->
    </div>
  </nav>
  <nav
    class="w-100 d-none d-md-flex align-items-center justify-content-end bg-gray-primary py-2 px-3 px-md-5"
  >
    <router-link class="me-auto" to="/"
      ><img class="w-55px me-auto" src="/img/logos/logo-branca-pequena.webp" alt=""
    /></router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables/colors.scss";

nav {
  z-index: 2;
  position: sticky;
  top: 0px;
}
.nav-link:hover {
  font-weight: 500;
}
</style>
