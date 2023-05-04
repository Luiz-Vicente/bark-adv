<template>
  <section id="artigos" class="bg-custom-gray" style="padding-top: 15vh;">
    <div class="container">
      <TextAtom
        tag="h2"
        text="Últimos artigos"
        customClass="fs-2 fw-bold text-custom-white mb-2"
      />
      <!-- Cards Section -->
      <div class="row">
        <div
          v-for="(spec, index) in listSpecialties"
          :key="index"
          class="col-12 col-md-3 mb-3"
        >
          <div class="card bg-custom-black h-100">
            <ImageAtom
              :src="spec.src"
              customClass="card-img-top border-2 border-bottom border-custom-gold"
              customStyle="height: 280px; border-radius: 10px 10px 0 0"
              :info="spec.tooltipText"
            />
            <div class="card-body py-4">
              <TextAtom
                tag="h5"
                customClass="fs-5 text-custom-white card-title text-center fw-semibold m-0"
                :text="spec.name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      listSpecialties: [
        {
          src: "/images/especialidades/empresarial.webp",
          name: "Empresarial",
          // tooltipText: "Clique na imagem para conhecer o advogado",
        },
        {
          src: "/images/especialidades/imobiliario.webp",
          name: "Imobiliario",
          // tooltipText: "Clique na imagem para conhecer o advogado",
        },
        {
          src: "/images/especialidades/civel.webp",
          name: "Cível",
          // tooltipText: "Clique na imagem para conhecer o advogado",
        },
        {
          src: "/images/especialidades/trabalhista.webp",
          name: "Trabalhista",
          // tooltipText: "Clique na imagem para conhecer o advogado",
        },
        {
          src: "/images/especialidades/administracao.webp",
          name: "Administrativo",
          // tooltipText: "Clique na imagem para conhecer o advogado",
        },
        {
          src: "/images/especialidades/tributario.webp",
          name: "Tributário",
          // tooltipText: "Clique na imagem para conhecer o advogado",
        },
        {
          src: "/images/especialidades/eleitoral.webp",
          name: "Eleitoral",
          // tooltipText: "Clique na imagem para conhecer o advogado",
        },
        {
          src: "/images/especialidades/internacional.webp",
          name: "Internacional",
          // tooltipText: "Clique na imagem para conhecer o advogado",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
  border-radius: 10px !important;
}
</style>
