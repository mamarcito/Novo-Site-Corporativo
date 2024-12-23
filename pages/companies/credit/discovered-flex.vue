<script setup>
import DiscoveredFlex from "@/gql/Companies/Credit/DiscoveredFlex.gql";
const { app } = useRuntimeConfig();
const { t } = useI18n();

let { data } = reactive(await useAsyncQuery(DiscoveredFlex));
data = {
  ...data?.queryCompaniesDiscoveredFlexContents?.[0].data,
};

useSeoMeta({
  title: t("menu.companies.credit.discovered_flex"),
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} » ${app.appName}` : app.appName;
  },
});

defineI18nRoute({
  paths: {
    pt: "/empresas/credito/descoberto-bancario",
    en: "/companies/credit/special-check",
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
    <PrivateSavingsAndInvestmentCharacteristics
      class="mb-5"
      :data="data.characteristics"
    ></PrivateSavingsAndInvestmentCharacteristics>
    <PrivateBenefits
      title="Quer explorar as <span class='primary-text-color'>vantagens</span> que o Descobertos Bancários oferece?"
      description="Todos os benefícios e liberdade que o <span class='fw-bold'>Descobertos Bancários</span> oferece"
      :data="data.benefits"
    ></PrivateBenefits>
  </div>
</template>

<style scoped></style>
