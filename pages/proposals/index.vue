<template>
  {{ $route.fullPath }}
  <ul>
    <li v-for="proposal in localedProposals">{{ proposal.id.value }} {{ proposal.localed.title }}</li>
  </ul>
</template>

<script setup lang="ts">
import { ProposalSession, Speaker, Sponsor, Talk } from '~/models/model'
const { locale } = useI18n()
publichedCheck()

const proposals: ComputedRef<ProposalSession[]> = getProposalSessions()
const localedProposals = proposals.value.map((proposal) => ({
  ...proposal,
  localed: proposal[locale.value as keyof ProposalSession] as Talk,
}))
const speakers: ComputedRef<Speaker[]> = getSpeakers()
const sponsors: ComputedRef<Sponsor[]> = getSponsor()
const sponsor: ComputedRef<Sponsor> = getSponsorById('SAMURAI_3')
const sponsor2: ComputedRef<Sponsor> = getSponsorById('SAMURAI_X')
</script>
