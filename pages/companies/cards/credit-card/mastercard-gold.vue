<script setup>
import MastercardGold from "@/gql/Companies/Cards/CreditCard/MastercardGold.gql";
const { app } = useRuntimeConfig();
const { t } = useI18n();

let { data } = reactive(await useAsyncQuery(MastercardGold));
data = {
  ...data?.queryCompaniesMastercardGoldContents?.[0].data,
};

let presentation = reactive({
  title: `O que é O BCS <span class="primary-text-color">Mastercard Gold</span>`,
  description: `
          <p>O BCS Mastercard World é um cartão de crédito com utilização nacional e internacional, que comporta a tecnologia de leitura por aproximação (contactless). É um cartão global aceite em milhões de estabelecimentos em todo mundo.</p>
          <p>O BCS Mastercard Gold é perfeito para si que procura conforto e segurança no seu cartão de crédito.</p>
        `,
  alert: `<p>Ao aderir ao cartão BCS Mastercard Gold, poderá usufruir de uma serie de benefícios e serviços exclusivos que vão desde o acesso a ofertas e experiencias incríveis em mais de 40 cidades pelo mundo, aluguer de viaturas etc.</p>`,
});

let documents = reactive([
  {
    name: "Ficha Técnica informativa cartão mastercardGold",
    document: [{ url: "#" }],
  },
  {
    name: "Contrato de Adesão e condições Gerais Cartão M...",
    document: [{ url: "#" }],
  },
  {
    name: "Guia de benefícios do cartão Mastercard Gold",
    document: [{ url: "#" }],
  },
]);

useSeoMeta({
  title: t("menu.companies.cards.credit_card.mastercard_gold"),
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} » ${app.appName}` : app.appName;
  },
});

defineI18nRoute({
  paths: {
    pt: "/empresas/cartoes/cartao-de-credito/mastercard-gold",
    en: "/companies/cards/credit-card/mastercard-gold",
  },
});

let about = reactive({
  title:
    "O que é o BCS <span class='primary-text-color'>Mastercard Gold?</span>",
  description:
    "O <span class='fw-bold secondary-text-color'>BCS Mastercard Gold </span>é um cartão de crédito com utilização nacional e internacional, que comporta a tecnologia de leitura por aproximação (contactless). É um cartão global aceite em milhões de estabelecimentos em todo mundo. Ao aderir ao cartão BCS Mastercard Gold, poderá usufruir de uma serie de benefícios e serviços exclusivos que vão desde o acesso a ofertas e experiências incríveis em mais de 40 cidades pelo mundo <br><br> O <span class='fw-bold secondary-text-color'>BCS Mastercard Gold</span> é perfeito para si que procura conforto e segurança no seu cartão de crédito.",
  image: [{ url: "/images/credit-card/card5.png" }],
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
      "Customize o seu <span class='primary-text-color'> Mastercard Gold</span>",
    description: "Um cartão feito para si !",
    imageCard: "/images/cards/MasterCard_Gold_free.png",
  },
]);
</script>

<template>
  <div>
    <PrivateCardsDebitCardBanner
      :data="data?.banner"
      image="https://cms.digitalfactory.co.ao/api/assets/site-bcs/23f093b3-550d-41a2-babe-bc3c8b9d10e2/"
      cardImg="/images/company/cards-gold.png"
      height="75vh"
      :scrolldown="data?.banner && { label: 'Descubra tudo', link: '#about' }"
    />
    <PrivateAbout :data="data.about" />
    <PrivateBenefits
      title="<span class='secondary-text-color'> Quer explorar as <span class='primary-text-color'>vantagens exclusivas</span> que este <br> cartão oferece?</span>"
      description="<span class='secondary-text-color'>Todos os benefícios e liberdade que o cartão BCS Mastercard Gold oferece</span>"
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
      txtColor="text-white"
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
