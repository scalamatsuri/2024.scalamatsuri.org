<template>
  <div id="top">
    <MainVisual />
    <News :posts="blogPosts" />
    <ThankYou />
    <Banner />
    <!-- <EcShop /> -->
    <Program />
    <Events />
    <!-- <Access /> -->
    <lazy-component>
      <Coc />
    </lazy-component>
    <Sponsors />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
// import Access from "~/components/sections/top/Access";
import Banner from "~/components/sections/top/Banner"
import Coc from "~/components/sections/top/Coc"
// import EcShop from "~/components/sections/top/EcShop"
import Events from "~/components/sections/top/Events"
import MainVisual from "~/components/sections/top/MainVisual"
import News from "~/components/sections/top/News"
import Program from "~/components/sections/top/Program"
import Sponsors from "~/components/sections/top/Sponsors"
import ThankYou from "~/components/sections/top/ThankYou"

export default {
  components: {
    MainVisual,
    News,
    // EcShop,
    ThankYou,
    Banner,
    Events,
    // Access,
    Coc,
    Sponsors,
    Program,
  },
  computed: {
    ...mapState({
      blogPosts: (state) => state.blogPosts.list.slice(0, 14), // get first 15 posts
    }),
  },
  mounted() {
    this.fetchBlogRss({ locale: this.$i18n.locale })
  },
  methods: {
    ...mapActions({
      fetchBlogRss: "blogPosts/fetch",
    }),
  },
}
</script>
