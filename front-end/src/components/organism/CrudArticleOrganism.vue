<template>
  <section
    class="bg-custom-gray d-flex flex-column align-items-center"
    style="padding-top: 88px; min-height: 100vh"
  >
    <div class="text-end mt-5 container">
      <button type="button" @click="endSession()" class="btn btn-custom-gold mt-1 text-white fw-semibold">
        <i class="bi bi-box-arrow-right"></i> Sair
      </button>
    </div>
    <div class="container">
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="create-article"
            data-bs-toggle="tab"
            data-bs-target="#create-article-pane"
            type="button"
            role="tab"
            aria-controls="create-article-pane"
            aria-selected="true"
            @click="currentTab = 'create'"
          >
            Criar artigo
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="delete-articles-tab"
            data-bs-toggle="tab"
            data-bs-target="#delete-articles-tab-pane"
            type="button"
            role="tab"
            aria-controls="delete-articles-tab-pane"
            aria-selected="false"
            @click="currentTab = 'delete'"
          >
            Deletar artigos
          </button>
        </li>
      </ul>
    </div>
    <CreateArticleOrganism v-if="currentTab === 'create'" />
    <DeleteArticleOrganism v-if="currentTab === 'delete'" />
  </section>
</template>

<script>
import CreateArticleOrganism from "@/components/organism/CreateArticleOrganism.vue";
import DeleteArticleOrganism from "@/components/organism/DeleteArticleOrganism.vue";
import { logOut } from "@/helpers/firebase/login.js";

export default {
  data() {
    return {
      currentTab: "create",
    };
  },
  components: {
    CreateArticleOrganism,
    DeleteArticleOrganism,
  },
  methods: {
    async endSession() {
      try {
        await logOut();
        this.$emit("auth", false);
      } catch (error) {
        this.$notify({
          title: error,
          type: "error",
        });
      }
    },
  },
};
</script>
