import { auth } from '~/plugins/firebase'

// @ts-check

/**
 * ログイン状態は unknown, loggedOut, loggedIn の3状態
 * @typedef {{status: 'unknown' | 'loggedOut' | 'loggedIn', profile: any}} state
 */

/** @type {() => state} */
export const state = () => ({
  status: 'unknown',
  profile: null,
})

export const getters = {
  /** @type {(s: state) => boolean} */
  isLoggedIn: (state) => state.status === 'loggedIn',
  isLoggedOut: (state) => state.status === 'loggedOut',
  isUnknown: (state) => state.status === 'unknown',
}

export const actions = {
  /**
   * @param {*} context
   * @param {firebase.User} user
   */
  getUser({ commit }, user) {
    commit('setUser', user)
  },
  logout({ commit }) {
    auth.signOut().then(() => {
      commit('logout')
    })
  },
}

export const mutations = {
  /**
   * @param {state} state
   * @param {firebase.User} user
   */
  setUser(state, user) {
    state.status = 'loggedIn'
    const { providerId, uid, displayName, email, photoURL } = user.providerData[0]

    const url = photoURL || encodeURI(`https://ui-avatars.com/api/?name=${displayName || ''}`)

    state.profile = { providerId, uid, displayName, email, photoURL: url }
  },
  /**
   * @param {state} state
   */
  logout(state) {
    state.status = 'loggedOut'
    state.profile = null
  },
}
