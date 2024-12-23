<script lang="ts" setup>
import FlexAccount from "@/gql/Companies/Accounts/FlexAccount.gql";
const { app } = useRuntimeConfig();
const { t } = useI18n();

let { data } = reactive<any>(await useAsyncQuery(FlexAccount));
data = {
  ...data?.queryCompaniesFlexAccountContents?.[0].data,
};

useSeoMeta({
  title: t("menu.companies.accounts.flex_account"),
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} » ${app.appName}` : app.appName;
  },
});

defineI18nRoute({
  paths: {
    pt: "/empresas/contas/conta-large-corporate",
    en: "/companies/accounts/large-corporate-account",
  },
});

let cards = reactive([
  {
    title: "Documentos",
    list: [
      { item: "Uma fotografia a cores tipo passe" },
      { item: "Cartão de Contribuinte" },
      { item: "Documento de Identificação (nacionais): Bilhete de Identidade" },
      {
        item: "Documento de Identificação (estrangeiros): Cartão de Residente Estrangeiro, Passaporte com o Visto válido ou Cartão de Refugiado emitido pela COREDA",
      },
    ],
  },
]);
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
      title="Conheça os <span class='primary-text-color'>benefícios</span> da Conta Large Corporate do BCS"
      description="Todos os benefícios e liberdade que a Conta Large Corporate lhe oferece."
      :data="data.benefits"
    />
    <PrivateOurBcsApp :data="data?.bcsApp"> </PrivateOurBcsApp>
    <PrivateCardsFeaturesAndUsageNetwork
      title="<span class='secondary-text-color'>Documentos necessários</span>"
      description="Documentos necessários para abertura de conta"
      position="center"
      :data="[data?.documentsList]"
    ></PrivateCardsFeaturesAndUsageNetwork>
    <PrivateStepOpenAccount> </PrivateStepOpenAccount>
  </div>
</template>

<style scoped></style>
