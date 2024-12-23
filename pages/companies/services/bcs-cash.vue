<script setup>
import BcsCash from "@/gql/Companies/Services/BcsCash.gql";
const { app } = useRuntimeConfig();
const { t } = useI18n();

let { data } = reactive(await useAsyncQuery(BcsCash));
data = {
  ...data?.queryCompaniesBcsCashContents?.[0].data,
};

useSeoMeta({
  title: t("menu.companies.services.bcs_cash"),
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} » ${app.appName}` : app.appName;
  },
});

defineI18nRoute({
  paths: {
    pt: "/empresas/servicos/bcs-cash",
    en: "/companies/services/bcs-cash",
  },
});
</script>

<template>
  <div>
    <Banner
      :data="data.banner"
      :scrolldown="{ label: 'Descubra tudo', link: '#about' }"
    ></Banner>

    <PrivateAbout :data="data.about" id="about" />
    <PrivateServicesBCSCashPoints :data="data?.map"> </PrivateServicesBCSCashPoints>
    <!-- <PrivateServicesTour :data="data?.tour"> </PrivateServicesTour> -->

    <PrivateBenefits
      title="Conheça as vantagens do<span class='primary-text-color'> BCS Cash</span> "
      description="Todos os benefícios e liberdade que o BCS Cash oferece"
      :data="data.benefits"
    ></PrivateBenefits>
  </div>
</template>

<style scoped></style>
