import type { Proposal, Speaker, ProposalWithSpeakers, Sponsor, SporsorType, Staff } from '~/models/model'
import proposals from '~/data/proposals.json'
import sponsors from '~/data/sponsors.json'
import speakers from '~/data/speakers.json'
import staffs from '~/data/staffs.json'

export const getSponsors = () => computed(() => sponsors as Sponsor[])
export const getSponsorById = (sponsorId: string) => computed(() => sponsors.find((sponsor) => sponsor.id === sponsorId) as Sponsor)
export const getSponsorsByType = (type: SporsorType) => computed(() => sponsors.filter((sponsor) => sponsor.type === type) as Sponsor[])

export const getProposals = () =>
  computed(() =>
    proposals.map((proposal) => {
      const proposalSpeakers: Speaker[] = speakers.filter((speaker: Speaker) => proposal.speakerIds.includes(speaker.id)) ?? []
      return {
        ...proposal,
        speakers: proposalSpeakers,
      } as ProposalWithSpeakers
    })
  )

export const getProposalById = (proposalId: string) =>
  computed(() => {
    const maybeProposal: Proposal | undefined = proposals.find((proposal) => proposal.proposalId.value === proposalId)
    if (maybeProposal) {
      const proposalSpeakers: Speaker[] = speakers.filter((speaker: Speaker) => maybeProposal.speakerIds.includes(speaker.id))
      return {
        ...maybeProposal,
        speakers: proposalSpeakers,
      } as ProposalWithSpeakers
    } else {
      return null
    }
  })
export const getStaff = () => computed(() => staffs as Staff[])
