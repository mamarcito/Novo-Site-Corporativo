<script lang="ts" setup>
import InvestmentFunds from "@/gql/Companies/SavingsAndInvestment/InvestmentFunds.gql";
const { app } = useRuntimeConfig();
const { t } = useI18n();

let { data } = reactive<any>(await useAsyncQuery(InvestmentFunds));
data = {
  ...data?.queryCompaniesInvestmentFundsContents?.[0].data,
};

useSeoMeta({
  title: t("menu.companies.savings_and_investment.investment_funds"),
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} » ${app.appName}` : app.appName;
  },
});

defineI18nRoute({
  paths: {
    pt: "/empresas/poupanca-e-investimento/fundos-de-investimento",
    en: "/companies/savings-and-investments/investment-funds",
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
    <PrivateSavingsAndInvestmentHowToInvest :data="data" />

    <Documents
      class="p-0 p-md-5 mt-4 mb-5"
      title="Documentação"
      alignment="center"
      :data="data.documents"
    ></Documents>

    <PrivateOpenAccount
      :title="data.setUpSavings?.title"
      :description="data.setUpSavings?.description"
      :image="data.setUpSavings?.image?.[0].url"
      :button="data.setUpSavings?.button"
    ></PrivateOpenAccount>
  </div>
</template>

<style scoped></style>
