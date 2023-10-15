<template>
  <div class="news">
    <div class="news_inner">
      <h2 class="news_title">News</h2>
      <ul class="news_list">
        <!-- <li
          v-for="(post, idx) in posts"
          :key="idx"
          class="news_item"
          :class="{ 'news_item-show': currentIdx === idx, 'news_item-hide': posts.length > 1 ? currentIdx === idx + (1 % posts.length) : false }">
          <a :href="post.link._text" target="_blank" rel="noopener">{{ post.title._text }}</a>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// import xmlConverter from 'xml-js'
// const { year } = useAppConfig()
const year = '2023'
const { data: postsXmlStr } = await useFetch(`https://blog.scalamatsuri.org/rss/category/ScalaMatsuri${year}`, {
  onRequest({ request, options }) {
    options.headers = { ...options.headers, accept: 'application/xml, text/plain, */*' }
    console.dir(
      JSON.stringify(
        {
          headers: options.headers,
        } ?? 'データナシ'
      )
    )
  },
})
console.log(postsXmlStr.value)
</script>

<style scoped lang="scss">
.news {
  padding: 0 20px;
  background-color: #000;
  color: #fff;
  width: 100%;
}
.news_inner {
  max-width: $pcMinWidth - 40px;
  margin: 0 auto;
}
.news_item {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: -50px;
  left: 0;
  max-height: 60px;
  padding: 0 38px;
}
.news_item-show {
  top: 0;
  pointer-events: all;
  transition: all 0.3s ease-in;
  opacity: 100;
}
.news_item-hide {
  top: 50px;
  transition: all 0.3s ease-in;
  opacity: 0;
}
.news_title {
  background: #eba80a;
  font-weight: bold;
  font-size: 18px;
  width: 124px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  float: left;
}

.news_list {
  position: relative;
  line-height: 60px;
  height: 60px;
  overflow: hidden;
  & .test {
    border: 1px solid #f00;
  }

  a {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
  }

  img {
    vertical-align: middle;
    margin-top: -4px;
    margin-left: 4px;
  }
}
</style>
