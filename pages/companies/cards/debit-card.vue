<script setup>
import DebitCard from "@/gql/Companies/Cards/DebitCard.gql";
const { app } = useRuntimeConfig();
const { t } = useI18n();

let { data } = reactive(await useAsyncQuery(DebitCard));
data = {
  ...data?.queryCompaniesDebitCardContents?.[0].data,
};

useSeoMeta({
  title: t("menu.companies.cards.debit_card"),
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} » ${app.appName}` : app.appName;
  },
});

defineI18nRoute({
  paths: {
    pt: "/empresas/cartoes/cartao-de-debito",
    en: "/companies/cards/debit-card",
  },
});

let card = reactive([
  {
    title:
      "<span class='text-white'>Quer ser um <span class='secondary-text-colot'>cliente</span> BCS ?</span>",
    description: "Conheça as contas BCS, feitas a sua medida.",
    image: "/images/credit-card/call-to-action-signup.jpeg",
    points: [{ title: "Sem burocracia" }, { title: "Muitos benefícios" }],
    path: "/abrir-conta",
  },
]);
</script>

<template>
  <div>
    <!-- <Banner :data="data.banner"></Banner> -->
    <PrivateCardsDebitCardBanner
      :data="data?.banner"
      :scrolldown="{ label: 'Descubra tudo', link: '#about' }"
    />
    <PrivateAbout :data="data.about" />
    <PrivateBenefits
      title=" <span class='secondary-text-color'>Já conhece as fantásticas vantagens que este <br/> cartão oferece?</span>"
      description="Descubra as possibilidades ilimitadas do <span class='secondary-text-color fw-bold'>cartão de débito Multicaixa </span>, projectado para <br/> proporcionar conveniência e flexibilidade em suas transações financeiras no território  nacional."
      :data="data.benefits"
    ></PrivateBenefits>

    <PrivateCardsFeaturesAndUsageNetwork
      position="center"
      title="<span class='primary-text-color'>Rede de utilização</span>"
      description="Conheça a rede de utilização do cartão de débito Multicaixa."
      :data="[data.usageNetwork]"
    ></PrivateCardsFeaturesAndUsageNetwork>

    <Documents
      class="p-0 p-md-5 mt-4 mb-5"
      :data="data.documents"
      title="Formulários"
    ></Documents>

    <PrivateCardsDebitCardIdealTool></PrivateCardsDebitCardIdealTool>

    <PrivateOpenAccount
      :title="data.requestCard?.title"
      :description="data.requestCard?.description"
      :image="data.requestCard?.image?.[0].url"
      :button="data.requestCard?.button"
    ></PrivateOpenAccount>

    <PrivateCardsCreditCardCallToActionSignUp
      :data="card"
    ></PrivateCardsCreditCardCallToActionSignUp>
  </div>
</template>

<style scoped></style>
