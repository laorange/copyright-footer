import {CopyrightFooter} from "./components";
import {App} from "vue";

export {CopyrightFooter};

const copyrightFooter = {
    install: (app: App, options: any): void => {
        app.component("CopyrightFooter", CopyrightFooter);
    },
};

export default copyrightFooter;
