import { App } from "vue";

declare module "@laorange/copyright-footer" {
}

export declare interface CopyrightFooter {
    /**
     * Author name, with the default value "GitHub@laorange"
     */
    author?: string,

    /**
     * The url of your project repository on GitHub.
     */
    projectUrl?: string,

    /**
     * The license of the project, with the default value "AGPL-3.0 License"
     */
    license?: string,

    /**
     * The url of the sponsor QR, with the default value of mine.
     */
    qrUrl?: string,

    /**
     * The version of your project.
     */
    version?: string,

    /**
     * The additional text that you want to display in the footer. Meanwhile, you can use the default slot.
     */
    addition?: string,

    /**
     * The text in the button to redirect to your repository, with the default value "查看源代码".
     */
    repoButtonText?: string,

    /**
     * The text in the button to OPEN the sponsor QR, with the default value "鼓励开发者".
     */
    openDialogText?: string,

    /**
     * The text in the button to CLOSE the sponsor QR, with the default value "关闭赞赏码".
     */
    closeDialogText?: string,
}


declare const Plugin: {
    install: (app: App) => void
};

export default Plugin;
