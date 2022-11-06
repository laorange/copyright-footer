import CopyrightFooter from "./components/CopyrightFooter.vue";
import {App} from "vue";

export {CopyrightFooter};

const copyrightFooter = {
    install: (app: App): void => {
        app.component("CopyrightFooter", CopyrightFooter);
    },
};

export default copyrightFooter;
