// import * as mTypes from './mutation-types'
// import { auth, database } from '~/plugins/firebase'

// const VOTE_NUM = 5

// export const state = () => ({
//   votes: [],
//   votedIds: [],
//   userInfo: {}
// })

// export const actions = {
//   /**
//    * fewtch users votes from firestore.
//    * NOTE: This function never concerns about auth's initialization status.
//    *       Please be aware that auth is initialized before it's call.
//    */
//   async fetch({ commit }) {
//     try {
//       const user = auth.currentUser
//       if (user) {
//         await database.collection('users').doc(user.uid).get().then(async (doc) => {
//           await commit(mTypes.SET_USER_VOTES, doc.data() && doc.data().allVotes ? doc.data().allVotes : [])
//           await commit(mTypes.SET_USER_INFO, doc.data() && doc.data().info ? doc.data().info : {})
//           await commit(mTypes.SET_CHECKIN_CODE, doc.data() && doc.data().info ? doc.data().info.ticketCode : '')
//         })
//       } else {
//         throw new Error('User is not signed in yet.')
//       }
//     } catch (error) {
//       return Promise.reject(error)
//     }
//   },

//   /**
//    * Store local votes to firebase firestore.
//    */
//   store({ state }) {
//     try {
//       const user = auth.currentUser

//       const votes = state.votes

//       if (user) {
//         const userInfo = {
//           ...state.userInfo,
//           timestamp: new Date()
//         }

//         database.collection('users').doc(user.uid).set({
//           info: userInfo,
//           allVotes: votes
//         })
//       } else {
//         throw new Error('User is not signed in yet.')
//       }
//     } catch (error) {
//       return Promise.reject(error)
//     }
//   }o
// }

// export const mutations = {
//   [mTypes.SET_USER_VOTES](state, votes) {
//     state.votes = votes
//   },
//   [mTypes.APPEND_USER_VOTE](state, vote) {
//     if (state.votes.length < VOTE_NUM) { state.votes = [...state.votes, vote] }
//   },
//   [mTypes.REMOVE_USER_VOTE](state, vote) {
//     const targetIdx = state.votes.findIndex(v => v.id === vote || vote.id === v.id)
//     if (targetIdx > -1) {
//       state.votes.splice(targetIdx, 1)
//     }
//   },
//   [mTypes.SET_CHECKIN_CODE](state, code) {
//     state.userInfo = {
//       ...state.userInfo,
//       hasTicketCode: code && code.length > 1,
//       ticketCode: code || ''
//     }
//   },
//   [mTypes.SET_USER_INFO](state, user) {
//     if (user) {
//       state.userInfo = {
//         ...state.userInfo,
//         email: user.email || '',
//         name: user.name || user.displayName || '',
//         providerId: 'firebase',
//         timestamp: new Date()
//       }
//     }
//   }
// }

export const getters = {
  /**
   * resolve sessions that user voted.
   */
  userVotes: (state) => {
    // for avoiding edit.
    const copy = [...state.votes];
    return copy.sort(function (a, b) {
      if (a.rank < b.rank) return -1;
      if (a.rank > b.rank) return 1;
      return 0;
    });
  },
  checkinCode: (state) => state.userInfo.ticketCode,

  /**
   * Whether user votes exeeded it's limit.
   */
  exceededVoteLimit: (state) => (state.votes ? state.votes.length >= VOTE_NUM : false),
};
