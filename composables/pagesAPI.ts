interface PageTitle {
  en: string
  ja: string
}
interface Page {
  path: string
  title: PageTitle
  published: boolean
  header: boolean
  order: number
}
export const pagesAPI = () => {
  const appConfig = useAppConfig()
  const publishedPages = computed(() => appConfig.pages.filter((h) => h.published)).value.map((h: Page) => ({
    path: h.path,
    title: h.title,
  }))
  return {
    publishedPages: publishedPages,
  }
}
