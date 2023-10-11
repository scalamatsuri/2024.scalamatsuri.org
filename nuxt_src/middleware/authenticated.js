
/**
 * Middleware: Determine whether user is logged in
 */
export default async function ({ app, store, redirect }) {
  if (!store.getters['auth/isLoggeIn']) {
    // if not logged in, then redirect to login page.
    await redirect(`/${app.i18n.locale}/login`)
  }
}
