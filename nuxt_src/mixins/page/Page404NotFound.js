/**
 * Return 404(Not Found) forcibly when this mixin injected.
 * NOTE: This mixin should be used from only 'pages' components. Please avoid abusing this mixin.
 */
export default {
  asyncData({ error }) {
    error({ statusCode: 404, message: '404 Resource Not Found' })
  },
}
