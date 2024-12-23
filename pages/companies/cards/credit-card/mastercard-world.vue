<script lang="ts" setup>
import MastercardWorld from "@/gql/Companies/Cards/CreditCard/MastercardWorld.gql";
const { app } = useRuntimeConfig();
const { t } = useI18n();

let { data } = reactive<any>(await useAsyncQuery(MastercardWorld));
data = {
  ...data?.queryCompaniesMastercardWorldContents?.[0].data,
};

useSeoMeta({
  title: t("menu.private.cards.credit_card.mastercard_world"),
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} » ${app.appName}` : app.appName;
  },
});

defineI18nRoute({
  paths: {
    pt: "/empresas/cartoes/cartao-de-credito/mastercard-world",
    en: "/companies/cards/credit-card/mastercard-world",
  },
});

let card = reactive([
  {
    title:
      "<span class='text-white'>Quer ser um <span class='secondary-text-colot'>cliente</span> BCS ?</span>",
    description: "Conheça as contas BCS, feitas a sua medida.",
    image: "/images/credit-card/call-to-action-signup.jpeg",
    points: [{ title: "Sem burocracia" }, { title: "Muitos benefícios" }],
    path: "open-account",
  },
]);

let customize = reactive([
  {
    title:
      "Customize o seu <span class='primary-text-color'> Mastercard World</span>",
    description: "Um cartão feito para si !",
    imageCard: "/images/cards/MasterCard Word Frente.svg",
  },
]);
</script>

<template>
  <div>
    <PrivateCardsDebitCardBanner
      :data="data?.banner"
      image="https://cms.digitalfactory.co.ao/api/assets/site-bcs/aaa8bb41-9d6b-45ff-bb54-20f1d4da44b4/"
      cardImgFront="/images/credit-card/world-Frente.png"
      cardImgBack="/images/credit-card/world-Back.png"
      height="75vh"
      :scrolldown="data?.banner && { label: 'Descubra tudo', link: '#about' }"
    />
    <PrivateAbout :data="data.about" id="about" />
    <PrivateBenefits
      title="Quer explorar as <span class='primary-text-color'>vantagens exclusivas</span> que este <br> cartão oferece?"
      description="Todos os benefícios e liberdade que o cartão BCS Mastercard World oferece"
      :data="data.benefits"
    ></PrivateBenefits>

    <PrivateCardsFeaturesAndUsageNetwork
      label=" <span class='primary-text-color'>DP Cartão de Crédito</span>"
      title="Já pensou em fazer o seu cartão de crédito <span class='primary-text-color'>trabalhar a <br> seu favor</span>?"
      description="Descubra como o Depósito a Prazo de Cartão de Crédito pode potencializar seus ganhos"
      position="center"
      :data="[data.features]"
    ></PrivateCardsFeaturesAndUsageNetwork>

    <Documents :data="data.documents" title="Formulários"></Documents>
    <PrivateCardsCustomizeYourCard
      :data="customize"
      :image="customize[0]?.imageCard"
      class="mb-person"
    ></PrivateCardsCustomizeYourCard>
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

<style lang="sass" scoped>
@import "~/assets/sass/variables"

.mb-person
  margin-bottom: 150px
</style>
