<template>
  <div>
    <HeaderOrganism />
    <TeamOrganism />
    <SpecialtiesOrganism />
  </div>
</template>

<script>
import HeaderOrganism from "@/components/organism/HeaderOrganism.vue";
import TeamOrganism from "@/components/organism/TeamOrganism.vue";
import SpecialtiesOrganism from "@/components/organism/SpecialtiesOrganism.vue";

export default {
  components: {
    HeaderOrganism,
    TeamOrganism,
    SpecialtiesOrganism,
  },
};
</script>
