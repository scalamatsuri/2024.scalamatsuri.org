<i18n lang="yaml">
</i18n>

<template>
  <section class="section booth">
    <h2 class="section_title">
      <span class="section_title_inner">{{ title }}</span>
    </h2>
    <table class="addon-sponsorship-table">
      <tbody>
        <tr v-for="c in contents" :key="c.name">
          <th>{{ c.name }}</th>
          <td>{{ c.value }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

interface PlanAddon {
  name: String,
  value: String,
}

const { contents } = defineProps({
  title: String,
  contents: Array<PlanAddon>
})


</script>

<style lang="scss" scoped>
.addon-sponsorship-table {
  width: 100%;
  margin-top: 60px;
  border-collapse: collapse;
  border: 1px solid #eee;
}
.addon-sponsorship-table th,
td {
  border: 1px solid #eee;
  padding: 1rem;
  text-align: center;
}
.addon-sponsorship-table th {
  width: 50%;
}

</style>
