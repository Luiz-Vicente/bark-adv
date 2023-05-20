<template>
  <div class="bg-custom-gray" style="padding-top: 15vh"></div>
  <!-- <Flicking
    class="p-2 d-flex bg-custom-gray-light"
    :options="{ circular: true }"
    :plugins="plugins"
  >
    <div class="flicking-panel">
      <div class="slider d-flex align-items-center justify-content-center mx-1">
        <img
          style="width: 220px; height: 50px"
          class="me-4"
          src="/images/logos/logo-branca-e-preta-total.png"
        />
      </div>
    </div>
    <div class="flicking-panel">
      <div class="slider d-flex align-items-center justify-content-center mx-1">
        <img
          style="width: 220px; height: 50px"
          class="me-4"
          src="/images/logos/logo-branca-e-preta-total.png"
        />
      </div>
    </div>
    <div class="flicking-panel">
      <div class="slider d-flex align-items-center justify-content-center mx-1">
        <img
          style="width: 220px; height: 50px"
          class="me-4"
          src="/images/logos/logo-branca-e-preta-total.png"
        />
      </div>
    </div>
    <div class="flicking-panel">
      <div class="slider d-flex align-items-center justify-content-center mx-1">
        <img
          style="width: 220px; height: 50px"
          class="me-4"
          src="/images/logos/logo-branca-e-preta-total.png"
        />
      </div>
    </div>
    <div class="flicking-panel">
      <div class="slider d-flex align-items-center justify-content-center mx-1">
        <img
          style="width: 220px; height: 50px"
          class="me-4"
          src="/images/logos/logo-branca-e-preta-total.png"
        />
      </div>
    </div>
    <div class="flicking-panel">
      <div class="slider d-flex align-items-center justify-content-center mx-1">
        <img
          style="width: 220px; height: 50px"
          class="me-4"
          src="/images/logos/logo-branca-e-preta-total.png"
        />
      </div>
    </div>
    <div class="flicking-panel">
      <div class="slider d-flex align-items-center justify-content-center mx-1">
        <img
          style="width: 220px; height: 50px"
          class="me-4"
          src="/images/logos/logo-branca-e-preta-total.png"
        />
      </div>
    </div>
    <div class="flicking-panel">
      <div class="slider d-flex align-items-center justify-content-center mx-1">
        <img
          style="width: 220px; height: 50px"
          class="me-4"
          src="/images/logos/logo-branca-e-preta-total.png"
        />
      </div>
    </div>
    <div class="flicking-panel">
      <div class="slider d-flex align-items-center justify-content-center mx-1">
        <img
          style="width: 220px; height: 50px"
          class="me-4"
          src="/images/logos/logo-branca-e-preta-total.png"
        />
      </div>
    </div>
  </Flicking> -->
  <footer id="rodape" class="bg-custom-black" style="padding-top: 15vh">
    <div class="container d-flex flex-md-row flex-column">
      <div class="col-md-6 col pe-md-5 mb-md-0 mb-5">
        <TextAtom
          tag="h3"
          customClass="fs-3 text-custom-white fw-bold mb-2"
          text="Como nos encontrar"
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.296021305151!2d-49.19393298962078!3d-25.428365032732355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcefc5701b26b3%3A0x5c408b339eafd4bd!2sBark%20%26%20Bark%20Advogados%20Associados%20-%20Pinhais!5e0!3m2!1spt-PT!2sbr!4v1683241569922!5m2!1spt-PT!2sbr"
          class="w-100"
          height="335.55"
          style="border: 0; border-radius: 10px"
          loading="lazy"
        ></iframe>
        <div
          class="d-flex flex-column align-items-center justify-content-center mt-3"
        >
          <!-- <ImageAtom
            src="/images/logos/logo-branca-total.webp"
            style="height: 65px; width: 300px"
          /> -->
          <div class="d-flex mt-4">
            <div class="col-6">
              <TextAtom
                tag="p"
                customClass="text-custom-white fw-normal fs-5"
                text="Rua Salgado Filho, nº 3.023 - B, Centro, Pinhais/PR - CEP: 83.324-010."
              />
            </div>
            <div class="col-6 d-flex flex-column justify-content-between">
              <div class="d-flex justify-content-end">
                <TextAtom
                  tag="a"
                  href="https://www.facebook.com/barkadvogados/?locale=pt_BR"
                  customClass="text-custom-white fw-normal fs-5 me-2"
                  text="/barkadvogados"
                /><i class="bi bi-facebook text-custom-white fs-4"></i>
              </div>
              <div class="d-flex justify-content-end">
                <TextAtom
                  tag="a"
                  href="https://www.instagram.com/barkadvogados/"
                  customClass="text-custom-white fw-normal fs-5 me-2"
                  text="@barkadvogados"
                /><i class="bi bi-instagram text-custom-white fs-4"></i>
              </div>
              <div class="d-flex justify-content-end">
                <TextAtom
                  tag="p"
                  customClass="text-custom-white fw-normal fs-5 me-2"
                  text="(41) 3097-0333"
                /><i class="bi bi-phone text-custom-white fs-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 ps-md-5">
        <TextAtom
          tag="h3"
          customClass="fs-3 text-custom-white fw-bold mb-2"
          text="Formulário de contato"
        />
        <form
          class="d-flex flex-column"
          action="https://formsubmit.co/fernandoluiz5217@gmail.com"
          method="post"
        >
          <label class="form-label text-custom-white fw-semibold" for="Nome"
            >Nome:</label
          >
          <input
            required
            name="Nome"
            type="text"
            class="form-control mb-3 py-2 bg-transparent text-custom-white"
            placeholder="Nome completo"
          />
          <label class="form-label text-custom-white fw-semibold" for="E-mail"
            >E-mail:</label
          >
          <input
            required
            name="E-mail"
            type="email"
            class="form-control mb-3 py-2 bg-transparent text-custom-white"
            placeholder="meuemail@email.com"
          />
          <label class="form-label text-custom-white fw-semibold" for="Telefone"
            >Telefone:</label
          >
          <input
            name="Telefone"
            type="text"
            class="form-control mb-3 py-2 bg-transparent text-custom-white"
            placeholder="(00) 0000-0000"
          />
          <label class="form-label text-custom-white fw-semibold" for="Mensagem"
            >Mensagem:</label
          >
          <textarea
            required
            name="Mensagem"
            type="text"
            class="form-control mb-3 py-2 bg-transparent text-custom-white"
            cols="30"
            rows="3"
            placeholder="Olá, gostaria de saber sobre..."
          ></textarea>
          <input type="hidden" name="_subject" value="Novo contato no Site!" />
          <input type="hidden" name="_cc" value=" barkadvogados@gmail.com " />
          <input
            type="hidden"
            name="_next"
            value="https://barkadvogados.com.br"
          />
          <input type="hidden" name="_template" value="box" />
          <button
            type="submit"
            class="btn btn-custom-gold text-custom-white fw-semibold py-2"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </div>
    <div>
      <div class="text-center py-3 border-top border-2 border-custom-gold" style="margin-top: 15vh">
        <p class="m-0 text-custom-white">feito com ❤️ por <a class="text-custom-gold fw-semibold text-decoration-none" href="https://www.instagram.com/eu_sou_o_luiz/">eu_sou_o_luiz</a></p>
        <a class="text-custom-gold fw-semibold text-decoration-none" href="https://devvicente.com.br">devvicente.com.br</a>
      </div>
    </div>
  </footer>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/vue3-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/vue3-flicking/dist/flicking-inline.css";

export default {
  components: {
    Flicking,
  },
  data() {
    return {
      plugins: [new AutoPlay()],
    };
  },
};
</script>
