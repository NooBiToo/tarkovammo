import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = () => ({
  ammo: {},
  error: false,
  preload: true,
});

export const mutations = {
  SET_AMMO_TO_VUEX: (state, ammo) => {
    state.ammo = ammo;
    state.preload = false;
  },
  SET_ERROR: (state, error) => {
    state.error = !error;
  },
};

export const getters = {
  PRELOAD(state) {
    return state.preload;
  },
  ERROR(state) {
    return state.error;
  },
  AMMO(state) {
    return state.ammo;
  },
};
