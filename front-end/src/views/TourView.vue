<template>
  <div>
    <div style="height: 10vh; width: 100%"></div>
    <ImageAtom
      src=""
      customClass="w-100 bg-custom-gray-dark border-bottom border-custom-gold border-2"
      style="height: 60vh"
      title="Tour Virtual"
    />
    <div class="bg-custom-gray">
      <div class="container">
        <TextAtom
          customClass="text-custom-white fw-bold fs-2 pt-5"
          tag="h2"
          text="Recepção"
        />
        <iframe
          class="w-100"
          height="500"
          frameborder="0"
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          src="https://truevirtualtours.com/panorama/130486/360view"
        ></iframe>

        <TextAtom
          customClass="text-custom-white fw-bold fs-2 pt-5"
          tag="h2"
          text="Sala de reuniões 1"
        />
        <iframe
          class="w-100"
          height="500"
          frameborder="0"
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          src="https://truevirtualtours.com/panorama/130484/360view"
        ></iframe>

        <TextAtom
          customClass="text-custom-white fw-bold fs-2 pt-5"
          tag="h2"
          text="Sala de reuniões 2"
        />
        <iframe
          class="w-100"
          height="500"
          frameborder="0"
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          src="https://truevirtualtours.com/panorama/130480/360view"
        ></iframe>

        <TextAtom
          customClass="text-custom-white fw-bold fs-2 pt-5"
          tag="h2"
          text="Entrada do escritório"
        />
        <iframe
          class="w-100"
          height="500"
          frameborder="0"
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          src="https://truevirtualtours.com/panorama/130487/360view"
        ></iframe>

        <TextAtom
          customClass="text-custom-white fw-bold fs-2 pt-5"
          tag="h2"
          text="Escritório"
        />
        <iframe
          class="w-100"
          height="500"
          frameborder="0"
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          src="https://truevirtualtours.com/panorama/130479/360view"
        ></iframe>

        <TextAtom
          customClass="text-custom-white fw-bold fs-2 pt-5"
          tag="h2"
          text="Sala da diretoria"
        />
        <iframe
          class="w-100"
          height="500"
          frameborder="0"
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          src="https://truevirtualtours.com/panorama/130483/360view"
        ></iframe>

        <TextAtom
          customClass="text-custom-white fw-bold fs-2 pt-5"
          tag="h2"
          text="Sala do Chede bark"
        />
        <iframe
          class="w-100"
          height="500"
          frameborder="0"
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          src="https://truevirtualtours.com/panorama/130485/360view"
        ></iframe>
      </div>
    </div>
    <FooterOrganism />
  </div>
</template>

<script lang="js">
import FooterOrganism from "../components/organism/FooterOrganism.vue";

export default {
  components: { FooterOrganism },
};
</script>
