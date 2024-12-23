<script setup>
import CarCredit from "@/gql/Companies/Credit/CarCredit.gql";
const { app } = useRuntimeConfig();
const { t } = useI18n();

let { data } = reactive(await useAsyncQuery(CarCredit));
data = {
  ...data?.queryCompaniesCarCreditContents?.[0].data,
};

useSeoMeta({
  title: t("menu.companies.credit.car_credit"),
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} » ${app.appName}` : app.appName;
  },
});

defineI18nRoute({
  paths: {
    pt: "/empresas/credito/credito-ao-sector-real-da-economia",
    en: "/companies/credit/credit-to-the-real-sector-of-the-economy",
  },
});
</script>

<template>
  <div>
    <Banner
      :data="data?.banner"
      :scrolldown="{ label: 'Descubra tudo', link: '#about' }"
    ></Banner>

    <PrivateAbout :data="data?.about" id="about" />

    <PrivateSavingsAndInvestmentCharacteristics
      :data="data?.characteristics"
    ></PrivateSavingsAndInvestmentCharacteristics>

    <PrivateCreditPersonalCredit
      :label="data?.carCreditSteps?.title"
      :title="data?.carCreditSteps?.subtitle"
      :description="data?.carCreditSteps?.description"
      :data="data?.carCreditSteps?.steps"
    ></PrivateCreditPersonalCredit>

    <Documents
      class="p-0 p-md-3 p-md-5 mt-4 mb-5"
      title="Formulários"
      alignment="center"
      :data="data?.documents"
    ></Documents>

    <PrivateOpenAccount
      :title="data?.applyForCredit?.title"
      :description="data?.applyForCredit?.description"
      :image="data?.applyForCredit?.image?.[0].url"
      :button="data?.applyForCredit?.button"
    ></PrivateOpenAccount>
  </div>
</template>

<style scoped></style>
