# 可赞赏的版权页脚

+ 基于vue3+ts+vite+naive-ui
+ 带有赞赏码的对话弹窗
+ [示例](https://laorange.github.io/paper-assistant)

## 安装

```
npm i @laorange/copyright-footer
```

或

```
yarn add @laorange/copyright-footer
```

## 使用方法

```typescript
import copyrightFooter from "@laorange/copyright-footer";

createApp(App)
    .use(copyrightFooter)
    .mount("#app");
```

或

```typescript
import {CopyrightFooter} from "@laorange/copyright-footer";
import "@laorange/copyright-footer/dist/style.css"
```

## 参数说明

```typescript
defineProps<{
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
   * The additional text that you want to display in the footer. 
   * Meanwhile, you can use the default slot.
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
}>()
```

