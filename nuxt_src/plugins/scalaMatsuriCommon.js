// ScalaMatsuri Commons
// ---------------------------------------------------------------------------
// 共通処理化したいメソッドを定義しましょう。
import Vue from 'vue'

Vue.mixin({
  methods: {
    // shffle() の様にメソッドを定義すれば、 this.shuffle() としてどこからでも呼ぶ事ができます。
    shuffle(array) {
      let m = array.length
      while (m) {
        const i = Math.floor(Math.random() * m--);
        [array[m], array[i]] = [array[i], array[m]]
      }
      return array
    }
  }
})
