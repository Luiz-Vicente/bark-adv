<template>
  <article
    class="bg-custom-gray d-flex flex-column"
    style="padding-top: 70px; min-height: 100vh"
  >
    <img
      :src="article.thumb"
      class="w-100 object-fit-cover"
      style="height: 250px"
    />
    <div class="pb-2 pt-5 border-gray-500 container">
      <h2
        v-if="article.title"
        class="text-center text-white border-bottom border-2 pb-3"
      >
        {{ article.title }}
      </h2>
      <div
        v-else
        class="w-100 d-flex align-items-center justify-content-center"
      >
        <p>Carregando...</p>
      </div>
      <p v-if="article.created" class="text-white fw-lighter fs-6">
        Postado em: {{ created.toLocaleDateString("pt-BR") }}
      </p>
    </div>
    <div class="pt-3 fw-light">
      <div id="articleContent" class="text-white text-break container"></div>
    </div>
  </article>
</template>

<script>
import { getArticleById } from "@/helpers/firebase/articles.js";
import { deltaToHtml } from "@/helpers/delta/index.js";

export default {
  data() {
    return {
      article: {},
      id: this.$route.query.id,
    };
  },
  computed: {
    created() {
      return new Date(this.article.created);
    },
  },
  methods: {
    truncate(text, size) {
      return `${text.substring(0, size)}...`;
    },
    async getArticle() {
      try {
        const querySnapshot = await getArticleById(this.id);
        querySnapshot.forEach((doc) => {
          this.article = doc.data();
        });

        deltaToHtml(this.article.article, "articleContent");
      } catch (error) {
        this.$notify({
          title: error,
          type: "error",
        });
      }
    },
  },
  mounted() {
    this.getArticle();
  },
};
</script>
