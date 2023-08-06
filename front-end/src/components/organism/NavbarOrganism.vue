<template>
  <nav
    style="z-index: 2"
    class="navbar navbar-dark w-100 navbar-expand-lg bg-black border-2 border-bottom border-custom-gold"
  >
    <div class="container-fluid">
      <router-link to="/" class="col-md-2 col-6"
        ><img
          src="/images/logos/logo-branca-total.svg"
          class="navbar-brand"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-on:click="toggle">
            <a
              class="nav-link active text-white text-decoration-none fs-5"
              aria-current="page"
              href="/#sobre"
              >Sobre</a
            >
          </li>
          <li class="nav-item" v-on:click="toggle">
            <a
              class="nav-link active text-white text-decoration-none fs-5"
              aria-current="page"
              href="/#equipe"
              >Profissionais</a
            >
          </li>
          <li class="nav-item" v-on:click="toggle">
            <a
              class="nav-link text-white text-decoration-none fs-5"
              href="/#especialidades"
              >Especialidades</a
            >
          </li>
          <!-- <li class="nav-item">
            <a
              class="nav-link text-white text-decoration-none fs-5"
                    href="/#artigos"
                    >Artigos</a
                  >
                </li> -->
          <li class="nav-item" v-on:click="toggle">
            <a
              class="nav-link text-white text-decoration-none fs-5"
              href="/#rodape"
              >Contato</a
            >
          </li>
          <li class="nav-item" v-on:click="toggle">
            <a
              class="nav-link text-white text-decoration-none fs-5"
              href="/#rodape"
              >Localização</a
            >
          </li>
          <li class="nav-item" v-on:click="toggle">
            <a
              class="nav-link text-white text-decoration-none fs-5"
              href="/tour"
              >Tour</a
            >
          </li>
          <li class="nav-item" v-on:click="toggle">
            <a
              class="nav-link text-white text-decoration-none fs-5"
              href="/blog"
              >Blog</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { Collapse } from "bootstrap/dist/js/bootstrap.esm.min.js";

export default {
  mounted() {
    Array.from(
      document.querySelectorAll('[data-bs-toggle="collapse"]')
    ).forEach((navBar) => new Collapse(navBar));
  },
  methods: {
    toggle() {
      const screenWidth =
        window.innerWidth || document.documentElement.clientWidth;
      if (screenWidth < 900) {
        const nav = new Collapse(document.getElementById("navbarNav"));
        nav.hide();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0px;
  z-index: 9999;
}
</style>
