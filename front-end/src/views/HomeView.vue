<template>
  <div>
    <HeaderOrganism />
    <AboutOrganism />
    <TeamOrganism />
    <ArticlesOrganism />
    <SpecialtiesOrganism />
    <WhatsappButtonAtom />
  </div>
</template>

<script>
import HeaderOrganism from "@/components/organism/HeaderOrganism.vue";
import TeamOrganism from "@/components/organism/TeamOrganism.vue";
import ArticlesOrganism from "@/components/organism/ArticlesOrganism.vue";
import SpecialtiesOrganism from "@/components/organism/SpecialtiesOrganism.vue";
import AboutOrganism from "@/components/organism/AboutOrganism.vue";
import WhatsappButtonAtom from "@/components/atom/WhatsappButtonAtom.vue";

export default {
  components: {
    HeaderOrganism,
    TeamOrganism,
    ArticlesOrganism,
    AboutOrganism,
    SpecialtiesOrganism,
    WhatsappButtonAtom
  },
};
</script>
