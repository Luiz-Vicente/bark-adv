import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import Global Components
import ImageAtom from "./components/atom/ImageAtom.vue";
import TextAtom from "./components/atom/TextAtom.vue";

import 'bootstrap-icons/font/bootstrap-icons.css'
import "./assets/main.scss";

const app = createApp(App);

app.component('ImageAtom', ImageAtom);
app.component('TextAtom', TextAtom);

app.use(router);

app.mount("#app");
