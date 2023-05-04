<template>
  <div class="bg-custom-gray" style="padding-top: 15vh"></div>
  <Flicking
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
  </Flicking>
  <Footer id="rodape" class="bg-custom-black">
    <div>mapa</div>
    <div>contato</div>
  </Footer>
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
