

export const state = () => ({
  modal: {
    active: false,
    currentKills: 0
  },
  isDabbed: true,
  points: 0,
  pointsPerClick: 1,
  pointsPerSecond: 0
})

export const mutations = {
  setModalActive (state, value) {
    state.modal.active = value;
  },
  addPointsMutation(state, value) {
    state.points = state.points + value;
  },
  addPointsPerClick(state, value) {
    state.pointsPerClick = state.pointsPerClick + value;
  },
  toggleDab(state) {
    state.isDabbed = !state.isDabbed;
  },
  addPointsPerSecond(state, value) {
    state.pointsPerSecond = state.pointsPerSecond + value;
  }
}
export const actions = {

  toggleModal (context) {
    console.log(context);
    context.commit('setModalActive', !context.state.modal.active);
  },
  addPoints(context, value) {
    context.commit('addPointsMutation', value)
  },
}
