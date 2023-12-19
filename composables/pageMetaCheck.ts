export const pageMetaCheck = () => {
  const { locale } = useI18n()
  const { currentRoute } = useRouter()
  const { publishedPages } = pagesAPI()
  const currentPagePath = currentRoute.value.path
  const currentPageName: Array[string] = currentPagePath.split(`/`)[2]
  const publishedPage: Page = publishedPages.find((p) => p.path === currentPageName)
  const isNotFoundPage: boolean = currentPagePath !== `/${locale.value}` && !publishedPage
  const { scalaMatsuri } = useAppConfig()
  useHead({
    title: `${publishedPage.title[locale.value]}`,
    titleTemplate: `%s | ${scalaMatsuri}`,
  })
  if (isNotFoundPage) {
    return useState('pageMetaCheck', () => {
      throw createError({
        statusCode: 404,
        message: '404 Resource Not Found',
        fatal: true,
      })
    })
  }
}
