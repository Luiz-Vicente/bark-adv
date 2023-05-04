<template>
  <HeaderOrganism />
  <TeamOrganism />
  <SpecialtiesOrganism />
  <FooterOrganism />
</template>

<script>
import HeaderOrganism from "@/components/organism/HeaderOrganism.vue";
import TeamOrganism from "@/components/organism/TeamOrganism.vue";
import SpecialtiesOrganism from "@/components/organism/SpecialtiesOrganism.vue";
import FooterOrganism from "@/components/organism/FooterOrganism.vue";

export default {
  components: {
    HeaderOrganism,
    TeamOrganism,
    SpecialtiesOrganism,
    FooterOrganism
},
};
</script>
