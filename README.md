# 可赞赏的版权页脚

+ 基于 vue3 + ts + vite + naive-ui
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

直接复制 `@laorange/copyright-footer/src/components/CopyrightFooter.vue` 和 `.gitattributes` 。

> 已尝试过打包，但通过npm再下载后引用时，无法正常使用
>
> 参考资料：
>
> + https://www.youtube.com/watch?v=5QV9wVc8c7g
> + https://www.youtube.com/watch?v=ui717bVHS4I

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

