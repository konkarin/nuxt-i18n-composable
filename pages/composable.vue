<template>
  <div>{{ t("welcome") }} composable</div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useI18n } from "vue-i18n-composable";

export default defineComponent({
  setup() {
    return {
      ...useI18n(),
    };
  },
});
</script>
