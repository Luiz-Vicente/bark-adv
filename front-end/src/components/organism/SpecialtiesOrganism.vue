<template>
	<section
		id="especialidades"
		class="bg-custom-gray"
		style="padding-top: 15vh"
	>
		<div class="container">
			<h2 class="fs-2 fw-bold text-custom-white">Especialidades</h2>
			<!-- Cards Section -->
			<div class="d-flex flex-column flex-md-row flex-wrap">
				<div
					v-for="(spec, index) in listSpecialties"
					:key="index"
					class="card-bark col-12 col-md-3 px-md-2 mb-3"
				>
					<div class="card bg-custom-black h-100">
						<ImageAtom
							:src="spec.src"
							customClass="card-img-center border-2 border-bottom border-custom-gold"
							customStyle="height: 110px; border-radius: 10px 10px 0 0; background-position: center;"
							:info="spec.tooltipText"
						/>
						<div class="card-body py-4">
							<TextAtom
								tag="h5"
								customClass="fs-5 text-custom-white card-title text-center fw-semibold m-0"
								:text="spec.name"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			listSpecialties: [
				{
					src: "/images/especialidades/empresarial.webp",
					name: "Empresarial",
					// tooltipText: "Clique na imagem para conhecer o advogado",
				},
				{
					src: "/images/especialidades/civel.webp",
					name: "Cível",
					// tooltipText: "Clique na imagem para conhecer o advogado",
				},
				{
					src: "/images/especialidades/trabalhista.webp",
					name: "Trabalhista",
					// tooltipText: "Clique na imagem para conhecer o advogado",
				},
				{
					src: "/images/especialidades/imobiliario.webp",
					name: "Imobiliário",
					// tooltipText: "Clique na imagem para conhecer o advogado",
				},
				{
					src: "/images/especialidades/administracao.webp",
					name: "Administrativo",
					// tooltipText: "Clique na imagem para conhecer o advogado",
				},
				{
					src: "/images/especialidades/tributario.webp",
					name: "Tributário",
					// tooltipText: "Clique na imagem para conhecer o advogado",
				},
				{
					src: "/images/especialidades/internacional.webp",
					name: "Internacional",
					// tooltipText: "Clique na imagem para conhecer o advogado",
				},
				{
					src: "/images/especialidades/familia.webp",
					name: "Família e Sucessões",
					// tooltipText: "Clique na imagem para conhecer o advogado",
				},
			],
		};
	},
};
</script>

<style scoped>
.card {
	border-radius: 10px !important;
}

/* .card-bark {
	width: 23%;
	margin-right: 20px;
} */

.card-bark:nth-child(4) {
	margin-right: 0;
}

@media (max-width: 425px) {
	.card-bark {
		width: 100%;
		margin-right: 0;
	}
}
</style>
