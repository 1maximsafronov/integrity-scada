import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  news: []
};

const appData = createReducer(initialState, (builder) => {
  // builder
  //   .addCase(changeCity, (state, action) => {
  //     state.currentLocation = action.payload;
  //   })
  //   .addCase(loadHotels, (state, action) => {
  //     state.hotels = action.payload;
  //     state.isDataLoaded = true;
  //   });
});

export {appData};
