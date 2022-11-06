<script setup lang="ts">
import {NButton, NSpace, NIcon} from "naive-ui";
import {computed, inject, Ref} from "vue";

const props = defineProps<{ show: boolean }>();
const emits = defineEmits(["update:show"]);

const isShaking = inject("isShaking") as Ref<boolean>;
const author = inject("author") as Ref<string | undefined>;
const projectUrl = inject("projectUrl") as Ref<string | undefined>;
const license = inject("license") as Ref<string | undefined>;
const addition = inject("addition") as Ref<string | undefined>;
const version = inject("version") as Ref<string | undefined>;
const repoButtonText = inject("repoButtonText") as Ref<string>;
const openDialogText = inject("openDialogText") as Ref<string>;
const closeDialogText = inject("closeDialogText") as Ref<string>;

const year = (new Date()).getFullYear();

const showQR = computed<boolean>({
  get: () => props.show,
  set: (newValue) => emits("update:show", newValue),
});

function goTo(url: string) {
  window.open(url);
}
</script>

<template>
  <n-space :size="10" :vertical="true" justify="center" align="center">
    <n-space :size="30">
      <n-button color="#32647d" size="tiny" v-if="projectUrl" @click="goTo(projectUrl ?? '')">
        {{ repoButtonText }}
        <template #icon>
          <n-icon>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
              <path
                  d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32z"
                  fill="currentColor"></path>
            </svg>
          </n-icon>
        </template>
      </n-button>
      <n-button color="#32647d" size="tiny" @click="showQR=!showQR" v-if="showQR" :class="{shaking: isShaking}">
        {{ closeDialogText }}
        <template #icon>
          <n-icon>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
              <path d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12z" fill="currentColor"></path>
              <path d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z" fill="currentColor"></path>
            </svg>
          </n-icon>
        </template>
      </n-button>
      <n-button color="#32647d" size="tiny" @click="showQR=!showQR" v-if="!showQR">
        {{ openDialogText }}
        <template #icon>
          <n-icon>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 576 512">
              <path
                  d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8c-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6c3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"
                  fill="currentColor"></path>
            </svg>
          </n-icon>
        </template>
      </n-button>
    </n-space>
    <n-space :size="5" :vertical="true" justify="center" align="center">
      <slot/>
      <div v-if="addition">{{ addition }}</div>
      <div>
        <span v-if="version">v{{ version }}</span>
        <span v-if="!!version && !!license">丨</span>
        <span v-if="license">Released under {{ license }}</span></div>
      <div v-if="author">Copyright © {{ year }} {{ author }}</div>
    </n-space>
  </n-space>
</template>

<style scoped>
.shaking {
  animation: shake 1s ease-in infinite;
}

@keyframes shake {
  10% {
    transform: rotate(10deg) scale(1.3);
    background-color: #00af50;
  }
  20% {
    transform: rotate(-10deg) scale(1.3);
    background-color: #00af50;
  }
  30% {
    transform: rotate(5deg) scale(1.3);
    background-color: #00af50;
  }
  40% {
    transform: rotate(-5deg) scale(1.3);
    background-color: #00af50;
  }
  50%,
  100% {
    transform: rotate(0deg);
  }
}
</style>
