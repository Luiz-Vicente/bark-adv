import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import Global Components
import ImageAtom from "./components/atom/ImageAtom.vue";
import TextAtom from "./components/atom/TextAtom.vue";
import { QuillEditor } from "@vueup/vue-quill";
import Notifications from "@kyvg/vue3-notification";

// CSS styles
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/main.scss";

const app = createApp(App);

app.component("ImageAtom", ImageAtom);
app.component("TextAtom", TextAtom);
app.component("QuillEditor", QuillEditor);

app.use(router).use(Notifications);

app.mount("#app");
