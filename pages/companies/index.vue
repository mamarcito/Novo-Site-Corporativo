<script setup>
import Home from "@/gql/Companies/Home.gql";
const { app } = useRuntimeConfig();
const { t } = useI18n();

let { data } = reactive(await useAsyncQuery(Home, { top: 3 }));
data = {
  ...data?.queryCompaniesContents?.[0].data,
  financialTips: data?.queryFinancialTipsBlogContents?.map((item) => {
    return {
      id: item.id,
      created: item.created,
      ...item.data,
    };
  }),
};

useSeoMeta({
  title: t("menu.companies.label"),
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} » ${app.appName}` : app.appName;
  },
});

defineI18nRoute({
  paths: {
    pt: "/empresas",
    en: "/companies",
  },
});

const simulators = [
  {
    id: "simulatorPrazo",
    title: "Simulador de depósito a prazo ",
    description: "Simule aqui quanto quer poupar",
    icon: "/images/icons/pig.svg",
    bg: "/images/company/img1.png",
  },
  {
    id: "simulatorCredito",
    title: "Simulador de crédito",
    description: "Decida aqui o crédito que quer contrair",
    icon: "/images/icons/cryptocurrency.svg",
    bg: "/images/company/img2.png",
  },
];
</script>

<template>
  <div style="overflow: hidden">
    <Banner
      :data="data.banner"
      :scrolldown="{ label: 'Descubra tudo', link: '#about' }"
    ></Banner>
    <PrivateHomeHighlight :data="data.shortcuts"></PrivateHomeHighlight>

    <PrivateAbout :data="data.about" id="about" />
    <PrivateHomeSimulators
      isCompany
      :data="simulators"
      v-if="data.simuladorDP"
      :simuladorDP="data.simuladorDP"
      :simuladorCredito="data.simuladorCredito"
    ></PrivateHomeSimulators>
    <PrivateHomeConverter></PrivateHomeConverter>

    <PrivateFinancialTips :data="data.financialTips"></PrivateFinancialTips>
  </div>
</template>

<style scoped></style>
