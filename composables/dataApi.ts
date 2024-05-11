import type {
  Proposal,
  Speaker,
  ProposalWithSpeakers,
  Sponsor,
  SporsorType,
  Staff,
  Session,
  TimeTableEvent,
  TimeTable,
  Adoption,
} from '~/models/model'
import proposals from '~/data/proposals.json'
import adoptions from '~/data/adoptions.json'
import sponsors from '~/data/sponsors.json'
import speakers from '~/data/speakers.json'
import timetables from '~/data/timetables.json'

import omcAdoptions from '~/data/omcAdoptions.json'
import omcProposals from '~/data/omcProposals.json'

import staffs from '~/data/staffs.json'

export const getSponsors = () => computed(() => sponsors as Sponsor[])
export const getSponsorById = (sponsorId: string) => computed(() => sponsors.find((sponsor) => sponsor.id === sponsorId) as Sponsor)
export const getSponsorsByType = (type: SporsorType) => computed(() => sponsors.filter((sponsor) => sponsor.type === type) as Sponsor[])

export const getStaff = () => computed(() => staffs as Staff[])

/**
 * ------------------------------------------------------------------
 * for Conference
 * ------------------------------------------------------------------
 */
// プロポーザルにスピーカー情報を結合
const _proposalsWithSpeakers = proposals.map((proposal) => {
  const proposalSpeakers: Speaker[] = speakers.filter((speaker: Speaker) => proposal.speakerIds.includes(speaker.id)) ?? []
  return {
    ...proposal,
    speakers: proposalSpeakers,
  } as ProposalWithSpeakers
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

/**
 * ------------------------------------------------------------------
 * for Conference
 * ------------------------------------------------------------------
 */
// adoptions を起点に ProposalWithSpeakers を結合し、Session として返却
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

const _timetableEvents = timetables.events.map((event) => {
  return {
    ...event,
  } as TimeTableEvent
})
export const getTimetableEvents = () => computed(() => _timetableEvents)

const _timetables = timetables.timetables
  .filter((timetable) => timetable.timetableId != 'OPEN_MIC_CONFERENCE')
  .map((timetable) => {
    return {
      ...timetable,
    } as TimeTable
  })

export const getTimetables = () => computed(() => _timetables)
export const getSessions = () => computed(() => _sessions)
export const getSessionById = (sessionId: string) => computed(() => _sessions.find((session) => session.sessionId.value === sessionId) ?? null)

/**
 * ------------------------------------------------------------------
 * for Open Mic Conference
 * ------------------------------------------------------------------
 */
const _omcProposalsWithSpeakers = omcProposals.map((proposal) => {
  const proposalSpeakers: Speaker[] = speakers.filter((speaker: Speaker) => proposal.speakerIds.includes(speaker.id)) ?? []
  return {
    ...proposal,
    speakers: proposalSpeakers,
  } as ProposalWithSpeakers
})

const _omcSessions = omcAdoptions.map((adoption) => {
  const proposalWithSpeaker = _omcProposalsWithSpeakers.find((proposal) => proposal.proposalId.value === adoption.proposalId.value)
  if (!proposalWithSpeaker) {
    throw new Error(`proposal not found: ${adoption.proposalId.value}`)
  } else {
    return {
      ...adoption,
      proposalWithSpeakers: proposalWithSpeaker,
    } as Session
  }
})

const _omcTimetables = timetables.timetables
  .filter((timetable) => timetable.timetableId != 'CONFERENCE')
  .map((timetable) => {
    return {
      ...timetable,
    } as TimeTable
  })
export const getOMCTimetables = () => computed(() => _omcTimetables)
export const getOMCSessions = () => computed(() => _omcSessions)
