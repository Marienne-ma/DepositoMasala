import { create } from "zustand";

const initialState = {
  coord: null,
  weather: [],
  base: "",
  main: {},
  visibility: 0,
  wind: {},
  clouds: {},
  dt: null,
  sys: {},
  timezone: 0,
  id: null,
  name: "",
  cod: null,
};

export const useCityStore = create((set) => ({
  ...initialState,


  setCity: (json) =>
    set({
      ...json,
    }),


  deleteCity: () =>
    set({
      ...initialState,
    }),
}));