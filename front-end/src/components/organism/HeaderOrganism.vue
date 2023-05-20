<template>
  <div style="height: 10vh; width: 100%"></div>
  <div class="banner d-flex flex-md-row flex-column bg-custom-gray">
    <div class="col-md-6 col px-3 bg-gradient-gray">
      <swiper @swiper="setFirstSwiper" :controller="{ control: secondSwiper }"
        :direction="isMobile ? 'horizontal' : 'vertical'" :loop="true" :pagination="{
          clickable: true,
        }" :modules="modules">
        <swiper-slide v-for="banner in bannersList" :key="banner.index">
          <div class="d-flex fw-normal justify-content-center flex-column">
            <TextAtom tag="h1" customClass="text-white fw-bold text-uppercase" v-bind:text="banner.title" />
            <TextAtom tag="p" v-bind:text="banner.description"
              customClass="fs-3 text-white fw-normal text-lowercase opacity-50" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="col-md-6 col d-md-block bg-custom-gray">
      <swiper :slidesPerView="1" :spaceBetween="30" :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }" :loop="true" :keyboard="{
  enabled: true,
}" :pagination="{
  clickable: true,
}" :navigation="true" :modules="modules" @swiper="setSecondSwiper" :controller="{ control: firstSwiper }">
        <swiper-slide v-for="banner in bannersList" :key="banner.index">
          <ImageAtom v-bind:src="banner.src" customStyle="background-position:center;" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Controller, Navigation, Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      bannersList: [
        {
          src: "/images/banners/irmaos.webp",
          title: "Focado em Soluções Empresariais",
          description: "criação de ativos, recuperação de crédito e planejamento",
        },
        {
          src: "/images/banners/setorizado.webp",
          title: "Setorizado",
          description:
            "ESPECIALISTAS DE DIVERSAS ÁREAS PARA ATENDER SEU CASO",
        },
        // {
        //   src: "/images/banners/dedicacao.webp",
        //   title: "Dedicação",
        //   description: "comprometimento com a qualidade",
        // },
        // {
        //   src: "/images/banners/transparencia.webp",
        //   title: "Transparência",
        //   description: "prezamos pela comunicação",
        // },
        {
          src: "/images/banners/nacional.webp",
          title: "Abrangência nacional",
          description: "atendemos em todo o território nacional",
        },
      ],
    };
  },
  setup() {
    const firstSwiper = ref(null);
    const secondSwiper = ref(null);
    const setFirstSwiper = (swiper) => {
      firstSwiper.value = swiper;
    };
    const setSecondSwiper = (swiper) => {
      secondSwiper.value = swiper;
    };
    return {
      Controller,
      firstSwiper,
      secondSwiper,
      setFirstSwiper,
      setSecondSwiper,
      modules: [Controller, Navigation, Autoplay],
    };
  },
  computed: {
    isMobile() {
      if (window.innerWidth < 950) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    const nextButton = document.querySelector(".swiper-button-next");
    const prevButton = document.querySelector(".swiper-button-prev");

    nextButton.classList.add("border", "rounded", "p-4");
    nextButton.style.top = "90%";
    prevButton.classList.add("border", "rounded", "p-4");
    prevButton.style.top = "90%";
    prevButton.style.left = "82%";

    // Hide buttons on mobile screens
    if (window.matchMedia("(max-width: 600px)").matches) {
      nextButton.style.display = "none";
      prevButton.style.display = "none";
    }
  },
};
</script>

<style scoped>
div {
  height: 90vh;
}

@media (max-width: 600px) {
  div {
    height: 45vh;
  }

  .banner {
    margin-bottom: 45vh;
  }
}

.swiper {
  --swiper-navigation-size: 30px;
  --swiper-theme-color: #f4f4f4;
}

.bg-gradient-gray {
  background: linear-gradient(135deg, #111111 0%, rgba(17, 17, 17, 0) 100%);
}
</style>
