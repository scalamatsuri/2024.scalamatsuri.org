interface Page {
  path: string
  published: boolean
  header: boolean
  order: number
}
export const pagesAPI = () => {
  const appConfig = useAppConfig()
  const publishedPages = computed(() => appConfig.pages.filter((h) => h.published)).value.map((h: Page) => h.path)
  return {
    publishedPages: publishedPages,
  }
}
