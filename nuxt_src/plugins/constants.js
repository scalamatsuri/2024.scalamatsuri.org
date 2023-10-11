/**
 * アプリケーション全体で利用できる定数を定義できます。
 *
 * ここに定義した変数は各コンポーネントなどで this.$YEAR などのように参照できます。
 * asyncData などのサーバーサイドでは、下記のように context から取得して参照できます。
 *
 * ```
 * export default {
 *   asyncData({ $YEAR }) {
 *     console.log($YEAR)
 *   }
 * }
 * ```
 */
export default (_, inject) => {
  inject("YEAR", "2024")
}
