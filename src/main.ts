import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";
import copyrightFooter from "./index";

createApp(App)
    .use(copyrightFooter)
    .mount("#app");
