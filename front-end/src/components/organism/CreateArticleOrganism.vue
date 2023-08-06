<template>
  <div
    class="bg-custom-gray d-flex flex-column align-items-center justify-content-center col col-md-7"
  >
    <form class="container">
      <h2 class="text-white text-center mt-5">Crie seu artigo agora</h2>
      <label class="text-white fw-semibold" for="title"
        >Escolha um título para o seu artigo</label
      >
      <input
        id="title"
        type="text"
        class="form-control text-black bg-white"
        placeholder="Meu título..."
        v-model="title"
        required
      />
      <label class="text-white fw-semibold mt-2" for="resume">Resumo</label>
      <textarea
        v-model="resume"
        class="form-control text-black bg-white"
        id="resume"
        placeholder="Você já pensou em..."
        required
      ></textarea>
      <label class="text-white fw-semibold mt-2"
        >Escolha uma capa para o artigo (MAX: 100KB)</label
      >
      <div class="input-group mb-3">
        <input
          id="uploadInput"
          type="file"
          accept="image/png,image/jpeg,image/webp"
          class="form-control text-black bg-white"
        />
        <label class="input-group-text" for="uploadInput">Upload</label>
      </div>
      <label class="text-white fw-semibold mt-2">Escreva o artigo</label>
      <div class="bg-white p-1 mb-3 rounded">
        <QuillEditor
          v-model:content="article"
          :toolbar="toolbarOptions"
          theme="snow"
        />
      </div>
      <MModal
        @click="saveArticle"
        btnOpen="Publicar"
        btnSave="Continuar"
        title="Você deseja publicar este artigo?"
      />
    </form>
  </div>
</template>

<script>
import { addArticle } from "@/helpers/firebase/articles.js";
import { upload } from "@/helpers/firebase/upload.js";
import uniqid from "uniqid";
import MModal from "@/components/molecule/ModalMolecule.vue";

export default {
  data() {
    return {
      title: null,
      article: null,
      resume: null,
      toolbarOptions: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        ["clean"], // remove formatting button
      ],
    };
  },
  methods: {
    async saveArticle() {
      if (!this.title) {
        this.$notify({ title: "Preencha o título", type: "error" });
        return;
      }
      if (!this.resume) {
        this.$notify({ title: "Preencha o resumo", type: "error" });
        return;
      }
      const file = document.getElementById("uploadInput").files[0];
      if (!file) {
        this.$notify({
          title: "Você precisa carregar uma capa para o artigo",
          type: "error",
        });
        return;
      }
      const fileSizeInBytes = file.size;
      const fileSizeInKB = fileSizeInBytes / 1024;
      if (fileSizeInKB > 100) {
        this.$notify({
          title: "O tamanho do arquivo excede 100 KB",
          type: "error",
        });
        return;
      }
      if (!this.article) {
        this.$notify({ title: "Preencha o artigo", type: "error" });
        return;
      }

      let created = new Date().getTime();
      try {
        const { url, reference } = await upload(file);
        await addArticle(
          uniqid(),
          this.title,
          JSON.stringify(this.article),
          this.resume,
          "bark",
          url,
          reference,
          created
        );
        this.$notify({ title: "Artigo criado", type: "success" });
        setTimeout(() => {
          location.reload();
        }, 500);
      } catch (error) {
        this.$notify({ title: error, type: "error" });
      }
    },
  },
  components: {
    MModal,
  },
};
</script>
