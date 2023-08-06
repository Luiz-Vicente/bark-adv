<template>
	<section
		v-if="articles.length"
		id="artigos"
		class="bg-custom-gray"
		style="padding-top: 15vh"
	>
		<div class="container">
			<h2 class="fs-2 fw-bold text-custom-white mb-2">Últimos artigos</h2>

			<div class="d-flex flex-column flex-md-row">
				<CardArticle
					v-for="(article, index) in articles"
					:key="index"
					:href="'/article?id=' + article.id"
					:img="article.thumb"
					:title="article.title"
					:description="article.resume"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import CardArticle from "../molecule/CardArticle.vue";
import { getArticles } from "@/helpers/firebase/articles";

export default {
	components: {
		CardArticle,
	},
	data() {
		return {
			articles: [],
		};
	},
	methods: {
		async getArticles() {
			const querySnapshot = await getArticles();
			querySnapshot.forEach(doc => {
				if (this.articles.length < 4) {
					this.articles = [...this.articles, doc.data()];
				} else {
					return;
				}
			});
			this.articles.sort((a, b) => b.created - a.created);
		},
	},
	mounted() {
		this.getArticles();
	},
};
</script>

<style scoped>
.card {
	cursor: pointer;
	border-radius: 10px !important;
}
</style>
