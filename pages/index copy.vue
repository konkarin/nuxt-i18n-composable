<template>
  <div>{{ t("welcome") }}</div>
</template>

<script>
import { defineComponent } from "vue";
// import { useI18n } from "vue-i18n-bridge";

export default defineComponent({
  setup() {
    return {
      ...useI18n(),
    };
  },
});
</script>
