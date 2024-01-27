interface PageTitle {
  en: string
  ja: string
}
export interface Page {
  path: string
  title: PageTitle
  published: boolean
  header: boolean
  order: number
}
export const pagesAPI = () => {
  const appConfig = useAppConfig()
  const publishedPages = computed(() => appConfig.pages.filter((h) => h.published)).value
  return {
    publishedPages: publishedPages,
  }
}
