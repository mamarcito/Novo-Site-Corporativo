<script setup>
import BcsYieldsMore from "@/gql/Companies/SavingsAndInvestment/BcsYieldsMore.gql";
const { app } = useRuntimeConfig();
const { t } = useI18n();

let { data } = reactive(await useAsyncQuery(BcsYieldsMore));
data = {
  ...data?.queryCompaniesBcsYieldsMoreContents?.[0].data,
};

useSeoMeta({
  title: t("menu.companies.savings_and_investment.bcs_yields_more"),
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} » ${app.appName}` : app.appName;
  },
});

defineI18nRoute({
  paths: {
    pt: "/empresas/poupanca-e-investimento/bcs-rende-mais",
    en: "/companies/savings-and-investments/bcs-yields-more",
  },
});
</script>

<template>
  <div>
    <Banner
      :data="data.banner"
      :scrolldown="{ label: 'Descubra tudo', link: '#about' }"
    ></Banner>

    <PrivateAbout :data="data?.about" id="about" />

    <PrivateSavingsAndInvestmentCharacteristics
      :data="data?.characteristics"
    ></PrivateSavingsAndInvestmentCharacteristics>

    <Documents
      class="p-0 p-md-5 mt-4 mb-5"
      title="Documentação"
      alignment="center"
      :data="data?.documents"
    ></Documents>

    <PrivateOpenAccount
      :title="data?.setUpSavings?.title"
      :description="data?.setUpSavings?.description"
      :image="data?.setUpSavings?.image?.[0].url"
      :button="data?.setUpSavings?.button"
    ></PrivateOpenAccount>
  </div>
</template>

<style scoped></style>
