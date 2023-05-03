<template>
  <div class="bg-custom-gray pt-5">
    <div class="container">
      <TextAtom
        tag="h2"
        text="Nossa equipe"
        customClass="fs-2 fw-bold text-custom-white"
      />
      <div class="row">
        <div v-for="adv in listAdvs" :key="adv.name" class="col-12 col-md-3 mb-3">
          <div
            data-bs-toggle="tooltip"
            :data-bs-title="adv.tooltipText"
            class="card bg-custom-black h-100"
          >
            <ImageAtom
              :src="adv.src"
              customClass="card-img-top border-2 border-bottom border-custom-gold"
              customStyle="height: 280px; border-radius: 10px 10px 0 0"
            />
            <div class="card-body py-3">
              <TextAtom
                tag="h5"
                customClass="fs-5 text-custom-white card-title text-center fw-semibold m-0"
                :text="adv.name"
              />
              <TextAtom
                tag="p"
                customClass="card-text fs-8 text-custom-white text-center fst-italic m-0"
                :text="'OAB/PR nº '+adv.oab"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  },
  data() {
    return {
      listAdvs: [
        {src:"/images/advs/chede.webp", name:"Chede Bark", oab:"84.354", tooltipText:"Clique para conhecer melhor"},
        {src:"/images/advs/tamara.webp", name:"Tamara Bark", oab:"84.145", tooltipText:"Clique para conhecer melhor"},
        {src:"/images/advs/cleverson.webp", name:"Cleverson Marques", oab:"58.393", tooltipText:"Clique para conhecer melhor"},
        {src:"/images/advs/anderson.webp", name:"Anderson Fernandes", oab:"324.087", tooltipText:"Clique para conhecer melhor"},
        {src:"/images/advs/thayna.webp", name:"Thayná Luz", oab:"112.071", tooltipText:"Clique para conhecer melhor"},
      ],
    };
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px !important;
}
</style>
