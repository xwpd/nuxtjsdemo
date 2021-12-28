<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title">{{ $t('home.title') }}</h1>
      <p>{{ $t('home.introduction') }}</p>
      <p>{{ locale }}</p>
      <nuxt-link to="./about">{{ $t('about.title') }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  head() {
    return {title: this.$t('home.title')}
  },
  data: function () {
    console.log(this.$i18n.locale)
    return {
      locale: this.$i18n.locale
    };
  }
}
</script>

<style scoped>
.Content__Title {
  color: #0074D9;
}
</style>
