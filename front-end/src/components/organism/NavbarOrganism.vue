<template>
  <nav
    style="z-index: 2"
    class="navbar navbar-dark position-fixed w-100 navbar-expand-lg bg-black border-2 border-bottom border-custom-gold"
  >
    <div class="container-fluid">
      <img
        src="/images/logos/logo-branca-pequena.webp"
        style="width: 60px; height: 70px"
        class="navbar-brand"
      />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="/#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link active text-white text-decoration-none p-4 fs-4"
              aria-current="page"
              href="/#time"
              >Time</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-white text-decoration-none p-4 fs-4"
              href="/#especialidades"
              >Especialidades</a
            >
          </li>
          <!-- <li class="nav-item">
            <a
              class="nav-link text-white text-decoration-none p-4 fs-4"
              href="/#artigos"
              >Artigos</a
            >
          </li> -->
          <li class="nav-item">
            <a
              class="nav-link text-white text-decoration-none p-4 fs-4"
              href="/#rodape"
              >Contato</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-white text-decoration-none p-4 fs-4"
              href="/#rodape"
              >Localização</a
            >
          </li>
          <!-- <li class="nav-item">
            <a
              class="nav-link text-white text-decoration-none p-4 fs-4"
              href="/tour"
              >Tour</a
            >
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a:hover {
  transition: all 0.4s;
  font-weight: 500;
}
</style>
