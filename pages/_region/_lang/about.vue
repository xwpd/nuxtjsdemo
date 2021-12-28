<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title">{{ $t('about.title') }}</h1>
      <p>{{ $t('about.introduction') }}</p>
      <nuxt-link to="./">{{ $t('home.title') }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  head() {
    return {title: this.$t('about.title')}
  }
}
</script>

<style scoped>

</style>
