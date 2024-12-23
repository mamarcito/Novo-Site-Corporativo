<script lang="ts" setup>
import Config from "~/gql/Config.gql";

let { data }: Object = reactive(await useAsyncQuery(Config));
data = data?.queryConfigContents?.[0]?.data;

const returnData = function () {
  return data;
};

useState("config", () => returnData());
</script>

<template>
  <div>
    <MenuMobile class="d-inline-block d-md-none"></MenuMobile>

    <main>
      <MenuPrimary class="fixed-top d-none d-md-inline"></MenuPrimary>
      <MenuSecondary class="d-none d-md-inline mt-5"></MenuSecondary>

      <slot />

      <div class="totop">
        <a
          href="#top"
          class="d-inline-flex justify-content-center align-items-center rounded-circle text-decoration-none"
        >
          <i class="fas fa-angle-up fa-2x"></i>
        </a>
      </div>
    </main>

    <Footer></Footer>
  </div>
</template>

<style lang="sass" scoped>
@import "~/assets/sass/variables"
@import "~/assets/sass/responsive"

main
  margin-top: 55px

  @include responsive(extra-small, small)
    margin-top: 0

  .totop
    position: fixed
    bottom: 30px
    right: 50px
    z-index: 1000
    width: 50px
    height: 50px

    a
      background: $primary-theme-color
      width: 100%
      height: 100%
      color: white

      &:hover
        background: white
        box-shadow: 0 0 4px black
        color: #111
</style>
