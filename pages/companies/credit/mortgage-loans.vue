<script setup>
import MortgageLoans from "@/gql/Private/Credit/MortgageLoans.gql";
const { app } = useRuntimeConfig();
const { t } = useI18n();

let { data } = reactive(await useAsyncQuery(MortgageLoans));
data = {
  ...data?.queryCompaniesMortgageLoansContents?.[0].data,
};

useSeoMeta({
  title: t("menu.companies.credit.mortgage_loans"),
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} » ${app.appName}` : app.appName;
  },
});

defineI18nRoute({
  paths: {
    pt: "/empresas/credito/credito-habitacao",
    en: "/companies/credit/mortgage-loans",
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
      :data="data.characteristics"
    ></PrivateSavingsAndInvestmentCharacteristics>

    <PrivateCreditPersonalCredit
      :label="data?.mortgageLoansSteps?.title"
      :title="data?.mortgageLoansSteps?.subtitle"
      :description="data?.mortgageLoansSteps?.description"
      :data="data?.mortgageLoansSteps?.steps"
    ></PrivateCreditPersonalCredit>

    <Documents
      class="p-0 p-md-3 p-md-5 mt-4 mb-5"
      title="Formulários"
      alignment="center"
      :data="data.documents"
    ></Documents>

    <PrivateOpenAccount
      :title="data.applyForCredit?.title"
      :description="data.applyForCredit?.description"
      :image="data.applyForCredit?.image?.[0].url"
      :button="data.applyForCredit?.button"
    ></PrivateOpenAccount>
  </div>
</template>

<style scoped></style>
