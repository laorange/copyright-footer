<script setup lang="ts">
import {provide, ref, watch} from "vue";
import CopyrightTextContent from "./CopyrightTextContent.vue";

const props = withDefaults(
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
    }>(),
    {
      author: "GitHub@laorange",
      license: "AGPL-3.0 License",
      qrUrl: "http://qny.quoi.top/img/sponsor-qr.jpg",
      repoButtonText: "查看源代码",
      openDialogText: "鼓励开发者",
      closeDialogText: "关闭赞赏码",
    },
);

const showQR = ref(false);

const isShaking = ref(false);
watch(() => isShaking.value, (newShakeStatus) => {
  if (newShakeStatus) {
    setTimeout(() => isShaking.value = false, 2000);
  }
});

provide("isShaking", isShaking);
provide("author", props.author);
provide("projectUrl", props.projectUrl);
provide("license", props.license);
provide("addition", props.addition);
provide("version", props.version);
provide("repoButtonText", props.repoButtonText);
provide("openDialogText", props.openDialogText);
provide("closeDialogText", props.closeDialogText);
</script>

<template>
  <div class="copyright-div">
    <div class="copyright-div-content">
      <teleport to="#app">
        <transition name="qr">
          <div v-if="showQR">
            <div class="dialog" @click="isShaking=true">
              <div class="dialog-content" @click.stop>
                <img alt="qr.jpg" :src="qrUrl"/>
                <CopyrightTextContent v-model:show="showQR"/>
              </div>
            </div>
          </div>
        </transition>
      </teleport>

      <CopyrightTextContent v-if="!showQR" v-model:show="showQR"/>
    </div>
  </div>
</template>

<style scoped>
.copyright-div {
  font-size: 12px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-between;
}

img {
  max-width: 90vw;
  max-height: 50vh;
  margin-bottom: 20px;
  border-radius: 0 0 10% 10%;
}

.dialog {
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  justify-items: center;
  align-items: center;
  z-index: 999;
  background-color: #efefefcc;
  backdrop-filter: blur(10px);
}

a:link, a:visited {
  text-decoration: none;
  color: black;
  cursor: pointer;
}

a:hover {
  color: #00af50;
}

.qr-enter-from, .qr-leave-to {
  transform: scale(0);
}

.qr-enter-to, .qr-leave-from {
  transform: scale(1);
}

.qr-enter-active, .qr-leave-active {
  transition: all 0.3s linear;
  transform-origin: center;
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
</style>
