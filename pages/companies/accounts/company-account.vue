<script lang="ts" setup>
import CompanyAccount from "@/gql/Companies/Accounts/CompanyAccount.gql";
const { app } = useRuntimeConfig();
const { t } = useI18n();

let { data } = reactive<any>(await useAsyncQuery(CompanyAccount));
data = {
  ...data?.queryCompaniesAccountContents?.[0].data,
};

useSeoMeta({
  title: t("menu.companies.accounts.company_account"),
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} » ${app.appName}` : app.appName;
  },
});

defineI18nRoute({
  paths: {
    pt: "/empresas/contas/conta-corporate",
    en: "/companies/accounts/corporate-account",
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
    <PrivateCardsCreditCardToClient :data="data.requirements" />
    <PrivateBenefits
      title="Conheça os <span class='primary-text-color'>benefícios</span> da conta Corporate do BCS"
      description="Todos os benefícios e liberdade que a conta Empresas do BCS lhe oferece."
      :data="data.benefits"
    />
    <PrivateOurBcsApp :data="data?.bcsApp"> </PrivateOurBcsApp>
  </div>
</template>

<style scoped></style>
