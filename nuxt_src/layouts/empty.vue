<template>
  <div>
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>
<script>
import theHeader from '~/components/parts/TheHeader.vue'
import theFooter from '~/components/parts/TheFooter.vue'

export default {
  components: {
    theHeader,
    theFooter,
  },
}
</script>
