<template>
  <div>
    <div>{{ $t("welcome") }}</div>
    <div>{{ t("welcome") }}composable</div>
  </div>
</template>

<script>
import { defineComponent, useContext } from "@nuxtjs/composition-api";
import { useI18n } from "vue-i18n-bridge";

export default defineComponent({
  setup() {
    const { app } = useContext();
    const { i18n } = app;
    console.log(i18n.t("welcome"));

    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>
