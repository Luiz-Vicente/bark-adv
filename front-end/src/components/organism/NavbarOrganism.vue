<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-black border-2 border-bottom border-custom-gold">
    <div class="container-fluid">
      <ImageAtom
        src="/images/logos/logo-branca-pequena.webp"
        customStyle="width: 70px; height: 70px"
        customClass="navbar-brand"
      />
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
          <li class="nav-item">
            <a
              class="nav-link active text-white text-decoration-none p-4 fs-4"
              aria-current="page"
              href="/"
              >Time</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-white text-decoration-none p-4 fs-4"
              href="/"
              >Especialidades</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-white text-decoration-none p-4 fs-4"
              href="/"
              >Artigos</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-white text-decoration-none p-4 fs-4"
              href="/"
              >Contato</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-white text-decoration-none p-4 fs-4"
              href="/"
              >Localização</a
            >
          </li>
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
