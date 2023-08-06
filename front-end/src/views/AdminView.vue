<template>
  <notifications :max="2" class="mt-5 p-5 me-3 w-25" />
  <LoginOrganism v-if="!auth" @auth="handleCustomEvent" />
  <CrudArticleOrganism @auth="handleCustomEvent" v-else />
</template>

<script>
import LoginOrganism from "@/components/organism/LoginOrganism.vue";
import CrudArticleOrganism from "@/components/organism/CrudArticleOrganism.vue";
import { isAuth } from "@/helpers/firebase/login";

export default {
  data() {
    return {
      auth: false,
    };
  },
  components: {
    LoginOrganism,
    CrudArticleOrganism,
  },
  mounted() {
    this.isAuthenticated();
  },
  methods: {
    async isAuthenticated() {
      try {
        this.auth = await isAuth();
      } catch (error) {
        this.$notify({
          title: error,
          type: "error",
        });
      }
    },
    handleCustomEvent(ev) {
      this.auth = ev;
    },
  },
};
</script>
