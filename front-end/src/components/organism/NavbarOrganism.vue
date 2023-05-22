<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav style="z-index: 2"
    class="navbar navbar-dark position-fixed w-100 navbar-expand-lg bg-black border-2 border-bottom border-custom-gold">
    <div class="container-fluid">
      <router-link to="/"><img src="/images/logos/logo-branca-total.svg" style="width: 250px; height: 70px"
          class="navbar-brand" /></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active text-white text-decoration-none p-4 fs-4" aria-current="page"
              v-on:click="toogle" href="/#sobre">Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-white text-decoration-none p-4 fs-4" aria-current="page"
            v-on:click="toogle" href="/#equipe">Profissionais</a>
          </li>
        <li class="nav-item">
          <a class="nav-link text-white text-decoration-none p-4 fs-4" v-on:click="toogle" href="/#especialidades">Especialidades</a>
        </li>
        <!-- <li class="nav-item">
            <a
              class="nav-link text-white text-decoration-none p-4 fs-4"
                    href="/#artigos"
                    >Artigos</a
                  >
                </li> -->
          <li class="nav-item">
            <a class="nav-link text-white text-decoration-none p-4 fs-4" v-on:click="toogle" href="/#rodape">Contato</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white text-decoration-none p-4 fs-4" v-on:click="toogle" href="/#rodape">Localização</a>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white text-decoration-none p-4 fs-4" v-on:click="toogle" to="/tour">Tour</RouterLink>
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
    toogle(){
      const nav = new Collapse(document.getElementById('navbarNav'));
      nav.close()
    }
  }
}
</script>

<style scoped>
a:hover {
  transition: all 0.4s;
  font-weight: 500;
}
</style>
