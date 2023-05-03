import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import Global Components
import ImageAtom from "./components/atom/ImageAtom.vue";
import TextAtom from "./components/atom/TextAtom.vue";

import "./assets/main.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const app = createApp(App);

app.use(router);

app.mount("#app");

app.component('ImageAtom', ImageAtom);
app.component('TextAtom', TextAtom);
