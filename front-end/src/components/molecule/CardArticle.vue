<template>
	<div class="col col-md-3 p-0 px-md-2 pb-3">
		<div class="bg-custom-black rounded-3 d-flex flex-column">
			<img
				class="object-fit-cover rounded-top border-custom-gold border-bottom border-2"
				:src="img"
				alt=""
			/>
			<div class="card-description p-3 d-flex flex-column justify-content-between">
				<p class="text-white fs-5 fw-bold">{{ truncate(title, 35) }}</p>
				<Button
					class="w-100"
					:href="href"
					text="Ver artigo"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Button from '@/components/atom/Button.vue';

export default {
	components: {
		Button
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		href: {
			type: String,
			required: true,
		},
	},
	methods: {
		truncate(text, limit) {
			if (text.length <= limit) {
				return text;
			} else {
				return text.slice(0, limit) + "...";
			}
		},
	},
};
</script>

<style lang="scss" scoped>
img {
	height: 150px;
}
.card-description {
	height: 150px !important;
}
</style>
