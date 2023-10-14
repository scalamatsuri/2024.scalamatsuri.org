export const publichedCheck = () => {
  const { locale } = useI18n()
  const { currentRoute } = useRouter()
  const { publishedPages } = pagesAPI()
  const currentPagePath = currentRoute.value.path
  const currentPageName = currentPagePath.split(`/${locale.value}/`)[1]
  const isPublishedPage = publishedPages.find((h) => h === currentPageName)
  const isNotFoundPage = currentPagePath !== `/${locale.value}` && !isPublishedPage
  if (isNotFoundPage) {
    return useState('publichedCheck', () => {
      throw createError({
        statusCode: 404,
        message: '404 Resource Not Found',
        fatal: true,
      })
    })
  }
}
