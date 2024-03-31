import type { Proposal, Speaker, ProposalWithSpeakers, Sponsor, SporsorType, Staff, Session, TimeTableEvent, TimeTable } from '~/models/model'
import proposals from '~/data/proposals.json'
import adoptions from '~/data/adoptions.json'
import sponsors from '~/data/sponsors.json'
import speakers from '~/data/speakers.json'
import staffs from '~/data/staffs.json'
import timetables from '~/data/timetables.json'

export const getSponsors = () => computed(() => sponsors as Sponsor[])
export const getSponsorById = (sponsorId: string) => computed(() => sponsors.find((sponsor) => sponsor.id === sponsorId) as Sponsor)
export const getSponsorsByType = (type: SporsorType) => computed(() => sponsors.filter((sponsor) => sponsor.type === type) as Sponsor[])

/**
 * プロポーザルにスピーカー情報を結合
 * @returns ProposalWithSpeakers[]
 */
const _proposalsWithSpeakers = proposals.map((proposal) => {
  const proposalSpeakers: Speaker[] = speakers.filter((speaker: Speaker) => proposal.speakerIds.includes(speaker.id)) ?? []
  return {
    ...proposal,
    speakers: proposalSpeakers,
  } as ProposalWithSpeakers
})

/**
 * adoptions を起点に ProposalWithSpeakers を結合し、Session として返却
 * @returns Session[]
 */
const _sessions = adoptions.map((adoption) => {
  const proposalWithSpeaker = _proposalsWithSpeakers.find((proposal) => proposal.proposalId.value === adoption.proposalId.value)
  if (!proposalWithSpeaker) {
    throw new Error(`proposal not found: ${adoption.proposalId.value}`)
  } else {
    return {
      ...adoption,
      proposalWithSpeakers: proposalWithSpeaker,
    } as Session
  }
})

export const getProposals = () => computed(() => _proposalsWithSpeakers)

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

const _timetableEvents = timetables.events.map((event) => {
  return {
    ...event
  } as TimeTableEvent
})
export const getTimetableEvents = () => computed(() => _timetableEvents)

const _timetables = timetables.timetables.map((timetable) => {
  return {
    ...timetable
  } as TimeTable
})

export const getTimetables = () => computed(() => _timetables)

export const getSessions = () => computed(() => _sessions)
export const getSessionById = (sessionId: string) => computed(() => _sessions.find((session) => session.sessionId.value === sessionId) ?? null)

export const getStaff = () => computed(() => staffs as Staff[])
