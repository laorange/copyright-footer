import CopyrightFooter from "./components/CopyrightFooter.vue";
import {App} from "vue";

export {CopyrightFooter};

export default {
    install: (app: App<Element>): void => {
        app.component("CopyrightFooter", CopyrightFooter);
    },
};
