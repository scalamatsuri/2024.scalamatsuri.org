<template>
  <div class="news">
    <div class="news_inner">
      <h2 class="news_title">
        News
      </h2>
      <ul class="news_list">
        <li v-for="(post, idx) in posts" :key="idx" class="news_item" :class="{ 'news_item-show': currentIdx === idx, 'news_item-hide': posts.length > 1 ? currentIdx === (idx + 1 % posts.length) : false }">
          <a :href="post.link._text" target="_blank" rel="noopener">{{ post.title._text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers'
export default {
  props: {
    posts: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data: () => {
    return {
      currentIdx: 0,
      intervalId: null // for setInterval and clearInterval
    }
  },
  watch: {
    posts: function (newPosts, _) {
      if (newPosts.length > 0) {
        this.intervalId = setInterval(() => { this.currentIdx = (this.currentIdx + 1) % newPosts.length }, 5000)
      }
    }
  },
  beforeDestroy: function () {
    if (this.intervalId) clearInterval(this.intervalId)
  }
}
</script>
