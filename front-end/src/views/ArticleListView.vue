<template>
  <div
    class="bg-custom-gray d-flex flex-column align-items-center"
    style="padding-top: 88px; min-height: 100vh"
  >
    <section class="container mt-5" v-if="articles?.length">
      <a
        :href="`/article?id=${article.id}`"
        v-for="(article, index) in displayedArticles"
        :key="index"
        class="article p-4 mb-3 mb-lg-0 d-flex flex-column flex-md-row text-reset rounded text-decoration-none"
      >
        <img
          :src="article.thumb"
          class="object-fit-cover col-md-4 rounded me-md-3 mb-3 mb-md-0"
          style="height: 200px;"
        />
        <div class="d-flex flex-column justify-content-between w-100">
          <div>
            <h3 class="text-white">{{ truncate(article.title, 25) }}</h3>
            <p class="text-white text-break fw-light">
              {{ truncate(article.resume, 190) }}
            </p>
          </div>
          <a
            :href="`/article?id=${article.id}`"
            class="btn bg-white col col-md-4 md-lg-2 mb-lg-2"
            >Acessar <i class="bi bi-box-arrow-up-right"></i
          ></a>
        </div>
      </a>
    </section>
    <section
      v-else
      style="padding-top: 88px; min-height: 100vh"
      class="text-white d-flex align-items-center justify-content-center"
    >
      <h6>nada aqui</h6>
    </section>
      <ul v-if="totalPages > 1" class="pagination justify-content-end mt-3">
        <li
          v-for="page in totalPages"
          :key="page"
          @click="changePage(page)"
          :class="{ active: currentPage === page }"
          class="page-item"
        >
          <a class="page-link" href="#">{{ page }}</a>
        </li>
      </ul>
  </div>
</template>

<script>
import { getArticles } from "@/helpers/firebase/articles.js";

export default {
  data() {
    return {
      articles: [],
      currentPage: 1,
      articlesPerPage: 5,
    };
  },
  methods: {
    async getArticles() {
      const querySnapshot = await getArticles();
      querySnapshot.forEach((doc) => {
        this.articles = [...this.articles, doc.data()];
      });
      this.articles.sort((a, b) => b.created - a.created);
    },
    truncate(text, limit) {
      if (text.length <= limit) {
        return text;
      } else {
        return text.slice(0, limit) + "...";
      }
    },
    changePage(page) {
      this.currentPage = page;
    },
  },
  computed: {
    displayedArticles() {
      const start = (this.currentPage - 1) * this.articlesPerPage;
      const end = start + this.articlesPerPage;
      return this.articles.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.articles.length / this.articlesPerPage);
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>

<style lang="scss" scoped>
.article:hover {
  transition: all 0.5s;
  background-color: rgba(0, 0, 0, 0.34);
  opacity: 90%;
}

@media (max-width: 768px) {
  .article {
    transition: all 0.5s;
    background-color: rgba(0, 0, 0, 0.34);
    opacity: 90%;
  }
}
</style>
