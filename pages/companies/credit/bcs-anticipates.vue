<script setup>
import BcsAnticipates from "@/gql/Companies/Credit/BcsAnticipates.gql";
const { app } = useRuntimeConfig();
const { t } = useI18n();

let { data } = reactive(await useAsyncQuery(BcsAnticipates));
data = {
  ...data?.queryCompaniesBcsAntecipatesContents?.[0].data,
};

useSeoMeta({
  title: t("menu.companies.credit.bcs_anticipates"),
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} » ${app.appName}` : app.appName;
  },
});

defineI18nRoute({
  paths: {
    pt: "/empresas/credito/conta-corrente-caucionada",
    en: "/companies/credit/linked-current-account",
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
      title="Quer explorar as <span class='primary-text-color'>vantagens</span> que o Conta Corrente Caucionada oferece?"
      description="Todos os benefícios e liberdade que o Conta Corrente Caucionada oferece"
      :data="data.benefits"
    ></PrivateBenefits>

    <PrivateOpenAccount
      :title="data.applyForCredit?.title"
      :description="data.applyForCredit?.description"
      :image="data.applyForCredit?.image?.[0].url"
      :button="data.applyForCredit?.button"
    ></PrivateOpenAccount>
  </div>
</template>

<style scoped></style>
