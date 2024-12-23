<script setup>
import Protocol from "@/gql/Companies/Protocol.gql";
const { app } = useRuntimeConfig();
const { t } = useI18n();

let { data } = reactive(await useAsyncQuery(Protocol));
data = {
  ...data?.queryCompaniesProtocolContents?.[0].data,
};

useSeoMeta({
  title: t("menu.companies.protocol.label"),
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} » ${app.appName}` : app.appName;
  },
});

defineI18nRoute({
  paths: {
    pt: "/empresas/protocolo",
    en: "/companies/protocol",
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
    <PrivateBenefits
      title="Vantagens para a sua<span class='primary-text-color'> empresa</span> "
      description="Todos os <span class='secondary-text-color'>benefícios</span> para a sua empresa"
      :data="data.benefits"
    ></PrivateBenefits>
    <PrivateBenefits
      v-if="data?.colaboratorBenefits.length"
      bgColor="white"
      title="Vantagens para o seu <span class='primary-text-color'> colaborador</span> "
      description="Todos os <span class='secondary-text-color'>benefícios</span> para a sua empresa"
      :data="data.colaboratorBenefits"
    ></PrivateBenefits>
  </div>
</template>

<style scoped></style>
