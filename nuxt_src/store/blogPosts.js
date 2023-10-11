import xmlConverter from 'xml-js'
import * as mTypes from './mutation-types'

export const state = () => ({
  list: [],
})

export const actions = {
  async fetch({ commit }, { locale }) {
    try {
      // If locale was invalid or not provided, fallback to english endpoint.
      const requestUrl = hatenaBlogUrls[locale] || hatenaBlogUrls.en
      const { data: postsXmlStr } = await this.$axios.get(requestUrl)

      // with 'compact: true' option, rss.channel.item contains array of recent posts.
      const posts = [].concat(xmlConverter.xml2js(postsXmlStr, { compact: true }).rss.channel.item) || []
      commit(mTypes.SET_BLOG_POSTS, posts)
    } catch (error) {
      return Promise.reject(error)
    }
  },
}

export const mutations = {
  [mTypes.SET_BLOG_POSTS](state, posts) {
    state.list = posts
  },
}

const hatenaBlogUrls = {
  ja: "https://blog.scalamatsuri.org/rss/category/ScalaMatsuri2024",
  en: "https://blog-en.scalamatsuri.org/rss/category/ScalaMatsuri2024",
}
