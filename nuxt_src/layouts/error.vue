<template>
  <div>
    <div id="error">
      <div class="main">
        <div class="main_inner">
          <h1 class="main_title">404 not found</h1>
        </div>
      </div>
      <section class="section">
        <div class="section_note">
          None.getOrElse(
          <a href="/">{{ current_path }}</a>
          )
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'empty',
  data() {
    return {
      current_path: '',
    }
  },
  mounted() {
    this.current_path = `${(this.current_path = window.location.origin)}${this.localePath('index')}`
  },
}
</script>
