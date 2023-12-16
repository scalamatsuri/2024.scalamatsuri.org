import { Proposal, Speaker, Sponsor, SporsorType } from '~/models/model'
import proposals from '~/data/proposals.json'
import sponsors from '~/data/sponsors.json'
import speakers from '~/data/speakers.json'

export const getSponsors = () => computed(() => sponsors as Sponsor[])
export const getSponsorById = (sponsorId: string) => computed(() => sponsors.find((sponsor) => sponsor.id === sponsorId) as Sponsor)
export const getSponsorsByType = (type: SporsorType) => computed(() => sponsors.filter((sponsor) => sponsor.type === type) as Sponsor[])

// export const getSpeakers = () => computed(() => speakers as Speaker[])
export const getProposals = () =>
  computed(
    () =>
      proposals.map((proposal) => {
        const proposalSpeakers: Speaker[] = speakers.filter((speaker: Speaker) => proposal.speakerIds.includes(speaker.id))
        return {
          ...proposal,
          speakers: proposalSpeakers,
        }
      }) as Proposal[]
  )
export const getProposalById = (proposalId: string) =>
  computed(() => {
    const maybeProposal = proposals.find((proposal) => proposal.id.value === proposalId)
    if (maybeProposal) {
      const proposalSpeakers: Speaker[] = speakers.filter((speaker: Speaker) => maybeProposal.speakerIds.includes(speaker.id))
      return {
        ...maybeProposal,
        speakers: proposalSpeakers,
      } as Proposal
    } else {
      return null
    }
  })
