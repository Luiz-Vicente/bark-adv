<template>
  <section id="time" class="bg-custom-gray" style="padding-top: 15vh;">
    <div class="container">
      <TextAtom
        tag="h2"
        text="Nossa equipe"
        customClass="fs-2 fw-bold text-custom-white mb-2"
      />
      <!-- Cards Section -->
      <div class="row">
        <div
          v-for="(adv, index) in listAdvs"
          :key="index"
          data-bs-toggle="modal"
          :data-bs-target="'#' + adv.tag"
          class="col-12 col-md-3 mb-3"
        >
          <div class="card bg-custom-black h-100">
            <ImageAtom
              :src="adv.src"
              customClass="card-img-top border-2 border-bottom border-custom-gold"
              customStyle="height: 280px; border-radius: 10px 10px 0 0"
              :info="adv.tooltipText"
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
                :text="'OAB/PR nº ' + adv.oab"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div
        v-for="(adv, index) in listAdvs"
        :key="index"
        class="modal fade"
        :id="adv.tag"
        tabindex="-1"
        :aria-labelledby="adv.tag"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content bg-custom-black">
            <div class="modal-header">
              <TextAtom
                tag="h5"
                :text="adv.name + ' - OAB nº ' + adv.oab"
                customClass="modal-title text-white"
              />
              <i
                class="bi bi-x-lg btn-close text-custom-white fs-4 m-0 mb-1"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></i>
            </div>
            <div class="modal-body d-flex flex-md-row flex-column align-items-center">
              <div class="col-md-6 col-12 p-2">
                <ImageAtom
                  :src="adv.src"
                  customClass="w-100"
                  customStyle="width: 100px; height: 280px; border-radius: 10px"
                />
              </div>
              <div class="col-md-6 col-12 border-start border-custom-gold border-2 p-2">
                <TextAtom
                  tag="p"
                  :text="adv.bio"
                  customClass="text-custom-white fs-6 fw-normal"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary text-white"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <a
                target="_blank"
                :href="adv.urlCOntact"
                class="btn btn-custom-gold fw-semibold text-custom-white"
              >
                Entrar em contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default {
  data() {
    return {
      listAdvs: [
        {
          tag: "chede",
          src: "/images/advs/chede.webp",
          name: "Chede Bark",
          oab: "84.354",
          bio: "Sócio-fundador do escritório Bark e Bark Advogados Associados. Coordenador do Núcleo de Direito Empresarial. Advogado formado pelo Centro Universitário Unibrasil (2016), pós-graduado em Prática da Advocacia pela Fundação de Estudos Sociais do Paraná - FESP (2021) e pós-graduado em Direito Empresarial pela Escola Brasileira de Direito - EBRADI (2022). Diretor-secretário da 1º Câmara de Arbitragem, Mediação e Conciliação Societária do Brasil (CAMABRA) (2017-2018). Vice-Presidente da Comissão de Mediação e Arbitragem da OAB/PR – Subseção de São José dos Pinhais (2019 - 2019). Membro da Comissão de Direito Empresarial e Tributário da Subseção de São José dos Pinhais.",
          tooltipText: "Clique na imagem para conhecer o advogado",
          urlCOntact: "https://api.whatsapp.com/send?phone=5541991035793&text=Ol%C3%A1,%20quero%20saber%20mais!",
        },
        {
          tag: "tamara",
          src: "/images/advs/tamara.webp",
          name: "Tamara Bark",
          oab: "84.145",
          bio: "Sócia-fundadora do escritório Bark e Bark Advogados Associados. Coordenadora do Núcleo de Direito de Família e Sucessões. Advogada formada pelo Centro Universitário Curitiba - UNICURITIBA (2014). Pós-graduada em Direito das Famílias e Sucessões pela Academia Brasileira de Direito Constitucional - ABDConst (2016). Mestranda do Programa de Mestrado Profissional Internacional Conjunto em Direito das Migrações Transnacionais da Universidade do Vale do Itajaí (Univali), do Brasil, e da Università degli Studi di Perugia (UNIPG), da Itália (2022). Membra da Comissão de Direito das Famílias e Sucessões da subseção de São José dos Pinhais.",
          tooltipText: "Clique na imagem para conhecer o advogado",
          urlCOntact: "https://api.whatsapp.com/send?phone=5541991035793&text=Ol%C3%A1,%20quero%20saber%20mais!",
        },
        {
          tag: "cleverson",
          src: "/images/advs/cleverson.webp",
          name: "Cleverson Marques",
          oab: "58.393",
          bio: "Formado em 2010 pelo Unicuritiba, Pós-Graduado em Direito e Processo do Trabalho pelo Unicuritiba, Pós-Graduado em Direito Empresarial pelo EBRADI, Membro da Câmara Setorial de Advogados da Associação Comercial de Pinhais, Conselheiro da Subseção de São José dos Pinhais da OAB/PR para a gestão 2022/2024, Advogado desde 2011, especializado na área trabalhista, com atuação consultiva e contenciosa em instâncias ordinárias e tribunais superiores, além de especialista em cálculos trabalhistas.",
          tooltipText: "Clique na imagem para conhecer o advogado",
          urlCOntact: "https://api.whatsapp.com/send?phone=5541991035793&text=Ol%C3%A1,%20quero%20saber%20mais!",
        },
        {
          tag: "anderson",
          src: "/images/advs/anderson.webp",
          name: "Anderson Fernandes",
          oab: "324.087",
          bio: "Coordenador do Núcleo de Direito Civil.Advogado formado pela Universidade Nove de Julho em São Paulo (UNINOVE). Pós-graduado em Direito Civil pelo Centro Universitário Leonardo Da Vinci – UNIASSELVI. Experiência na área do contencioso cível, bem como em recuperação de crédito e responsabilidade civil. Foi sócio da Suzuki Sociedade de Advogados em São Paulo de 2013 a 2021, atuando, principalmente, nas áreas de Direito Civil, Recuperação de Crédito, Direito do Consumidor e Contencioso em geral. Antes disso, trabalhou como estagiário na Defensoria Pública do Estado de São Paulo no Tribunal do Júri.",
          tooltipText: "Clique na imagem para conhecer o advogado",
          urlCOntact: "https://api.whatsapp.com/send?phone=5541991035793&text=Ol%C3%A1,%20quero%20saber%20mais!",
        },
        {
          tag: "thayna",
          src: "/images/advs/thayna.webp",
          name: "Thayná Luz",
          oab: "112.071",
          bio: "Coordenadora do Núcleo do Juizado Especial Cível: Advogada, graduada em Direito pela Universidade Positivo, pós-graduanda em Direito Civil, Família e Sucessões e pós-graduanda em Direito Imobiliário.",
          tooltipText: "Clique na imagem para conhecer o advogado",
          urlCOntact: "https://api.whatsapp.com/send?phone=5541991035793&text=Ol%C3%A1,%20quero%20saber%20mais!",
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
